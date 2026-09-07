"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const HEADER = {
  id: {
    title: "Wawasan Keamanan Terbaru",
    subtitle: "Artikel pilihan seputar keamanan siber dan perlindungan data untuk kamu.",
  },
  en: {
    title: "Latest Security Insight",
    subtitle: "Curated articles on cybersecurity and data protection to keep you informed.",
  },
};

type Insight = {
  image: string;
  title: string;
  author: string;
  date: string;
  href: string;
};

// Real posts pulled from finetiks.com/blog. Titles are kept in Indonesian
// since that's the language of the source articles.
const INSIGHTS: Record<"id" | "en", Insight[]> = {
  id: [
    {
      image:
        "https://cdn.prod.website-files.com/639af40652da2a1858a8e8d4/65a7440bf21821037faa96f5_642b84a8ea067630ab03dfd1_Download%2520Closed%2520Padlock%2520on%2520digital%2520background%252C%2520cyber%2520security%2520for%2520free%2520(1).jpeg",
      title: "4 Cara Terbaik Menjaga Keamanan Data Pengguna FINETIKS",
      author: "Penulis: FINETIKS",
      date: "31 Mar 2023",
      href: "https://www.finetiks.com/blog/keamanan-data-pengguna-finetiks-solusi-terbaik-untuk-manajemen-keuangan-pribadi",
    },
    {
      image: "https://cdn.prod.website-files.com/639af40652da2a1858a8e8d4/6897ff2d0aca729fce9a514f_KTP%20hilang.webp",
      title: "KTP Hilang? Ini 7 Langkah Penting Supaya Data Tetap Aman!",
      author: "Penulis: Karin Hidayat",
      date: "10 Aug 2025",
      href: "https://www.finetiks.com/blog/ktp-hilang-ini-7-langkah-penting-supaya-data-tetap-aman",
    },
    {
      image:
        "https://cdn.prod.website-files.com/639af40652da2a1858a8e8d4/683537b6d0d0d9ff1e3ce2af_modus%20penipuan%20baru.webp",
      title: "Modus Penipuan Baru yang Wajib Kamu Waspadai 2025",
      author: "Penulis: Karin Hidayat",
      date: "27 May 2025",
      href: "https://www.finetiks.com/blog/modus-penipuan-baru-yang-wajib-kamu-waspadai-2025",
    },
  ],
  en: [
    {
      image:
        "https://cdn.prod.website-files.com/639af40652da2a1858a8e8d4/65a7440bf21821037faa96f5_642b84a8ea067630ab03dfd1_Download%2520Closed%2520Padlock%2520on%2520digital%2520background%252C%2520cyber%2520security%2520for%2520free%2520(1).jpeg",
      title: "4 Cara Terbaik Menjaga Keamanan Data Pengguna FINETIKS",
      author: "Author: FINETIKS",
      date: "31 Mar 2023",
      href: "https://www.finetiks.com/blog/keamanan-data-pengguna-finetiks-solusi-terbaik-untuk-manajemen-keuangan-pribadi",
    },
    {
      image: "https://cdn.prod.website-files.com/639af40652da2a1858a8e8d4/6897ff2d0aca729fce9a514f_KTP%20hilang.webp",
      title: "KTP Hilang? Ini 7 Langkah Penting Supaya Data Tetap Aman!",
      author: "Author: Karin Hidayat",
      date: "10 Aug 2025",
      href: "https://www.finetiks.com/blog/ktp-hilang-ini-7-langkah-penting-supaya-data-tetap-aman",
    },
    {
      image:
        "https://cdn.prod.website-files.com/639af40652da2a1858a8e8d4/683537b6d0d0d9ff1e3ce2af_modus%20penipuan%20baru.webp",
      title: "Modus Penipuan Baru yang Wajib Kamu Waspadai 2025",
      author: "Author: Karin Hidayat",
      date: "27 May 2025",
      href: "https://www.finetiks.com/blog/modus-penipuan-baru-yang-wajib-kamu-waspadai-2025",
    },
  ],
};

export default function SecurityInsights() {
  const { lang } = useLanguage();
  const header = HEADER[lang];
  const insights = INSIGHTS[lang];

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

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className="group flex h-full flex-col gap-5 rounded-[20px] bg-white p-4 pb-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(24,24,27,0.12)]"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-grape-tint-5">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-2 font-poppins text-[14px] leading-[19px] text-text-tertiary">
                <span>{insight.author}</span>
                <span>{insight.date}</span>
              </div>
              <hr className="border-t border-[#e9e9e9]" />
              <a
                href={insight.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins text-[16px] font-bold leading-[24px] text-grape transition-colors duration-200 hover:text-grape-dark"
              >
                {insight.title}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
