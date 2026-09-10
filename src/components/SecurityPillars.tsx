"use client";

import { Bank, Certificate, Eye, LockKey, Password, ShieldCheck } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Icon } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageProvider";

const HEADER = {
  id: {
    title: "Lapisan Perlindungan di Setiap Sisi",
    subtitle:
      "Dari enkripsi data sampai pengawasan regulator, begini FINETIKS menjaga akun dan transaksimu tetap aman.",
  },
  en: {
    title: "Protection Built Into Every Layer",
    subtitle:
      "From data encryption to regulatory oversight, here's how FINETIKS keeps your account and transactions safe.",
  },
};

type Pillar = {
  icon: Icon;
  title: string;
  description: string;
};

const PILLARS: Record<"id" | "en", Pillar[]> = {
  id: [
    {
      icon: LockKey,
      title: "Enkripsi Setara Bank",
      description:
        "Data kamu dilindungi enkripsi AES-256, standar yang sama dipakai bank dan aplikasi finansial ternama.",
    },
    {
      icon: Password,
      title: "Autentikasi PIN & OTP",
      description: "Setiap login butuh PIN dan kode OTP, jadi hanya kamu yang bisa masuk ke akunmu.",
    },
    {
      icon: Eye,
      title: "Kredensial Tidak Disimpan",
      description:
        "Username dan password bankmu tidak pernah disimpan di server kami, dan akses ke datamu bersifat read-only.",
    },
    {
      icon: ShieldCheck,
      title: "Privasi & Kendali Penuh",
      description:
        "Kami hanya melihat saldo dan riwayat transaksimu, dan tidak pernah menjual datamu ke pihak ketiga.",
    },
    {
      icon: Bank,
      title: "Diawasi Regulator Resmi",
      description:
        "Terdaftar dan diawasi oleh OJK, Bank Indonesia, Komdigi, dan AFTECH, sesuai ketentuan di Indonesia.",
    },
    {
      icon: Certificate,
      title: "ISO 27001",
      description:
        "Standar manajemen keamanan informasi kami ISO 27001, standar internasional untuk data.",
    },
  ],
  en: [
    {
      icon: LockKey,
      title: "Bank-Grade Encryption",
      description:
        "Your data is protected with AES-256 encryption, the same standard used by leading banks and financial apps.",
    },
    {
      icon: Password,
      title: "PIN & OTP Authentication",
      description: "Every login requires a PIN and an OTP code, so only you can access your account.",
    },
    {
      icon: Eye,
      title: "Credentials Never Stored",
      description:
        "Your bank username and password are never stored on our servers, and access to your data is read-only.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Full Control",
      description:
        "We only ever see your balance and transaction history, and never sell your data to third parties.",
    },
    {
      icon: Bank,
      title: "Supervised by Regulators",
      description:
        "Registered with and supervised by OJK, Bank Indonesia, Komdigi, and AFTECH, per Indonesian regulations.",
    },
    {
      icon: Certificate,
      title: "ISO 27001",
      description:
        "Our information security management is ISO 27001, the international data protection standard.",
    },
  ],
};

export default function SecurityPillars() {
  const { lang } = useLanguage();
  const header = HEADER[lang];
  const pillars = PILLARS[lang];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-6 py-16 sm:py-24 lg:py-[128px]">
      <div className="mx-auto flex max-w-[1128px] flex-col items-center gap-16 lg:gap-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex w-full flex-col items-center gap-6 text-center"
        >
          <h2 className="font-poppins text-[32px] font-bold leading-tight text-grape-dark sm:text-[44px] sm:leading-[52px]">
            {header.title}
          </h2>
          <p className="max-w-[820px] font-poppins text-[18px] leading-[28px] text-text-secondary sm:text-[20px] sm:leading-[32px]">
            {header.subtitle}
          </p>
        </motion.div>

        <div
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setHovered(null)}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
            >
              <motion.div
                onMouseEnter={() => setHovered(i)}
                animate={{ opacity: hovered === null || hovered === i ? 1 : 0.6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex h-full cursor-default flex-col items-start gap-5 rounded-lg border border-transparent bg-[#F8FAFC] p-7 transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-grape-tint-3/40 hover:bg-white hover:shadow-[0_24px_48px_rgba(24,24,27,0.1)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-grape-tint-5 text-grape-dark transition-[background-color,color,transform] duration-300 group-hover:scale-105 group-hover:bg-grape-dark group-hover:text-white">
                  <pillar.icon size={26} weight="bold" />
                </div>
                <h3 className="font-poppins text-[19px] font-bold leading-snug text-text-primary">
                  {pillar.title}
                </h3>
                <p className="font-montserrat text-[16px] leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
