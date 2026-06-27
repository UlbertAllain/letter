"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SparkleField, Tape } from "@/components/CuteDecorations";

type MemoryJarProps = {
  onNext: () => void;
};

const memories = [
  "Rayhan ingat cara Monica memberi perhatian, bahkan lewat hal-hal kecil.",
  "Rayhan ingat bahwa di balik marahnya Monica, ada hal yang sebenarnya ingin dijaga.",
  "Rayhan ingat obrolan kecil yang dulu terasa biasa, tapi sekarang jadi berarti.",
  "Rayhan ingat bahwa Monica bukan cuma ingin dimengerti, tapi juga dihargai.",
  "Rayhan ingat bahwa hubungan ini tidak seharusnya membuat Monica merasa sendirian.",
];

export function MemoryJar({ onNext }: MemoryJarProps) {
  const [activeMemory, setActiveMemory] = useState(memories[0]);
  const [opened, setOpened] = useState<number[]>([]);

  const openMemory = (index: number) => {
    setActiveMemory(memories[index]);

    if (!opened.includes(index)) {
      setOpened((prev) => [...prev, index]);
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

        <div className="relative z-10 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-rose-400">
            Memory jar
          </p>

          <h2 className="mx-auto mt-3 max-w-[330px] font-display text-4xl font-extrabold leading-tight text-[#9f1d4e]">
            Hal kecil yang Rayhan masih ingat
          </h2>

          <p className="mx-auto mt-4 max-w-[310px] text-[15px] leading-7 text-[#5f4658]">
            Pilih satu hati di dalam toples. Isinya bukan gombal, cuma hal yang
            Rayhan sadari.
          </p>

          <div className="relative mx-auto mt-8 h-[360px] max-w-[310px]">
            <div className="absolute left-1/2 top-0 h-12 w-40 -translate-x-1/2 rounded-t-[2rem] border border-rose-200 bg-white/70" />
            <div className="absolute left-1/2 top-9 h-[285px] w-[260px] -translate-x-1/2 rounded-b-[3rem] rounded-t-[1.2rem] border border-rose-200 bg-white/50 shadow-inner backdrop-blur">
              <Tape className="left-1/2 top-[-14px] -translate-x-1/2" />

              {memories.map((_, index) => {
                const positions = [
                  "left-[32px] top-[58px]",
                  "left-[152px] top-[72px]",
                  "left-[86px] top-[128px]",
                  "left-[42px] top-[198px]",
                  "left-[154px] top-[190px]",
                ];

                const isOpened = opened.includes(index);

                return (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => openMemory(index)}
                    className={`absolute ${positions[index]} flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-[0_14px_30px_rgba(190,18,60,0.13)] ${
                      isOpened ? "bg-rose-100" : "bg-white"
                    }`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: index * 0.18,
                      ease: "easeInOut",
                    }}
                  >
                    {isOpened ? "✓" : "💗"}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeMemory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.6rem] border border-rose-100 bg-[#fffaf7]/90 p-5 text-left shadow-[0_14px_34px_rgba(190,18,60,0.10)]"
          >
            <p className="text-sm font-extrabold text-[#9f1d4e]">
              Catatan kecil
            </p>
            <p className="mt-2 text-[15px] leading-7 text-[#5f4658]">
              {activeMemory}
            </p>
          </motion.div>

          <button
            onClick={onNext}
            className="mt-7 w-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(244,63,94,0.25)] active:scale-[0.98]"
          >
            Lanjut ke bagian terakhir
          </button>
        </div>
      </motion.div>
    </section>
  );
}
