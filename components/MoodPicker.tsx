"use client";

import { motion } from "framer-motion";
import { SparkleField, StickyNote } from "@/components/CuteDecorations";

type MoodPickerProps = {
  onNext: () => void;
};

const moods = [
  {
    icon: "😤",
    label: "Masih marah",
    response:
      "Wajar kok. aku tidak berharap semuanya langsung baik-baik saja. Baca pelan-pelan aja.",
  },
  {
    icon: "😔",
    label: "Capek",
    response:
      "aku paham. Kalau halaman ini terasa terlalu banyak, kamu boleh berhenti kapan pun.",
  },
  {
    icon: "👀",
    label: "Penasaran sedikit",
    response:
      "Cukup itu dulu. aku cuma ingin menyampaikan sesuatu dengan cara yang lebih rapi.",
  },
  {
    icon: "🙂",
    label: "Boleh baca",
    response:
      "Terima kasih. aku akan coba bicara dengan tenang, bukan membela diri.",
  },
];

export function MoodPicker({ onNext }: MoodPickerProps) {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="cute-card min-h-[680px] p-6"
      >
        <SparkleField />

        <div className="relative z-10">
          <p className="text-center text-sm font-extrabold uppercase tracking-[0.25em] text-rose-400">
            Sebelum lanjut
          </p>

          <h2 className="mx-auto mt-3 max-w-[330px] text-center font-display text-4xl font-extrabold leading-tight text-[#9f1d4e]">
            Monica lagi merasa apa sekarang?
          </h2>

          <p className="mx-auto mt-4 max-w-[310px] text-center text-[15px] leading-7 text-[#5f4658]">
            Pilih yang paling mendekati. Ini bukan buat menilai, cuma supaya
            halaman ini terasa lebih manusiawi.
          </p>

          <div className="mt-9 grid gap-5">
            {moods.map((mood, index) => (
              <motion.button
                key={mood.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                onClick={onNext}
                className="text-left active:scale-[0.98]"
              >
                <StickyNote
                  icon={mood.icon}
                  title={mood.label}
                  rotate={index % 2 === 0 ? "-rotate-1" : "rotate-1"}
                >
                  {mood.response}
                </StickyNote>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
