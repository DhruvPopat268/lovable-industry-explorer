
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, Heart, Shield } from "lucide-react";

const Institutional = () => {
  const features = [
    {
      title: "Educational Excellence",
      description: "Design and build state-of-the-art educational facilities that inspire learning and innovation.",
      icon: <GraduationCap className="h-8 w-8" />
    },
    {
      title: "Healthcare Innovation",
      description: "Create healing environments with advanced healthcare construction management solutions.",
      icon: <Heart className="h-8 w-8" />
    },
    {
      title: "Government Projects",
      description: "Deliver public infrastructure projects on time and within budget with comprehensive oversight.",
      icon: <BookOpen className="h-8 w-8" />
    }
  ];

  const stats = [
    { number: "500+", label: "Institutional projects completed" },
    { number: "98%", label: "On-time delivery rate" },
    { number: "$2.5B", label: "Total project value managed" },
    { number: "95%", label: "Client satisfaction rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-construction-blue to-construction-gray text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/800"
            alt="Institutional construction site"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/80 to-construction-gray/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Specialized construction management for educational, healthcare, and government facilities that serve communities and improve lives.
              </p>

              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started
              </Button>
            </div>

            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Institutional construction dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Build it with Autodesk.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help institutional construction teams create spaces that matter. From schools that inspire tomorrow's leaders to hospitals that heal communities, we provide the tools to build better institutions.
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

      {/* One Platform Section */}
      <section className="py-20 bg-construction-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              One platform for every project.
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized tools for the unique demands of institutional construction projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Construction software for the next era of work
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Institutional projects require specialized workflows, compliance tracking, and stakeholder coordination. Our platform addresses these unique challenges while maintaining the highest standards of quality and safety.
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Educational Facilities</h4>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Healthcare</h4>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Government</h4>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Public & Infrastructure</h4>
                </div>
              </div>

              <Button variant="hero" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/500/400" 
                alt="Institutional construction software interface"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
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

      {/* Specialized Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Specialized for institutional needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From schools and hospitals to government buildings, our platform addresses the unique challenges of institutional construction projects with specialized workflows and compliance tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Built for compliance and quality
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Regulatory Compliance
                  </h4>
                  <p className="text-muted-foreground">
                    Built-in compliance tracking for healthcare, educational, and government standards.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Stakeholder Coordination
                  </h4>
                  <p className="text-muted-foreground">
                    Manage complex approval processes with multiple stakeholders and decision makers.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Quality Assurance
                  </h4>
                  <p className="text-muted-foreground">
                    Ensure the highest standards with comprehensive quality management tools.
                  </p>
                </div>
              </div>

              <Button variant="hero" className="mt-8 group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/500/400" 
                alt="Institutional project compliance dashboard"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Institutional;
