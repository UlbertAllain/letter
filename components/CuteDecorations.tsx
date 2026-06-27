"use client";

import { motion } from "framer-motion";

export function PaperTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.55]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(190,18,60,0.10)_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_35%,rgba(255,255,255,0.25))]" />
    </div>
  );
}

export function CuteClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="cute-cloud left-[-34px] bottom-[-18px] scale-90" />
      <div className="cute-cloud right-[-46px] bottom-[36px] scale-75 opacity-80" />
      <div className="cute-cloud left-[18px] top-[86px] scale-50 opacity-50" />
    </div>
  );
}

export function Tape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute h-5 w-20 rotate-[-7deg] rounded-sm border border-rose-200/70 bg-rose-200/70 shadow-sm ${className}`}
    >
      <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.35)_0_2px,transparent_2px_8px)]" />
    </div>
  );
}

export function SparkleField() {
  const items = [
    { x: "10%", y: "13%", delay: 0, value: "✦" },
    { x: "88%", y: "11%", delay: 0.2, value: "♡" },
    { x: "78%", y: "28%", delay: 0.4, value: "✧" },
    { x: "12%", y: "66%", delay: 0.7, value: "♥" },
    { x: "90%", y: "76%", delay: 0.9, value: "✦" },
    { x: "44%", y: "8%", delay: 1.1, value: "♡" },
    { x: "5%", y: "38%", delay: 1.3, value: "✧" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item, index) => (
        <motion.span
          key={index}
          className="absolute text-lg text-rose-300/80"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 8, -4, 0],
            opacity: [0.35, 0.95, 0.35],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.value}
        </motion.span>
      ))}
    </div>
  );
}

export function TeddyMascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`cute-teddy ${className}`}
      animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <div className="teddy-ear teddy-ear-left" />
      <div className="teddy-ear teddy-ear-right" />
      <div className="teddy-head">
        <div className="teddy-eye teddy-eye-left" />
        <div className="teddy-eye teddy-eye-right" />
        <div className="teddy-muzzle">
          <div className="teddy-nose" />
          <div className="teddy-mouth" />
        </div>
      </div>
      <div className="teddy-body">
        <div className="teddy-heart">♥</div>
      </div>
    </motion.div>
  );
}

export function BunnyPeek({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`cute-bunny ${className}`}
      animate={{ x: [0, 4, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <div className="bunny-ear bunny-ear-left" />
      <div className="bunny-ear bunny-ear-right" />
      <div className="bunny-face">
        <div className="bunny-eye bunny-eye-left" />
        <div className="bunny-eye bunny-eye-right" />
        <div className="bunny-nose" />
        <div className="bunny-cheek bunny-cheek-left" />
        <div className="bunny-cheek bunny-cheek-right" />
      </div>
    </motion.div>
  );
}

export function EnvelopeWidget({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`envelope-widget ${className}`}
      animate={{ y: [0, -7, 0], rotate: [-4, 2, -4] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <div className="envelope-flap" />
      <div className="envelope-heart">♥</div>
    </motion.div>
  );
}

export function StickyNote({
  icon,
  title,
  children,
  rotate = "rotate-0",
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  rotate?: string;
}) {
  return (
    <div
      className={`relative rounded-[1.2rem] border border-rose-100 bg-[#fff9ec] p-4 shadow-[0_14px_30px_rgba(190,18,60,0.10)] ${rotate}`}
    >
      <Tape className="left-1/2 top-[-12px] -translate-x-1/2" />
      <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-2xl">
        {icon}
      </div>
      <h3 className="mt-3 text-sm font-extrabold text-[#68384f]">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-[#765c6c]">{children}</p>
    </div>
  );
}
