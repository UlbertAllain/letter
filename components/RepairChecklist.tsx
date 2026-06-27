"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Eraser, HeartHandshake } from "lucide-react";
import {
  EnvelopeWidget,
  SparkleField,
  StickyNote,
  Tape,
} from "@/components/CuteDecorations";

type RepairChecklistProps = {
  onNext: () => void;
  whatsappNumber?: string;
};

const quickPrompts = [
  "Aku masih kecewa karena...",
  "Yang bikin aku capek itu...",
  "Aku pengen kamu paham bahwa...",
  "Kalau mau diperbaiki, aku butuh...",
];

export function RepairChecklist({
  onNext,
  whatsappNumber,
}: RepairChecklistProps) {
  const [message, setMessage] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const trimmedMessage = message.trim();
  const isMessageValid = trimmedMessage.length >= 8;

  const whatsappText = useMemo(() => {
    return [
      "Aku sudah baca webnya.",
      "",
      "Ini yang ingin aku sampaikan:",
      trimmedMessage,
    ].join("\n");
  }, [trimmedMessage]);

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`
    : "#";

  const handlePromptClick = (prompt: string) => {
    setSelectedPrompt(prompt);

    if (!message.trim()) {
      setMessage(prompt + " ");
    }
  };

  const handleWhatsappClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!whatsappNumber) {
      event.preventDefault();
      alert("Nomor WhatsApp Rayhan belum diisi.");
      return;
    }

    if (!isMessageValid) {
      event.preventDefault();
      alert("Tulis pesannya dulu minimal beberapa kata.");
    }
  };

  return (
    <section className="relative px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="cute-card p-6"
      >
        <SparkleField />
        <EnvelopeWidget className="right-6 top-12 scale-75 opacity-80" />

        <div className="relative z-10">
          <p className="text-center text-sm font-extrabold uppercase tracking-[0.25em] text-rose-400">
            Ruang buat Monica
          </p>

          <h2 className="mx-auto mt-3 max-w-[330px] text-center font-display text-4xl font-extrabold leading-tight text-[#9f1d4e]">
            Tulis aja semua uneg-unegmu
          </h2>

          <p className="mx-auto mt-4 max-w-[315px] text-center text-[15px] leading-7 text-[#5f4658]">
            Kalau ada hal yang belum sempat kamu bilang, tulis di sini. Tidak
            harus rapi, tidak harus manis. Yang penting jujur.
          </p>

          <div className="mt-8 rounded-[1.7rem] border border-rose-100 bg-white/70 p-4 shadow-[0_16px_40px_rgba(190,18,60,0.10)]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                <HeartHandshake size={21} />
              </div>

              <div>
                <h3 className="font-extrabold text-[#68384f]">
                  Mulai dari mana saja
                </h3>
                <p className="text-xs leading-5 text-[#765c6c]">
                  aku akan dengerin, bukan membela diri.
                </p>
              </div>
            </div>

            <div className="grid gap-2">
              {quickPrompts.map((prompt) => {
                const isSelected = selectedPrompt === prompt;

                return (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handlePromptClick(prompt)}
                    className={`rounded-2xl border px-4 py-3 text-left text-xs font-bold leading-5 transition active:scale-[0.98] ${
                      isSelected
                        ? "border-rose-300 bg-rose-50 text-[#8a1744]"
                        : "border-rose-100 bg-[#fffaf7]/80 text-[#765c6c]"
                    }`}
                  >
                    {prompt}
                  </button>
                );
              })}
            </div>

            <div className="relative mt-5">
              <Tape className="left-6 top-[-10px]" />

              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Contoh: Aku masih kecewa karena..."
                rows={8}
                maxLength={900}
                className="min-h-[210px] w-full resize-none rounded-[1.4rem] border border-rose-100 bg-[#fffaf7] px-4 py-5 text-[15px] leading-7 text-[#4f3a49] outline-none transition placeholder:text-[#b895a5] focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
              />

              <div className="mt-2 flex items-center justify-between text-xs font-bold text-[#9a7a8c]">
                <span>{message.length}/900 karakter</span>
                <button
                  type="button"
                  onClick={() => {
                    setMessage("");
                    setSelectedPrompt(null);
                  }}
                  className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-rose-500 active:scale-[0.98]"
                >
                  <Eraser size={14} />
                  Bersihkan
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href={whatsappLink}
                onClick={handleWhatsappClick}
                className={`flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-extrabold shadow-[0_16px_35px_rgba(244,63,94,0.25)] transition active:scale-[0.98] ${
                  isMessageValid
                    ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white"
                    : "bg-rose-100 text-rose-300"
                }`}
              >
                <Send size={18} />
                Kirim ke WhatsApp
              </a>

              <button
                onClick={onNext}
                className="flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-white/75 px-6 py-4 text-base font-extrabold text-[#9f1d4e] active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                Lewati dulu
              </button>
            </div>
          </div>

          <div className="mt-6">
            <StickyNote icon="💌" title="Catatan kecil" rotate="-rotate-1">
              Pesan ini akan membuka WhatsApp dengan teks yang sudah terisi.
              Kamu tetap bisa mengubahnya dulu sebelum dikirim.
            </StickyNote>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
