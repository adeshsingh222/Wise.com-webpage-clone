import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import TravelSection from "@/components/home/TravelSection";
import TransferSection from "@/components/home/TransferSection";
import CalculatorSection from "@/components/home/CalculatorSection";
import SecuritySection from "@/components/home/SecuritySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import AppSection from "@/components/home/AppSection";
import Footer from "@/components/layout/Footer";
import WorksNearlyEverywhereSection from "@/components/home/WorksNearlyEveryWhere";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <TravelSection />
      <TransferSection />
      <CalculatorSection />
      <SecuritySection />
      <TestimonialSection />
      <AppSection />
      <WorksNearlyEverywhereSection />
      <Footer />
    </main>
  );
}
