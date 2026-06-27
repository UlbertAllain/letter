"use client";

import { motion } from "framer-motion";
import {
  EnvelopeWidget,
  SparkleField,
  Tape,
} from "@/components/CuteDecorations";

type LetterSectionProps = {
  onNext: () => void;
};

export function LetterSection({ onNext }: LetterSectionProps) {
  return (
    <section className="relative px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="cute-card p-5"
      >
        <SparkleField />
        <EnvelopeWidget className="right-5 top-8 scale-75 opacity-80" />

        <div className="relative z-10 rounded-[1.6rem] border border-rose-100 bg-[#fffaf7]/90 p-5 shadow-inner">
          <Tape className="left-1/2 top-[-12px] -translate-x-1/2" />

          <div className="mb-5 pt-4">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-rose-400">
              Surat kecil
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#9f1d4e]">
              Untuk kamu
            </h2>
          </div>

          <div className="space-y-5 text-[15.5px] leading-8 text-[#5f4658]">
            <p>Haii,</p>

            <p>Makasih ya sudah mau baca sampai bagian ini.</p>

            <p>
              Aku tahu kamu mungkin masih marah, kecewa, atau capek. Dan aku gak
              mau pura-pura seolah semuanya bisa selesai cuma karena satu
              website kecil ini.
            </p>

            <p>tapi aku cuma mau minta maaf dengan cara yang lebih baik.</p>

            <p>Maaf yah kalau aku pernah bikin kamu se kecewa ini.</p>

            <p>
              aku sadar, minta maaf itu bukan cuma bilang “maaf”, tapi juga
              harus ngerti bagian mana yang salah dan berusaha memperbaikinya.
            </p>

            <p>
              mau marah tuh boleh boleh aja siii. Kamu berhak butuh waktu. jadi
              aku gak akan maksa kamu buat langsung baik-baik aja.
            </p>

            <p>
              Kalau nanti kamu sudah siap ngobrol, aku akan dengerin. Bukan buat
              menang debat, bukan buat membela diri, tapi buat benar-benar
              memahami.
            </p>

            <p>Maaf ya, cintaa.</p>

            <p className="font-extrabold text-[#8a1744]">Dari Rayhan.</p>
          </div>

          <button
            onClick={onNext}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(244,63,94,0.25)] active:scale-[0.98]"
          >
            Lanjut baca
          </button>
        </div>
      </motion.div>
    </section>
  );
}
