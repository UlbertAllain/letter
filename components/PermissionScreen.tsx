"use client";

import { motion } from "framer-motion";
import {
  EnvelopeWidget,
  SparkleField,
  Tape,
} from "@/components/CuteDecorations";

type PermissionScreenProps = {
  onNext: () => void;
};

export function PermissionScreen({ onNext }: PermissionScreenProps) {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="cute-card min-h-[680px] p-6"
      >
        <SparkleField />
        <EnvelopeWidget className="right-8 top-16 scale-75 opacity-80" />

        <div className="relative z-10 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-rose-400">
            Sebentar aja
          </p>

          <h2 className="mt-3 font-display text-5xl font-extrabold text-[#9f1d4e]">
            Baca pelan-pelan ya
          </h2>

          <p className="mx-auto mt-4 max-w-[310px] text-[16px] leading-8 text-[#5f4658]">
            Halaman ini ngga panjang. Isinya cuma beberapa bagian kecil yang aku
            susun supaya pesannya lebih jelas.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5">
            <div className="relative mx-auto w-[86%] rotate-[-2deg] rounded-[1.4rem] border border-rose-100 bg-[#fff9ec] p-5 shadow-[0_16px_35px_rgba(190,18,60,0.12)]">
              <Tape className="left-1/2 top-[-13px] -translate-x-1/2" />
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-2xl">
                🙂
              </div>
              <h3 className="mt-3 font-extrabold text-[#68384f]">
                Ada bagian ringan
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#765c6c]">
                Supaya tidak terasa terlalu kaku.
              </p>
            </div>

            <div className="relative mx-auto w-[86%] rotate-[2deg] rounded-[1.4rem] border border-rose-100 bg-[#fff9ec] p-5 shadow-[0_16px_35px_rgba(190,18,60,0.12)]">
              <Tape className="left-1/2 top-[-13px] -translate-x-1/2 rotate-6" />
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-2xl">
                💗
              </div>
              <h3 className="mt-3 font-extrabold text-[#68384f]">
                Ada bagian serius
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#765c6c]">
                Karena aku tahu ini bukan masalah kecil.
              </p>
            </div>

            <div className="relative mx-auto w-[86%] rotate-[-1deg] rounded-[1.4rem] border border-rose-100 bg-[#fff9ec] p-5 shadow-[0_16px_35px_rgba(190,18,60,0.12)]">
              <Tape className="left-1/2 top-[-13px] -translate-x-1/2" />
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-2xl">
                💌
              </div>
              <h3 className="mt-3 font-extrabold text-[#68384f]">
                Ada permintaan maaf
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#765c6c]">
                Bukan pembelaan diri, tapi pengakuan.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <button
              onClick={onNext}
              className="rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-5 py-4 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(244,63,94,0.25)] active:scale-[0.98]"
            >
              Lanjut
            </button>

            <button
              onClick={onNext}
              className="rounded-full border border-rose-300 bg-white/70 px-5 py-4 text-sm font-extrabold text-rose-500 active:scale-[0.98]"
            >
              Baca dulu
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
