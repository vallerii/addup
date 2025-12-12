import FAQSection from "../FAQSection";
import Hero from "./Hero";
import HowitWorksSection from "./HowitWorksSection";
import MobileAppSection from "./MobileAppSection";
import PlatformSection from "./PlatformSection";
import SwapSection from "./SwapSection";
import TradingMarketsSection from "./TradingMarketsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen ">
 
      <Hero />

      {/* Trading Markets Section */}
      <TradingMarketsSection />

      {/* Swap Section */}
      <SwapSection />

      {/* How it Works Section */}
      <HowitWorksSection />

      {/* Platform Section - Dark Background */}
      <PlatformSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Mobile App Section - Dark */}
      <MobileAppSection />


    </div>
  );
}