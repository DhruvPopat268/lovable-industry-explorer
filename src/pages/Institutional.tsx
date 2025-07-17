
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, Heart } from "lucide-react";

const Institutional = () => {
  const features = [
    {
      title: "Educational Excellence",
      description: "Design and build state-of-the-art educational facilities that inspire learning and innovation.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Healthcare Innovation",
      description: "Create healing environments with advanced healthcare construction management solutions.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Government Projects",
      description: "Deliver public infrastructure projects on time and within budget with comprehensive oversight.",
      icon: <BookOpen className="h-6 w-6" />
    }
  ];

  const stats = [
    { number: "500+", label: "Institutional projects completed" },
    { number: "98%", label: "On-time delivery rate" },
    { number: "$2.5B", label: "Total project value managed" }
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
                  INSTITUTIONAL CONSTRUCTION
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Building for the
                <span className="text-primary block">public good</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Specialized construction management for educational, healthcare, 
                and government facilities that serve communities.
              </p>

              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="bg-white rounded-lg shadow-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-500">Institutional Dashboard</div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 p-3 rounded text-center">
                        <div className="text-lg font-bold text-primary">42</div>
                        <div className="text-xs text-gray-600">Active Projects</div>
                      </div>
                      <div className="bg-green-100 p-3 rounded text-center">
                        <div className="text-lg font-bold text-green-600">96%</div>
                        <div className="text-xs text-gray-600">Compliance Rate</div>
                      </div>
                    </div>
                    
                    <div className="h-20 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Project Timeline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Specialized for institutional needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From schools and hospitals to government buildings, our platform addresses 
              the unique challenges of institutional construction projects.
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

      {/* Stats Section */}
      <section className="py-20 bg-construction-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by institutions nationwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default Institutional;
