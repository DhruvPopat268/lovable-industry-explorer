
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react";

const Infrastructure = () => {
  const features = [
    {
      title: "Deliver on time and budget",
      description: "Keep track of project timelines and budgets with real-time insights and predictive analytics.",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Scale with greater resilience",
      description: "Build infrastructure that stands the test of time with advanced planning and risk management tools.",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Find and task what your team needs",
      description: "Use data-driven insights to make informed decisions that reduce costs and improve outcomes.",
      icon: <DollarSign className="h-8 w-8" />
    }
  ];

  const stats = [
    { number: "40 Hrs", label: "Saved in data entry per week" },
    { number: "65%", label: "Reduction in RFI management" },
    { number: "AU$150", label: "Saved in administrative costs" },
    { number: "13.9K Hrs", label: "of work saved across all stakeholders" }
  ];

  const companiesData = [
    { name: "SKANSKA", logo: "/api/placeholder/120/60" },
    { name: "DPR Construction", logo: "/api/placeholder/120/60" },
    { name: "Boldt", logo: "/api/placeholder/120/60" },
    { name: "Gaylor", logo: "/api/placeholder/120/60" },
    { name: "Walsh", logo: "/api/placeholder/120/60" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-construction-blue to-construction-gray text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/800"
            alt="Infrastructure construction site"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/80 to-construction-gray/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  INFRASTRUCTURE CONSTRUCTION SOFTWARE
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Building the foundation for a more
                <span className="text-primary block">connected world</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Build infrastructure that connects communities. Starting with the project team kick-off to handoff.
              </p>

              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started
              </Button>
            </div>

            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Infrastructure construction dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by owners, contractors, and consultants globally
            </p>
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-70">
            {companiesData.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Taking the challenge head on with Autodesk
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Infrastructure projects are complex enterprises that work at a massive scale, across vast sites, and over decades.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Infrastructure Section */}
      <section className="py-20 bg-construction-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground">
              Infrastructure is inherently collaborative at a massive scale that requires new connections and protocols for success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Paving the way for more resilient infrastructure
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Better, Fast, and Smarter
                  </h4>
                  <p className="text-muted-foreground">
                    Enhanced collaboration between project stakeholders, faster project delivery, and smarter decision-making tools.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Real Outcomes
                  </h4>
                  <p className="text-muted-foreground">
                    Meet deadlines and budgets while maintaining quality standards through comprehensive project oversight.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Better Infrastructure  
                  </h4>
                  <p className="text-muted-foreground">
                    Build infrastructure that stands the test of time with proper planning, execution, and quality control.
                  </p>
                </div>
              </div>

              <Button variant="hero" className="mt-8 group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-construction p-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Infrastructure project management software interface"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-construction-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Real world results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-white">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Learn more about how Autodesk's software can support your infrastructure construction projects.
          </h2>
          <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
            Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Infrastructure;
