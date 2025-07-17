import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import IndustrySection from "@/components/IndustrySection";
import StatsSection from "@/components/StatsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustSection />
      <IndustrySection />
      <StatsSection />
      <IntegrationsSection />
      <Footer />
    </div>
  );
};

export default Index;
