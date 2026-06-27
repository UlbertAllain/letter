"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";
import { OpeningScreen } from "@/components/OpeningScreen";
import { MoodPicker } from "@/components/MoodPicker";
import { PermissionScreen } from "@/components/PermissionScreen";
import { ForgiveGame } from "@/components/ForgiveGame";
import { HeartUnlock } from "@/components/HeartUnlock";
import { SuccessScreen } from "@/components/SuccessScreen";
import { LetterSection } from "@/components/LetterSection";
import { RepairChecklist } from "@/components/RepairChecklist";
import { FinalSection } from "@/components/FinalSection";
import { PaperTexture } from "@/components/CuteDecorations";
import { StoryProgress } from "@/components/StoryProgress";

type Step =
  | "opening"
  | "mood"
  | "permission"
  | "game"
  | "heart-unlock"
  | "success"
  | "letter"
  | "repair"
  | "final"
  | "need-time";

const stepMeta: Record<Step, { index: number; label: string }> = {
  opening: { index: 1, label: "Awal" },
  mood: { index: 2, label: "Perasaan" },
  permission: { index: 3, label: "Pengantar" },
  game: { index: 4, label: "Pertanyaan" },
  "heart-unlock": { index: 5, label: "Buka pesan" },
  success: { index: 6, label: "Terima kasih" },
  letter: { index: 7, label: "Surat" },
  repair: { index: 8, label: "Perbaikan" },
  final: { index: 9, label: "Penutup" },
  "need-time": { index: 10, label: "Butuh waktu" },
};

const totalSteps = 10;

export default function Home() {
  const [step, setStep] = useState<Step>("opening");
  const topRef = useRef<HTMLDivElement | null>(null);

  const goToStep = (nextStep: Step) => {
    setStep(nextStep);

    setTimeout(() => {
      topRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  const currentMeta = stepMeta[step];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7ed] text-[#3f2e3e]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-pink-200/70 blur-3xl" />
        <div className="absolute -right-28 top-44 h-72 w-72 rounded-full bg-violet-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/50 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-3xl" />
      </div>

      <PaperTexture />

      <StoryProgress
        current={currentMeta.index}
        total={totalSteps}
        label={currentMeta.label}
      />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[430px] overflow-hidden pt-10">
        <FloatingHearts />

        <div ref={topRef} />

        <AnimatePresence mode="wait">
          {step === "opening" && (
            <PageMotion keyName="opening">
              <OpeningScreen onNext={() => goToStep("mood")} />
            </PageMotion>
          )}

          {step === "mood" && (
            <PageMotion keyName="mood">
              <MoodPicker onNext={() => goToStep("permission")} />
            </PageMotion>
          )}

          {step === "permission" && (
            <PageMotion keyName="permission">
              <PermissionScreen onNext={() => goToStep("game")} />
            </PageMotion>
          )}

          {step === "game" && (
            <PageMotion keyName="game">
              <ForgiveGame
                onAccept={() => goToStep("heart-unlock")}
                onNeedTime={() => goToStep("need-time")}
              />
            </PageMotion>
          )}

          {step === "heart-unlock" && (
            <PageMotion keyName="heart-unlock">
              <HeartUnlock onNext={() => goToStep("success")} />
            </PageMotion>
          )}

          {step === "success" && (
            <PageMotion keyName="success">
              <SuccessScreen onNext={() => goToStep("letter")} />
            </PageMotion>
          )}

          {step === "letter" && (
            <PageMotion keyName="letter">
              <LetterSection onNext={() => goToStep("repair")} />
            </PageMotion>
          )}

          {step === "repair" && (
            <PageMotion keyName="repair">
              <RepairChecklist
                whatsappNumber="627817181433"
                onNext={() => goToStep("final")}
              />
            </PageMotion>
          )}

          {step === "final" && (
            <PageMotion keyName="final">
              <FinalSection
                whatsappNumber="627817181433"
                onReadAgain={() => goToStep("letter")}
              />
            </PageMotion>
          )}

          {step === "need-time" && (
            <PageMotion keyName="need-time">
              <section className="relative flex min-h-screen flex-col justify-center px-6 py-10">
                <div className="cute-card p-7 text-center">
                  <div className="relative z-10">
                    <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-rose-100 text-5xl shadow-inner">
                      ☁️
                    </div>

                    <h1 className="font-display text-4xl font-extrabold text-[#9f1d4e]">
                      Tidak apa-apa, Monica
                    </h1>

                    <p className="mt-5 text-[16px] leading-8 text-[#5f4658]">
                      Kalau kamu masih butuh waktu, aku mengerti. Terima kasih
                      karena sudah membuka halaman ini.
                    </p>

                    <p className="mt-4 text-[16px] leading-8 text-[#5f4658]">
                      aku tidak akan memaksa semuanya langsung kembali baik.
                    </p>

                    <button
                      onClick={() => goToStep("letter")}
                      className="mt-8 w-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(244,63,94,0.25)] active:scale-[0.98]"
                    >
                      Baca suratnya dulu
                    </button>
                  </div>
                </div>
              </section>
            </PageMotion>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function PageMotion({
  keyName,
  children,
}: {
  keyName: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      key={keyName}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
