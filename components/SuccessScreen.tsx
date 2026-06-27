"use client";

import { motion } from "framer-motion";
import {
  SparkleField,
  TeddyMascot,
  EnvelopeWidget,
} from "@/components/CuteDecorations";

type SuccessScreenProps = {
  onNext: () => void;
};

export function SuccessScreen({ onNext }: SuccessScreenProps) {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="cute-card min-h-[650px] p-7 text-center"
      >
        <SparkleField />
        <TeddyMascot className="left-6 bottom-12 z-20" />
        <EnvelopeWidget className="right-8 top-24 scale-75 opacity-80" />

        <div className="relative z-10 pt-12">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-rose-100 text-5xl shadow-inner">
            🥹
          </div>

          <h2 className="font-display text-4xl font-extrabold text-[#9f1d4e]">
            Makasiiiiiii
          </h2>

          <p className="mx-auto mt-5 max-w-[300px] text-[16px] leading-8 text-[#5f4658]">
            aku tahu satu klik ini bukan berarti semuanya langsung selesai. Tapi
            makasih karena kamu masih mau baca.
          </p>

          <button
            onClick={onNext}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(244,63,94,0.28)] active:scale-[0.98]"
          >
            Buka suratnya 💌
          </button>
        </div>
      </motion.div>
    </section>
  );
}
