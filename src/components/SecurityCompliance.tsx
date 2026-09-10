"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const HEADER = {
  id: {
    title: "Diawasi dan Terdaftar Resmi",
    subtitle:
      "FINETIKS beroperasi di bawah pengawasan otoritas resmi di Indonesia dan mengikuti standar keamanan informasi internasional.",
  },
  en: {
    title: "Officially Supervised and Certified",
    subtitle:
      "FINETIKS operates under the supervision of official authorities in Indonesia and follows international information security standards.",
  },
};

const BADGES = {
  id: [
    {
      src: "/images/badge-komdigi.svg",
      alt: "Komdigi",
      name: "Komdigi",
      description: "Terdaftar sebagai penyelenggara sistem elektronik.",
    },
    {
      src: "/images/logo-ojk.svg",
      alt: "OJK",
      name: "OJK",
      description: "Diawasi oleh Otoritas Jasa Keuangan Republik Indonesia.",
    },
    {
      src: "/images/logo-bank-indonesia.png",
      alt: "Bank Indonesia",
      name: "Bank Indonesia",
      description: "Tunduk pada ketentuan sistem pembayaran Bank Indonesia.",
    },
    {
      src: "/images/badge-fintech-indonesia.svg",
      alt: "Fintech Indonesia (AFTECH)",
      name: "AFTECH",
      description: "Anggota Asosiasi Fintech Indonesia.",
      imgClassName: "scale-150",
    },
    {
      src: "/images/badge-iso27001-cert.webp",
      alt: "ISO 27001",
      name: "ISO 27001",
      description: "Terdaftar standar manajemen keamanan informasi.",
    },
  ],
  en: [
    {
      src: "/images/badge-komdigi.svg",
      alt: "Komdigi",
      name: "Komdigi",
      description: "Registered as an electronic system provider.",
    },
    {
      src: "/images/logo-ojk.svg",
      alt: "OJK",
      name: "OJK",
      description: "Supervised by the Financial Services Authority of Indonesia.",
    },
    {
      src: "/images/logo-bank-indonesia.png",
      alt: "Bank Indonesia",
      name: "Bank Indonesia",
      description: "Subject to Bank Indonesia's payment system regulations.",
    },
    {
      src: "/images/badge-fintech-indonesia.svg",
      alt: "Fintech Indonesia (AFTECH)",
      name: "AFTECH",
      description: "Member of the Indonesian Fintech Association.",
      imgClassName: "scale-150",
    },
    {
      src: "/images/badge-iso27001-cert.webp",
      alt: "ISO 27001",
      name: "ISO 27001",
      description: "Registered to the international information security standard.",
    },
  ],
};

export default function SecurityCompliance() {
  const { lang } = useLanguage();
  const header = HEADER[lang];
  const badges = BADGES[lang];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F8FAFC] px-6 py-16 sm:py-24 lg:py-[128px]">
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
          className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
          onMouseLeave={() => setHovered(null)}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06, ease: "easeOut" }}
            >
              <motion.div
                onMouseEnter={() => setHovered(i)}
                animate={{ opacity: hovered === null || hovered === i ? 1 : 0.6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex h-full cursor-default flex-col items-center gap-4 rounded-lg border border-transparent bg-white p-7 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-grape-tint-3/40 hover:shadow-[0_24px_48px_rgba(24,24,27,0.1)]"
              >
                <div className="relative h-16 w-full transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    className={`object-contain ${badge.imgClassName ?? ""}`}
                  />
                </div>
                <h3 className="font-poppins text-[19px] font-bold leading-snug text-text-primary">{badge.name}</h3>
                <p className="font-montserrat text-[16px] leading-relaxed text-text-secondary">
                  {badge.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
