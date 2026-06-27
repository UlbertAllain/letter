"use client";

import { motion } from "framer-motion";

const hearts = [
  { left: "8%", top: "12%", delay: 0, size: "text-lg" },
  { left: "82%", top: "10%", delay: 0.4, size: "text-sm" },
  { left: "15%", top: "72%", delay: 0.8, size: "text-sm" },
  { left: "88%", top: "68%", delay: 1.2, size: "text-lg" },
  { left: "48%", top: "18%", delay: 1.6, size: "text-xs" },
  { left: "72%", top: "42%", delay: 2, size: "text-sm" },
];

export function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.span
          key={index}
          className={`absolute ${heart.size} text-rose-300/70`}
          style={{ left: heart.left, top: heart.top }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.35, 0.9, 0.35],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
