import type { Metadata } from "next";
import { Poppins, Manrope, Montserrat } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Keamanan — FINETIKS";
const description =
  "Pelajari bagaimana FINETIKS melindungi data dan transaksi keuanganmu dengan teknologi keamanan tingkat tinggi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "FINETIKS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero-shield-v3.png",
        width: 1200,
        height: 630,
        alt: "FINETIKS security shield",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-shield-v3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${manrope.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FEFEFE] font-poppins">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
