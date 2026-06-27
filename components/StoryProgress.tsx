"use client";

import { motion } from "framer-motion";

type StoryProgressProps = {
  current: number;
  total: number;
  label: string;
};

export function StoryProgress({ current, total, label }: StoryProgressProps) {
  return (
    <div className="pointer-events-none fixed left-1/2 top-4 z-50 w-full max-w-[430px] -translate-x-1/2 px-5">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-full border border-white/70 bg-white/65 px-4 py-3 shadow-[0_12px_35px_rgba(190,18,60,0.12)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-1.5">
            {Array.from({ length: total }).map((_, index) => {
              const isActive = index + 1 <= current;

              return (
                <motion.span
                  key={index}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`text-xs ${
                    isActive ? "text-rose-500" : "text-rose-200"
                  }`}
                >
                  ♥
                </motion.span>
              );
            })}
          </div>

          <p className="truncate text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#8a1744]">
            {current}/{total} · {label}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
