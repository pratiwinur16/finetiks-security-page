"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import LegalityBar from "./LegalityBar";
import { useLanguage } from "./LanguageProvider";

const GRAIN_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
      "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>" +
      "<feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter>" +
      "<rect width='100%' height='100%' filter='url(#n)'/></svg>"
  );

const COPY = {
  id: {
    headline: "Keamanan Kelas Bank di Setiap Transaksimu",
    subhead:
      "Dari enkripsi AES-256 hingga autentikasi biometrik, FINETIKS dirancang melindungi setiap sisi transaksimu.",
  },
  en: {
    headline: "Bank-Grade Security, In Every Transaction",
    subhead:
      "From AES-256 encryption to biometric authentication, FINETIKS is engineered to protect every side of your transactions.",
  },
};

export default function SecurityHeroV3() {
  const shouldReduceMotion = useReducedMotion();
  const { lang } = useLanguage();
  const t = COPY[lang];

  // Cursor position across the section, 0–1. Rest state is dead-center.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smoothMx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.5 });
  const smoothMy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.5 });

  // Parallax — the ambient glow drifts opposite the pointer, for depth.
  const glowX = useTransform(smoothMx, [0, 1], [-24, 24]);
  const glowY = useTransform(smoothMy, [0, 1], [-16, 16]);

  // Cursor light — a soft glow that follows the pointer across the atmosphere.
  const spotlightLeft = useTransform(smoothMx, (v) => `${v * 100}%`);
  const spotlightTop = useTransform(smoothMy, (v) => `${v * 100}%`);

  // The shield tilts gently toward the pointer, like it's reacting to you.
  const shieldRotateY = useTransform(smoothMx, [0, 1], [-10, 10]);
  const shieldRotateX = useTransform(smoothMy, [0, 1], [8, -8]);

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width);
    my.set((event.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section
      id="hero-v3"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full overflow-hidden bg-black pt-[105px]"
    >
      {/* Atmosphere — layered gradient wash instead of a flat black, depth without a rigid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 26% 8%, rgba(90,110,255,0.4), transparent 60%), " +
            "radial-gradient(ellipse 50% 45% at 82% 4%, rgba(70,170,235,0.16), transparent 65%), " +
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(65,47,229,0.18), transparent 70%), " +
            "radial-gradient(ellipse 100% 70% at 50% 105%, rgba(0,0,0,0.75), transparent 60%)",
        }}
      />

      {/* Glow — a slow breathing light so the wash feels alive, not painted on */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-[8%] h-[520px] w-[620px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(108,94,235,0.55) 0%, rgba(65,47,229,0.25) 45%, transparent 72%)",
          x: shouldReduceMotion ? 0 : glowX,
          y: shouldReduceMotion ? 0 : glowY,
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cursor light — a soft glow that tracks the pointer across the atmosphere */}
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden
          style={{ left: spotlightLeft, top: spotlightTop }}
          className="pointer-events-none absolute hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-soft-light blur-3xl lg:block"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(180,190,255,0.9), transparent 70%)",
            }}
          />
        </motion.div>
      )}

      {/* Scan — a light band drifting down, like a security system sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 h-[320px] mix-blend-screen"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(160,180,255,0.18), transparent)",
        }}
        animate={{ top: ["-25%", "115%"] }}
        transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
      />

      {/* Finish — faint grain so the black feels tactile, not flat vector */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("${GRAIN_URI}")`,
          backgroundSize: "160px 160px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:grid-cols-2 lg:gap-8 lg:px-[100px] lg:pt-24 lg:pb-20">
        {/* Copy — left */}
        <div className="flex flex-col items-start gap-6 text-left pl-4 sm:pl-6 lg:pl-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-[600px] font-poppins text-[34px] font-bold leading-tight text-white sm:text-[46px] lg:text-[58px]"
          >
            {t.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="max-w-[520px] font-poppins text-[17px] leading-[26px] text-white/85 sm:text-[19px] sm:leading-[30px]"
          >
            {t.subhead}
          </motion.p>
        </div>

        {/* Image — right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]"
        >
          {/* Ambient halo — the light the shield casts onto the black around it */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-[-10%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(108,94,235,0.16) 45%, transparent 72%)",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Float — a single slow, smooth drift, plus a gentle tilt toward the pointer */}
          <motion.div
            className="relative aspect-[1635/2061] w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            style={
              shouldReduceMotion
                ? undefined
                : {
                    rotateX: shieldRotateX,
                    rotateY: shieldRotateY,
                    transformPerspective: 900,
                  }
            }
          >
            {/* Rim glow — traces the shield's exact silhouette, as if it's the light source */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-4 bg-white blur-2xl"
              style={{
                maskImage: "url(/images/hero-shield-v3.png)",
                WebkitMaskImage: "url(/images/hero-shield-v3.png)",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <Image
              src="/images/hero-shield-v3.png"
              alt="FINETIKS security shield"
              fill
              className="relative object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              sizes="(min-width: 1024px) 420px, 360px"
              priority
            />

            {/* Shine — a light band sweeping across, masked to the shield's own silhouette */}
            <div
              aria-hidden
              className="animate-shield-shine pointer-events-none absolute inset-0 mix-blend-overlay"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, transparent 35%, rgba(255,255,255,0.9) 48%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.9) 52%, transparent 65%)",
                maskImage: "url(/images/hero-shield-v3.png)",
                WebkitMaskImage: "url(/images/hero-shield-v3.png)",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <LegalityBar />
      </div>
    </section>
  );
}
