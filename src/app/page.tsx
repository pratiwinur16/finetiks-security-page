import Navbar from "@/components/Navbar";
import SecurityHeroV3 from "@/components/SecurityHeroV3";
import CTOQuote from "@/components/CTOQuote";
import SecurityPillars from "@/components/SecurityPillars";
import SecurityTips from "@/components/SecurityTips";
import SecurityCompliance from "@/components/SecurityCompliance";
import SecurityFAQ from "@/components/SecurityFAQ";
import SecurityInsights from "@/components/SecurityInsights";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col">
        <div id="dark-zone">
          <SecurityHeroV3 />
        </div>
        <CTOQuote />
        <SecurityPillars />
        <SecurityTips />
        <SecurityCompliance />
        <SecurityInsights />
        <SecurityFAQ />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
