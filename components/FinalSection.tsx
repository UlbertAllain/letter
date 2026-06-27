"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, MessageCircle, RotateCcw, Send } from "lucide-react";
import {
  EnvelopeWidget,
  SparkleField,
  TeddyMascot,
} from "@/components/CuteDecorations";

type FinalSectionProps = {
  whatsappNumber?: string;
  onReadAgain?: () => void;
};

type Choice = "time" | "explain" | "chat" | null;

export function FinalSection({
  whatsappNumber,
  onReadAgain,
}: FinalSectionProps) {
  const [choice, setChoice] = useState<Choice>(null);

  const buildWhatsappLink = (message: string) => {
    if (!whatsappNumber) return "#";

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleMissingNumber = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!whatsappNumber) {
      event.preventDefault();
      alert("Nomor WhatsApp Rayhan belum diisi.");
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="cute-card min-h-[720px] p-6"
      >
        <SparkleField />
        <TeddyMascot className="right-5 bottom-28 z-20 scale-90" />
        <EnvelopeWidget className="left-8 top-24 scale-75 opacity-80" />

        <div className="relative z-10">
          <div className="mb-6 text-6xl">💐</div>

          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-rose-400">
            Penutup
          </p>

          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#9f1d4e]">
            Monica,
          </h2>

          <div className="mt-5 max-w-[310px] space-y-5 text-[16px] leading-8 text-[#5f4658]">
            <p>
              Kalau setelah baca ini kamu masih belum siap bicara, tidak
              apa-apa. Rayhan mengerti.
            </p>

            <p>
              Tapi kalau suatu saat kamu mau ngobrol, Rayhan akan mendengarkan
              dengan lebih tenang.
            </p>

            <p>
              Bukan untuk memaksa semuanya kembali seperti dulu. Tapi untuk
              memperbaiki bagian yang pernah Rayhan rusak.
            </p>
          </div>

          <div className="mt-8 rounded-[1.6rem] border border-rose-100 bg-white/70 p-4 shadow-[0_14px_34px_rgba(190,18,60,0.10)]">
            <p className="text-sm font-extrabold text-[#8a1744]">
              Monica mau pilih apa sekarang?
            </p>

            <div className="mt-4 grid gap-3">
              <button
                onClick={() => setChoice("time")}
                className="flex items-center gap-3 rounded-[1.2rem] border border-rose-100 bg-[#fffaf7] px-4 py-3 text-left text-sm font-bold text-[#68384f] active:scale-[0.98]"
              >
                <Cloud size={19} className="text-rose-400" />
                Aku butuh waktu dulu
              </button>

              <button
                onClick={onReadAgain}
                className="flex items-center gap-3 rounded-[1.2rem] border border-rose-100 bg-[#fffaf7] px-4 py-3 text-left text-sm font-bold text-[#68384f] active:scale-[0.98]"
              >
                <RotateCcw size={19} className="text-rose-400" />
                Baca ulang suratnya
              </button>

              <a
                href={buildWhatsappLink(
                  "Aku sudah baca. Jelasin pelan-pelan ya.",
                )}
                onClick={handleMissingNumber}
                className="flex items-center gap-3 rounded-[1.2rem] border border-rose-100 bg-[#fffaf7] px-4 py-3 text-left text-sm font-bold text-[#68384f] active:scale-[0.98]"
              >
                <Send size={19} className="text-rose-400" />
                Aku mau Rayhan jelasin
              </a>

              <a
                href={buildWhatsappLink("Aku sudah baca webnya.")}
                onClick={handleMissingNumber}
                className="flex items-center gap-3 rounded-[1.2rem] bg-gradient-to-r from-rose-400 to-pink-500 px-4 py-3 text-left text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(244,63,94,0.22)] active:scale-[0.98]"
              >
                <MessageCircle size={19} />
                Chat Rayhan
              </a>
            </div>
          </div>

          {choice === "time" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mt-5 rounded-[1.5rem] border border-rose-100 bg-[#fffaf7] p-5 text-sm leading-7 text-[#6f5a69]"
            >
              <p className="font-extrabold text-[#9f1d4e]">
                Tidak apa-apa, Monica.
              </p>
              <p className="mt-2">
                Rayhan akan menghormati itu. Terima kasih sudah membaca sampai
                akhir. Jaga diri baik-baik.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
