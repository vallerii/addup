import CompanyInfoSection from "./CompanyInfoSection";
import Hero from "./Hero";
import MissionSection from "./MissionSection";
import StatsSection from "./StatsSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col gap-[8px]">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsSection />

      {/* Mission Image Section */}
      <MissionSection />

      {/* Company Info Section */}
      <CompanyInfoSection />
    </div>
  );
}

