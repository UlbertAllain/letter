"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  BunnyPeek,
  EnvelopeWidget,
  SparkleField,
} from "@/components/CuteDecorations";

type ForgiveGameProps = {
  onAccept: () => void;
  onNeedTime: () => void;
};

const noMessages = [
  "loh",
  "eitssss gabisa",
  "wleeeee",
  "pencet tombol satunya ajaaaaaaa ",
  "kaburrrrr",
  "yahhhhhhh",
];

const mobileSafePositions = [
  { x: 72, y: -20 },
  { x: -68, y: 42 },
  { x: 52, y: 92 },
  { x: -42, y: -64 },
  { x: 88, y: 62 },
  { x: -80, y: 96 },
];

export function ForgiveGame({ onAccept, onNeedTime }: ForgiveGameProps) {
  const [noCount, setNoCount] = useState(0);

  const position = useMemo(() => {
    return mobileSafePositions[noCount % mobileSafePositions.length];
  }, [noCount]);

  const currentMessage =
    noCount === 0 ? null : noMessages[(noCount - 1) % noMessages.length];

  const handleNoClick = () => {
    if (noCount >= 6) {
      onNeedTime();
      return;
    }

    setNoCount((prev) => prev + 1);
  };

  const handleAccept = () => {
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.72 },
      scalar: 0.85,
    });

    onAccept();
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="cute-card min-h-[680px] p-6"
      >
        <SparkleField />
        <BunnyPeek className="left-[-36px] top-[190px] z-20" />
        <EnvelopeWidget className="right-7 bottom-12 z-20 scale-75 opacity-80" />

        <div className="relative z-10 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-rose-400">
            Satu pertanyaan
          </p>

          <h2 className="mt-4 font-display text-[42px] font-extrabold leading-tight text-[#9f1d4e]">
            Maafin aku yaaa?
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-24 rounded-full bg-rose-300" />

          <p className="mx-auto mt-6 max-w-[280px] text-[16px] leading-8 text-[#5f4658]">
            Tidak harus dijawab serius sekarang. Ini cuma bagian kecil supaya
            halaman ini tidak terlalu kaku.
          </p>

          {currentMessage && (
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute right-0 top-[188px] max-w-[170px] rounded-[1.4rem] border border-rose-100 bg-white/90 px-4 py-3 text-xs font-extrabold leading-5 text-[#8a1744] shadow-[0_12px_30px_rgba(190,18,60,0.12)]"
            >
              {currentMessage}
              <span className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-b border-r border-rose-100 bg-white/90" />
            </motion.div>
          )}

          <div className="relative mx-auto mt-16 h-60 max-w-[320px]">
            <button
              onClick={handleAccept}
              className="absolute left-4 top-16 z-20 rounded-[1.4rem] bg-gradient-to-r from-rose-400 to-pink-500 px-10 py-4 text-lg font-extrabold text-white shadow-[0_15px_35px_rgba(244,63,94,0.30)] active:scale-[0.98]"
            >
              Iya
            </button>

            <motion.button
              animate={{
                x: noCount === 0 ? 0 : position.x,
                y: noCount === 0 ? 0 : position.y,
                rotate: noCount === 0 ? 0 : noCount % 2 === 0 ? -5 : 5,
              }}
              transition={{
                x: { type: "spring", stiffness: 240, damping: 16 },
                y: { type: "spring", stiffness: 240, damping: 16 },
                rotate: { type: "tween", duration: 0.18 },
              }}
              onClick={handleNoClick}
              className="absolute right-4 top-16 z-20 rounded-[1.4rem] border border-rose-300 bg-white px-8 py-4 text-lg font-extrabold text-rose-500 shadow-[0_12px_28px_rgba(190,18,60,0.13)] active:scale-[0.98]"
            >
              {noCount >= 6 ? "Butuh waktu" : "Belum"}
            </motion.button>
          </div>

          {noCount >= 6 && (
            <div className="mx-auto mt-1 max-w-[290px] rounded-[1.5rem] border border-rose-100 bg-white/75 px-5 py-4 text-xs leading-5 text-[#8b6f80]">
              wleeee
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
