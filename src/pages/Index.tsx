
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Your single source of truth for every project
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            AEC workflows start with chaos. Keep data and information organized and accessible so you can always focus on what's moving the project forward.
          </p>
          <div className="relative max-w-lg mx-auto">
            <img 
              src="/api/placeholder/500/400" 
              alt="Project workflow visualization" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <IndustrySection />
      <section className="py-20 bg-construction-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Working together is no longer hard work
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect your teams across the entire project lifecycle with a common data environment.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">Artificial Intelligence</h3>
              <p className="text-muted-foreground mb-6">
                Leverage AI-powered insights to make better decisions faster. Automate routine tasks and focus on what matters most.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="AI-powered construction insights" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <IntegrationsSection />
      <Footer />
    </div>
  );
};

export default Index;
