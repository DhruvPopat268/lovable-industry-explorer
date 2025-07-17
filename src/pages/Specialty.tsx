import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Specialty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-gradient-to-br from-construction-blue to-construction-gray text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Specialty <span className="text-primary">Contractors</span>
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Coordinate with general contractors, manage workflows, and ensure quality deliverables with specialized tools for specialty trades.
          </p>
          <Button variant="hero" size="lg">Get Started</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Specialty;