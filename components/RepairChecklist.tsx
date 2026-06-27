"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SparkleField, StickyNote } from "@/components/CuteDecorations";

type RepairChecklistProps = {
  onNext: () => void;
};

const items = [
  {
    title: "Lebih mendengarkan",
    desc: "Tidak langsung membela diri saat Monica sedang menjelaskan perasaannya.",
  },
  {
    title: "Lebih hati-hati dalam bicara",
    desc: "Karena ucapan yang terlihat kecil tetap bisa terasa berat untuk orang lain.",
  },
  {
    title: "Tidak menganggap masalah sebagai hal sepele",
    desc: "Kalau Monica kecewa, berarti ada sesuatu yang perlu Rayhan pahami.",
  },
  {
    title: "Lebih konsisten",
    desc: "Bukan cuma baik setelah ada masalah, tapi juga saat semuanya sedang biasa saja.",
  },
  {
    title: "Memberi ruang",
    desc: "Kalau Monica butuh waktu, Rayhan harus bisa menghargai itu.",
  },
];

export function RepairChecklist({ onNext }: RepairChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setCheckedItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }

      return [...prev, index];
    });
  };

  const allChecked = checkedItems.length === items.length;

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

        <div className="relative z-10">
          <p className="text-center text-sm font-extrabold uppercase tracking-[0.25em] text-rose-400">
            Yang perlu diperbaiki
          </p>

          <h2 className="mx-auto mt-3 max-w-[330px] text-center font-display text-4xl font-extrabold leading-tight text-[#9f1d4e]">
            Bukan cuma minta maaf
          </h2>

          <p className="mx-auto mt-4 max-w-[315px] text-center text-[15px] leading-7 text-[#5f4658]">
            Rayhan tahu permintaan maaf tidak berarti banyak kalau tidak diikuti
            perubahan. Ini beberapa hal yang harus dia perbaiki.
          </p>

          <div className="mt-9 grid gap-4">
            {items.map((item, index) => {
              const isChecked = checkedItems.includes(index);

              return (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => toggleItem(index)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  className={`rounded-[1.5rem] border p-4 text-left shadow-[0_14px_34px_rgba(190,18,60,0.10)] transition active:scale-[0.98] ${
                    isChecked
                      ? "border-rose-200 bg-rose-50"
                      : "border-rose-100 bg-white/75"
                  }`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                        isChecked
                          ? "border-rose-400 bg-rose-400 text-white"
                          : "border-rose-200 bg-white text-rose-300"
                      }`}
                    >
                      {isChecked ? <Check size={20} strokeWidth={3} /> : "♡"}
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#68384f]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#765c6c]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-7">
            {allChecked ? (
              <StickyNote icon="✓" title="Catatan" rotate="-rotate-1">
                Ini bukan janji kosong yang langsung selesai hari ini. Ini
                pengingat untuk Rayhan supaya lebih sadar dan lebih dewasa.
              </StickyNote>
            ) : (
              <p className="rounded-[1.4rem] border border-rose-100 bg-white/70 px-5 py-4 text-center text-sm font-bold leading-6 text-[#8a1744]">
                Tap checklist-nya satu-satu.
              </p>
            )}
          </div>

          <button
            onClick={onNext}
            className="mt-7 w-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(244,63,94,0.25)] active:scale-[0.98]"
          >
            Lanjut ke penutup
          </button>
        </div>
      </motion.div>
    </section>
  );
}
