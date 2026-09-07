"use client";

import {
  ArrowsClockwise,
  DeviceMobile,
  Fingerprint,
  PhoneCall,
  Prohibit,
  WarningCircle,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageProvider";

const HEADER = {
  id: {
    title: "Kamu Juga Punya Peran dalam Keamanan Akunmu",
    subtitle:
      "Kami menjaga sistem, tapi kebiasaan kecilmu sehari-hari juga penting. Ikuti tips ini agar akunmu tetap aman.",
  },
  en: {
    title: "You Play a Role in Your Account's Security Too",
    subtitle:
      "We secure the system, but your everyday habits matter too. Follow these tips to keep your account safe.",
  },
};

type Tip = {
  icon: Icon;
  title: string;
  description: string;
};

const TIPS: Record<"id" | "en", Tip[]> = {
  id: [
    {
      icon: Prohibit,
      title: "Jangan Bagikan Kode OTP",
      description:
        "Kode OTP dan PIN adalah kunci akunmu. FINETIKS tidak akan pernah memintanya lewat telepon, chat, atau email.",
    },
    {
      icon: Fingerprint,
      title: "Aktifkan Kunci Biometrik",
      description:
        "Gunakan sidik jari atau Face ID untuk lapisan keamanan tambahan setiap kali membuka aplikasi.",
    },
    {
      icon: WarningCircle,
      title: "Waspada Tautan Mencurigakan",
      description:
        "Jangan klik tautan mencurigakan yang mengatasnamakan FINETIKS. Selalu verifikasi lewat kanal resmi kami.",
    },
    {
      icon: DeviceMobile,
      title: "Unduh Hanya dari Sumber Resmi",
      description:
        "Pastikan kamu selalu mengunduh aplikasi FINETIKS dari App Store atau Google Play, bukan tautan pihak ketiga.",
    },
    {
      icon: ArrowsClockwise,
      title: "Perbarui Aplikasi Secara Berkala",
      description:
        "Pembaruan aplikasi sering membawa perbaikan keamanan terbaru. Aktifkan update otomatis agar selalu terlindungi.",
    },
    {
      icon: PhoneCall,
      title: "Laporkan Aktivitas Mencurigakan",
      description:
        "Lihat transaksi atau aktivitas yang tidak kamu kenali? Segera hubungi tim support kami.",
    },
  ],
  en: [
    {
      icon: Prohibit,
      title: "Never Share Your OTP",
      description:
        "Your OTP and PIN are the keys to your account. FINETIKS staff will never ask for them by phone, chat, or email.",
    },
    {
      icon: Fingerprint,
      title: "Enable Biometric Lock",
      description:
        "Use fingerprint or Face ID for an extra layer of protection every time you open the app.",
    },
    {
      icon: WarningCircle,
      title: "Watch Out for Phishing",
      description:
        "Never click suspicious links claiming to be from FINETIKS. Always verify through our official channels.",
    },
    {
      icon: DeviceMobile,
      title: "Only Download from Official Sources",
      description:
        "Always download the FINETIKS app from the App Store or Google Play, never from a third-party link.",
    },
    {
      icon: ArrowsClockwise,
      title: "Keep Your App Updated",
      description:
        "App updates often include the latest security fixes. Turn on auto-update to stay protected.",
    },
    {
      icon: PhoneCall,
      title: "Report Suspicious Activity",
      description:
        "Notice a transaction or activity you don't recognize? Contact our support team right away.",
    },
  ],
};

export default function SecurityTips() {
  const { lang } = useLanguage();
  const header = HEADER[lang];
  const tips = TIPS[lang];

  return (
    <section className="w-full bg-white px-6 py-16 sm:py-24 lg:py-[128px]">
      <div className="mx-auto flex max-w-[1128px] flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
        {/* Header — sits beside the checklist instead of stacked above it */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4 lg:sticky lg:top-[140px] lg:w-[340px] lg:shrink-0"
        >
          <h2 className="font-poppins text-[32px] font-bold leading-tight text-grape-dark sm:text-[44px] lg:text-[36px]">
            {header.title}
          </h2>
          <p className="font-poppins text-[18px] leading-[28px] text-text-secondary sm:text-[20px] sm:leading-[32px] lg:text-base lg:leading-[26px]">
            {header.subtitle}
          </p>
        </motion.div>

        {/* Checklist — a connected timeline instead of another card grid */}
        <div className="relative flex-1">
          <div className="absolute top-2 bottom-2 left-7 w-px bg-[#E7E5FC]" aria-hidden />
          <div className="flex flex-col">
            {tips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: "easeOut" }}
                className="group relative flex items-start gap-6 py-5"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-amber-600 ring-1 ring-amber-200 transition-[background-color,color] duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:ring-amber-500">
                  <tip.icon size={24} weight="bold" />
                </div>
                <div className="flex flex-col gap-1.5 pt-2">
                  <h3 className="font-poppins text-[19px] font-bold leading-snug text-text-primary">
                    {tip.title}
                  </h3>
                  <p className="font-montserrat text-[16px] leading-relaxed text-text-secondary">
                    {tip.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
