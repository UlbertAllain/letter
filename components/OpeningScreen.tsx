"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  CuteClouds,
  EnvelopeWidget,
  SparkleField,
  StickyNote,
  TeddyMascot,
} from "@/components/CuteDecorations";

type OpeningScreenProps = {
  onNext: () => void;
};

export function OpeningScreen({ onNext }: OpeningScreenProps) {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="cute-card min-h-[680px] p-6"
      >
        <CuteClouds />
        <SparkleField />
        <TeddyMascot className="left-5 bottom-8 z-20" />
        <EnvelopeWidget className="right-7 bottom-16 z-20 scale-90" />

        <div className="relative z-10 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/75 px-4 py-2 text-sm font-bold text-rose-500 shadow-sm">
            <Sparkles size={16} />
            Pesan singkat dari aku
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-tight text-[#8a1744]">
            Haaaai Monica
          </h1>

          <p className="mx-auto mt-5 max-w-[290px] text-[16px] leading-8 text-[#5f4658]">
            aku tahu mungkin ini bukan waktu yang paling mudah. Tapi aku ingin
            menyampaikan sesuatu dengan cara yang lebih baik.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <StickyNote icon="💗" title="Tidak memaksa" rotate="-rotate-2">
              Kamu ngga harus langsung membalas.
            </StickyNote>

            <StickyNote icon="🌸" title="Tidak menyalahkan" rotate="rotate-1">
              Ini bukan untuk membuatmu merasa bersalah.
            </StickyNote>

            <StickyNote icon="💌" title="Cuma pesan" rotate="-rotate-1">
              aku hanya ingin bicara lebih tenang.
            </StickyNote>
          </div>

          <button
            onClick={onNext}
            className="mt-9 w-full rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_18px_38px_rgba(244,63,94,0.30)] transition active:scale-[0.98]"
          >
            Lanjut
          </button>
        </div>
      </motion.div>
    </section>
  );
}
