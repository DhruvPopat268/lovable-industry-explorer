import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react";

const Infrastructure = () => {
  const features = [
    {
      title: "Deliver on time and budget",
      description: "Keep track of project timelines and budgets with real-time insights and predictive analytics.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Scale with greater resilience",
      description: "Build infrastructure that stands the test of time with advanced planning and risk management tools.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Make better decisions",
      description: "Use data-driven insights to make informed decisions that reduce costs and improve outcomes.",
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const stats = [
    { number: "40 Hrs", label: "Saved in data entry per week" },
    { number: "65%", label: "Reduction in RFI management" },
    { number: "AU$150", label: "Saved in administrative costs" },
    { number: "13.9K Hrs", label: "of work saved across all stakeholders" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-construction-blue to-construction-gray text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  INFRASTRUCTURE CONSTRUCTION
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Building the foundation for a more
                <span className="text-primary block">connected world</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Build infrastructure that connecting the people who build infrastructure, 
                starting with the project from kick-off to handoff.
              </p>

              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started Free
              </Button>
            </div>

            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Infrastructure construction site"
                className="rounded-lg shadow-2xl"
              />
            </div>
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
                    Better, Fact, and Smarter
                  </h4>
                  <p className="text-muted-foreground">
                    Enhanced collaboration between project stakeholders, faster project delivery, 
                    and smarter decision-making tools.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Real Outcomes
                  </h4>
                  <p className="text-muted-foreground">
                    Meet deadlines and budgets while maintaining quality standards.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Better Infrastructure  
                  </h4>
                  <p className="text-muted-foreground">
                    Build infrastructure that stands the test of time with proper planning and execution.
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
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Infrastructure Dashboard</div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">92%</div>
                      <div className="text-sm text-gray-600">On Schedule</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$2.1M</div>
                      <div className="text-sm text-gray-600">Under Budget</div>
                    </div>
                  </div>
                  
                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Project Progress Chart</span>
                  </div>
                </div>
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

      <Footer />
    </div>
  );
};

export default Infrastructure;