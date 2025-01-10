import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero";
import { StatisticsSection } from "@/components/StatisticsSection";
import { Footer } from "@/components/Footer";
import CampaignSection from "@/components/Campaigns";

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <StatisticsSection />
      <CampaignSection />
      <Footer />
    </div>
  );
}
