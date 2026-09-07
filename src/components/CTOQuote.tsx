"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const COPY = {
  id: {
    quote:
      "“Keamanan bukan sekadar checklist bagi kami — ini fondasi dari setiap fitur yang kami bangun. Kami memastikan setiap transaksi dan data pengguna FINETIKS dijaga dengan standar yang sama ketatnya dengan bank.”",
    name: "Edwin",
    role: "Co-Founder & CTO · FINETIKS",
  },
  en: {
    quote:
      "“Security isn't just a checklist for us — it's the foundation of every feature we build. We make sure every FINETIKS transaction and every user's data is protected to the same rigorous standard as a bank.”",
    name: "Edwin",
    role: "Co-Founder & CTO · FINETIKS",
  },
};

export default function CTOQuote() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <section className="w-full px-6 py-20 sm:py-28 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-[1128px] flex-col items-start gap-5 text-left"
      >
        {/* Avatar — placeholder photo until a real headshot is available */}
        <div className="relative h-20 w-20 overflow-hidden rounded-full shadow-sm">
          <Image
            src="/images/cto-placeholder.jpg"
            alt={t.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <p className="font-poppins text-xl font-bold leading-[1.5] text-text-primary sm:text-2xl lg:text-[28px]">
          {t.quote}
        </p>

        <p className="font-poppins text-sm text-text-secondary">
          {t.name}, {t.role}
        </p>
      </motion.div>
    </section>
  );
}
