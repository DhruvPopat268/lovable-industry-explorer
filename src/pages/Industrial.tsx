import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, BarChart } from "lucide-react";

const Industrial = () => {
  const features = [
    {
      title: "Reduce project timelines",
      description: "Streamline workflows and accelerate project delivery with integrated planning tools.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Precise access to your data",
      description: "Get real-time insights into project performance with advanced analytics and reporting.",
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: "Make better decisions",
      description: "Use data-driven insights to optimize safety, cost, and timeline considerations.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const stats = [
    { number: "30%", label: "Time savings across all projects" },
    { number: "25%", label: "Faster at finding key project files" },
    { number: "60%", label: "Reduction of pre-startup issues" }
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
                  INDUSTRIAL CONSTRUCTION
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Software for industrial
                <span className="text-primary block">construction projects</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Turn your toughest builds into your most successful ones by connecting 
                the people building our industry's greatest constructions.
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
                      <div className="text-sm font-medium text-gray-500">Industrial Project</div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-primary/10 p-3 rounded text-center">
                        <div className="text-lg font-bold text-primary">85%</div>
                        <div className="text-xs text-gray-600">Complete</div>
                      </div>
                      <div className="bg-green-100 p-3 rounded text-center">
                        <div className="text-lg font-bold text-green-600">12</div>
                        <div className="text-xs text-gray-600">On Track</div>
                      </div>
                      <div className="bg-yellow-100 p-3 rounded text-center">
                        <div className="text-lg font-bold text-yellow-600">3</div>
                        <div className="text-xs text-gray-600">At Risk</div>
                      </div>
                    </div>
                    
                    <div className="h-20 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Progress Timeline</span>
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
            
            <div className="flex justify-center space-x-8 mt-8">
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
              <div className="bg-white rounded-xl shadow-construction p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Project Files</div>
                    <div className="text-sm text-primary">View All</div>
                  </div>
                  
                  <div className="space-y-3">
                    {["Structural Drawings", "Electrical Plans", "Safety Reports", "Progress Photos"].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">{item}</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    ))}
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

export default Industrial;