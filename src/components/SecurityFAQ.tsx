"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: Record<"id" | "en", FAQItem[]> = {
  id: [
    {
      question: "Bagaimana FINETIKS melindungi data pribadi saya?",
      answer:
        "Data kamu dienkripsi dengan standar AES-256, baik saat tersimpan maupun saat dikirim antar sistem. Akses ke data pribadi dibatasi secara ketat dan hanya digunakan sesuai kebutuhan layanan, mengikuti standar keamanan informasi yang tersertifikasi ISO 27001.",
    },
    {
      question: "Apa yang harus saya lakukan jika HP saya hilang atau dicuri?",
      answer:
        "Segera hubungi tim support FINETIKS melalui WhatsApp atau email support@finetiks.com agar akunmu bisa segera diamankan. Selama HP belum diamankan, aktivitas login dan transaksi tetap memerlukan PIN atau biometrik yang hanya kamu miliki.",
    },
    {
      question: "Apakah FINETIKS bisa melihat PIN atau password saya?",
      answer:
        "Tidak. PIN dan password kamu tidak pernah disimpan dalam bentuk teks biasa dan tidak dapat dilihat oleh tim FINETIKS. Jangan pernah membagikan PIN, password, atau kode OTP kepada siapa pun, termasuk pihak yang mengaku dari FINETIKS.",
    },
    {
      question: "Bagaimana cara melaporkan aktivitas mencurigakan atau celah keamanan?",
      answer:
        "Kamu bisa melaporkannya kapan saja melalui email support@finetiks.com atau WhatsApp di +6285179912745. Tim kami akan menindaklanjuti setiap laporan secepat mungkin.",
    },
    {
      question: "Apakah dana saya di FINETIKS aman?",
      answer:
        "FINETIKS bekerja sama dengan Bank Victoria untuk produk VIP Save, dan terdaftar serta diawasi oleh OJK, Bank Indonesia, Komdigi, dan AFTECH sesuai ketentuan yang berlaku di Indonesia.",
    },
  ],
  en: [
    {
      question: "How does FINETIKS protect my personal data?",
      answer:
        "Your data is encrypted with the AES-256 standard, both at rest and while moving between systems. Access to personal data is tightly restricted and used only as needed for the service, following our ISO 27001-certified information security standards.",
    },
    {
      question: "What should I do if my phone is lost or stolen?",
      answer:
        "Contact FINETIKS support right away via WhatsApp or support@finetiks.com so we can secure your account. Until then, logins and transactions still require the PIN or biometrics that only you have.",
    },
    {
      question: "Can FINETIKS see my PIN or password?",
      answer:
        "No. Your PIN and password are never stored in plain text and can't be viewed by the FINETIKS team. Never share your PIN, password, or OTP code with anyone, including someone claiming to be from FINETIKS.",
    },
    {
      question: "How do I report suspicious activity or a security vulnerability?",
      answer:
        "You can report it anytime via support@finetiks.com or WhatsApp at +6285179912745. Our team follows up on every report as quickly as possible.",
    },
    {
      question: "Is my money safe with FINETIKS?",
      answer:
        "FINETIKS partners with Bank Victoria for the VIP Save product, and is registered with and supervised by OJK, Bank Indonesia, Komdigi, and AFTECH under applicable regulations in Indonesia.",
    },
  ],
};

const HEADER = {
  id: {
    title: "Pertanyaan Seputar Keamanan",
    subtitle: "Masih ada yang mengganjal soal keamanan akunmu? Cek dulu di sini.",
  },
  en: {
    title: "Security Questions",
    subtitle: "Still have questions about your account's security? Check here first.",
  },
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 rounded-lg bg-white p-4 text-left transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      >
        <span className="flex-1 font-poppins text-base font-semibold text-text-secondary sm:text-lg">
          {item.question}
        </span>
        <span className="shrink-0 text-text-secondary">
          <ChevronIcon open={isOpen} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 font-montserrat text-sm leading-relaxed text-text-secondary sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SecurityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useLanguage();
  const header = HEADER[lang];
  const faqs = FAQS[lang];

  return (
    <section className="w-full bg-white px-6 py-16 sm:py-24 lg:py-[128px]">
      <div className="mx-auto flex max-w-[938px] flex-col items-center gap-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="font-poppins text-[28px] font-bold leading-tight text-grape-dark sm:text-[40px] sm:leading-[54px]">
            {header.title}
          </h2>
          <p className="font-poppins text-base text-text-primary sm:text-lg">
            {header.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex w-full flex-col items-start gap-6"
        >
          {faqs.map((item, i) => (
            <div key={item.question + i} className="w-full">
              <AccordionItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
              {i < faqs.length - 1 && (
                <div className="mt-6 h-px w-full bg-[#83AFBE] opacity-20" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
