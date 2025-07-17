
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, BarChart } from "lucide-react";

const Industrial = () => {
  const features = [
    {
      title: "Reduce project timelines",
      description: "Streamline workflows and accelerate project delivery with integrated planning tools.",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Precise access to your data",
      description: "Get real-time insights into project performance with advanced analytics and reporting.",
      icon: <BarChart className="h-8 w-8" />
    },
    {
      title: "Make better decisions",
      description: "Use data-driven insights to optimize safety, cost, and timeline considerations.",
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const stats = [
    { number: "30%", label: "Time savings across all projects" },
    { number: "25%", label: "Faster at finding key project files" },
    { number: "60%", label: "Reduction of pre-startup issues" }
  ];

  const companiesData = [
    "Edged", "Industrial Controls", "Builders", "M&J Engineering", "Project Partners"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-construction-blue to-construction-gray text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/800"
            alt="Industrial construction site"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/80 to-construction-gray/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  INDUSTRIAL CONSTRUCTION
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Software for industrial
                <span className="text-primary block">construction projects</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Turn your toughest builds into your most successful ones by connecting the people building our industry's greatest constructions.
              </p>

              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started
              </Button>
            </div>

            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Industrial construction dashboard"
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
              Industrial construction software trusted by builders on 200+ projects
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8 opacity-70">
            {companiesData.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-muted-foreground">{company}</div>
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
              Complete your projects faster.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Use Autodesk Construction Software for streamlined workflows, integrated planning tools, and centralized data sharing. Get instant feedback in the most collaborative workflow system.
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

      {/* Purpose-Built Section */}
      <section className="py-20 bg-construction-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Purpose-Built for Industrial Construction
            </h2>
            
            <div className="flex justify-center flex-wrap gap-4 mt-8">
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium">
                Document Management
              </button>
              <button className="px-6 py-2 text-gray-600 hover:text-primary">
                Field Coordination
              </button>
              <button className="px-6 py-2 text-gray-600 hover:text-primary">
                Analytics
              </button>
              <button className="px-6 py-2 text-gray-600 hover:text-primary">
                Integrations
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                A single source of truth for your team
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Keep your team's drawings, specifications, contracts, RFIs, forms, and more on a single cloud-based platform. Everyone is working from the same information.
              </p>

              <p className="text-muted-foreground mb-8">
                Leverage powerful cloud computing at the scale of progress for reliable deliverables that hit deadlines and stay within budget specifications.
              </p>

              <Button variant="hero" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/500/400" 
                alt="Industrial construction project management interface"
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
              Real world results
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

      {/* Learn More Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Learn more about how Autodesk's software can support your industrial construction projects.
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

export default Industrial;
