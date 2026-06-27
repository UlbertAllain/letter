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
              Untuk Monica
            </h2>
          </div>

          <div className="space-y-5 text-[15.5px] leading-8 text-[#5f4658]">
            <p>Monica,</p>

            <p>Makasih ya sudah mau baca sampai bagian ini.</p>

            <p>
              Rayhan tahu kamu mungkin masih marah, kecewa, atau capek. Dan
              Rayhan gak mau pura-pura seolah semuanya bisa selesai cuma karena
              satu website kecil ini.
            </p>

            <p>Rayhan cuma mau minta maaf dengan cara yang lebih baik.</p>

            <p>
              Maaf kalau Rayhan pernah bikin kamu merasa tidak didengar. Maaf
              kalau Rayhan kurang peka, kurang sabar, atau bikin kamu merasa
              sendirian dalam hubungan ini. Harusnya Rayhan bisa lebih hati-hati
              dalam ngomong, lebih ngerti perasaan kamu, dan lebih dewasa saat
              ada masalah.
            </p>

            <p>
              Rayhan sadar, minta maaf itu bukan cuma bilang “maaf”, tapi juga
              harus ngerti bagian mana yang salah dan berusaha memperbaikinya.
            </p>

            <p>
              Kamu berhak marah. Kamu berhak butuh waktu. Rayhan gak akan maksa
              kamu buat langsung baik-baik aja.
            </p>

            <p>
              Tapi Rayhan ingin kamu tahu, kamu tetap seseorang yang berarti.
              Rayhan masih peduli, masih ingat hal-hal kecil tentang kamu, dan
              masih ingin memperbaiki semuanya dengan cara yang lebih baik.
            </p>

            <p>
              Kalau nanti kamu sudah siap ngobrol, Rayhan akan dengerin. Bukan
              buat menang debat, bukan buat membela diri, tapi buat benar-benar
              memahami.
            </p>

            <p>Maaf ya, Monica.</p>

            <p className="font-extrabold text-[#8a1744]">Dari Rayhan.</p>
          </div>

          <button
            onClick={onNext}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(244,63,94,0.25)] active:scale-[0.98]"
          >
            Lanjut baca hal kecil tentang Monica
          </button>
        </div>
      </motion.div>
    </section>
  );
}
