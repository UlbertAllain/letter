"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SparkleField, Tape } from "@/components/CuteDecorations";

type HeartUnlockProps = {
  onNext: () => void;
};

const hearts = [
  { left: "12%", top: "24%" },
  { left: "70%", top: "18%" },
  { left: "22%", top: "52%" },
  { left: "78%", top: "58%" },
  { left: "45%", top: "38%" },
];

export function HeartUnlock({ onNext }: HeartUnlockProps) {
  const [clicked, setClicked] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (clicked.includes(index)) return;

    const nextClicked = [...clicked, index];
    setClicked(nextClicked);

    if (nextClicked.length === hearts.length) {
      setTimeout(onNext, 700);
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="cute-card min-h-[680px] p-6"
      >
        <SparkleField />

        <div className="relative z-10 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-rose-400">
            Sebentar lagi
          </p>

          <h2 className="mx-auto mt-3 max-w-[320px] font-display text-4xl font-extrabold leading-tight text-[#9f1d4e]">
            Buka pesannya pelan-pelan
          </h2>

          <p className="mx-auto mt-4 max-w-[310px] text-[15px] leading-7 text-[#5f4658]">
            Sentuh lima hati kecil ini dulu. Setelah itu, surat Rayhan akan
            terbuka.
          </p>

          <div className="relative mx-auto mt-8 h-[340px] max-w-[330px] rounded-[2rem] border border-rose-100 bg-white/45 shadow-inner">
            <Tape className="left-8 top-[-10px]" />
            <Tape className="right-8 top-[-10px] rotate-6" />

            {hearts.map((heart, index) => {
              const isClicked = clicked.includes(index);

              return (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => handleClick(index)}
                  className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-[0_14px_28px_rgba(190,18,60,0.13)]"
                  style={{ left: heart.left, top: heart.top }}
                  animate={{
                    scale: isClicked ? 0 : [1, 1.12, 1],
                    y: isClicked ? 0 : [0, -8, 0],
                    opacity: isClicked ? 0 : 1,
                  }}
                  transition={{
                    duration: isClicked ? 0.28 : 2.2,
                    repeat: isClicked ? 0 : Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut",
                  }}
                >
                  💗
                </motion.button>
              );
            })}

            <div className="absolute bottom-5 left-1/2 w-[82%] -translate-x-1/2 rounded-[1.4rem] border border-rose-100 bg-[#fffaf7]/90 px-4 py-3 text-sm font-bold text-[#8a1744]">
              {clicked.length}/5 hati terbuka
            </div>
          </div>

          {clicked.length === hearts.length && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-sm font-bold text-[#8a1744]"
            >
              Oke. Suratnya kebuka.
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
