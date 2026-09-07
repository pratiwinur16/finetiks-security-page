"use client";

import { ShieldCheck } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import LegalityBar from "./LegalityBar";
import { useLanguage } from "./LanguageProvider";

const COPY = {
  id: {
    eyebrow: "Keamanan FINETIKS",
    headline: "Keamanan Adalah Prioritas Utama Kami",
    subhead:
      "Setiap transaksi dan data yang kamu percayakan ke FINETIKS dilindungi dengan teknologi keamanan tingkat tinggi, dan diawasi oleh regulator resmi di Indonesia.",
  },
  en: {
    eyebrow: "FINETIKS Security",
    headline: "Security Is Our Top Priority",
    subhead:
      "Every transaction and every piece of data you trust to FINETIKS is protected with high-level security technology, and supervised by official regulators in Indonesia.",
  },
};

const GRAIN_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
      "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>" +
      "<feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter>" +
      "<rect width='100%' height='100%' filter='url(#n)'/></svg>"
  );

export default function SecurityHeroV1() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <section
      className="relative w-full overflow-hidden pt-[105px]"
      style={{
        backgroundImage: "linear-gradient(146.5deg, #6C5EEB 14%, #412FE5 86%)",
      }}
    >
      {/* Depth — soft mesh light, so the flat gradient reads as layered */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#9E95F2] opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-[#412FE5] opacity-50 blur-3xl"
      />

      {/* Texture — fine dot grid, echoes secure/structured data */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 75% 80% at 50% 35%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 80% at 50% 35%, black, transparent 70%)",
          opacity: 0.5,
        }}
      />

      {/* Finish — faint grain so the gradient feels tactile, not flat vector */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("${GRAIN_URI}")`,
          backgroundSize: "160px 160px",
        }}
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-6 pt-16 pb-14 text-center sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 backdrop-blur-sm sm:h-24 sm:w-24"
        >
          <ShieldCheck size={44} weight="fill" className="text-white" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="font-poppins text-sm font-semibold tracking-[0.2em] text-white/70 uppercase"
        >
          {t.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-[820px] font-poppins text-[32px] font-bold leading-tight text-white sm:text-[44px] lg:text-[56px]"
        >
          {t.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[680px] font-poppins text-[17px] leading-[26px] text-white/85 sm:text-[19px] sm:leading-[30px]"
        >
          {t.subhead}
        </motion.p>
      </div>

      <div className="relative border-t border-white/10">
        <LegalityBar />
      </div>
    </section>
  );
}
