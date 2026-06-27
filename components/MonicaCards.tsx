"use client";

import { motion } from "framer-motion";
import { SparkleField, StickyNote } from "@/components/CuteDecorations";

type MonicaCardsProps = {
  onNext: () => void;
};

const cards = [
  {
    icon: "🌸",
    title: "Cara kamu perhatian",
    desc: "Kadang Monica mungkin merasa itu hal biasa. Tapi buat Rayhan, perhatian kecil dari kamu selalu terasa hangat.",
    rotate: "-rotate-2",
  },
  {
    icon: "😤",
    title: "Cara kamu marah",
    desc: "Iya, bahkan saat kamu marah. Karena di balik itu, Rayhan tahu kamu cuma ingin sesuatu dijaga dengan serius.",
    rotate: "rotate-2",
  },
  {
    icon: "☁️",
    title: "Cara kamu bikin hari terasa lebih ringan",
    desc: "Ada orang yang hadirnya bikin hari biasa terasa lebih enak dijalani. Buat Rayhan, Monica salah satunya.",
    rotate: "rotate-1",
  },
  {
    icon: "💗",
    title: "Hal-hal kecil yang kamu lakukan",
    desc: "Cara kamu chat, cara kamu cerita, cara kamu peduli. Hal kecil, tapi Rayhan ingat.",
    rotate: "-rotate-1",
  },
];

export function MonicaCards({ onNext }: MonicaCardsProps) {
  return (
    <section className="relative px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="cute-card p-6"
      >
        <SparkleField />

        <div className="relative z-10">
          <p className="text-center text-sm font-extrabold uppercase tracking-[0.25em] text-rose-400">
            Hal kecil
          </p>

          <h2 className="mx-auto mt-3 max-w-[320px] text-center font-display text-3xl font-extrabold leading-tight text-[#9f1d4e]">
            Beberapa hal tentang Monica yang Rayhan suka
          </h2>

          <div className="mt-10 grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <StickyNote
                  icon={card.icon}
                  title={card.title}
                  rotate={card.rotate}
                >
                  {card.desc}
                </StickyNote>
              </motion.div>
            ))}
          </div>

          <button
            onClick={onNext}
            className="mt-9 w-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(244,63,94,0.25)] active:scale-[0.98]"
          >
            Baca bagian terakhir
          </button>
        </div>
      </motion.div>
    </section>
  );
}
