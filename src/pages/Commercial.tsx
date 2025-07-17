import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, TrendingUp } from "lucide-react";

const Commercial = () => {
  const features = [
    {
      title: "Design & construction, faster",
      description: "Streamline workflows from design through construction with integrated project management tools.",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Level the playing field",
      description: "Give your team access to the same tools and data used by industry leaders.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Happy clients, repeat business",
      description: "Deliver projects on time and within budget to build lasting client relationships.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const stats = [
    { number: "85%", label: "Repeat business" },
    { number: "3x", label: "Increase in productivity & accuracy" },
    { number: "65%", label: "Reduction in RFI handling time" },
    { number: "100%", label: "Increase in bids on projects" }
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
                  COMMERCIAL CONSTRUCTION SOLUTIONS
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Less complexity. More
                <span className="text-primary block">construction.</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Connect your teams, from the project team that brings the project across the finish line, 
                and closer than ever with Autodesk Build and Docs.
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
                      <div className="text-sm font-medium text-gray-500">Commercial Project</div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-primary/10 p-3 rounded text-center">
                        <div className="text-lg font-bold text-primary">92%</div>
                        <div className="text-xs text-gray-600">Complete</div>
                      </div>
                      <div className="bg-green-100 p-3 rounded text-center">
                        <div className="text-lg font-bold text-green-600">15</div>
                        <div className="text-xs text-gray-600">On Track</div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded text-center">
                        <div className="text-lg font-bold text-blue-600">5</div>
                        <div className="text-xs text-gray-600">Pending</div>
                      </div>
                    </div>
                    
                    <div className="h-20 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Project Dashboard</span>
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
              Build it with Autodesk.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keep all your construction workflows in one place - plan, track, and manage from initial planning 
              and design through delivery and handover. Connect your teams in the common data environment.
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
              Everything you're essential components on a unified cloud-based platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Office & Virtual data
                  </h4>
                  <p className="text-muted-foreground">
                    Keep all project data organized and accessible from any device, anywhere.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    On-site
                  </h4>
                  <p className="text-muted-foreground">
                    Mobile-first tools for field teams to stay connected and productive on-site.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Clients
                  </h4>
                  <p className="text-muted-foreground">
                    Keep clients informed with real-time project updates and progress reports.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Project & Commissioning
                  </h4>
                  <p className="text-muted-foreground">
                    Streamline handover processes and ensure all systems are properly commissioned.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Construction software for the next era of work
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Autodesk Build work better together to boost project outcomes. Set up proper sequencing, 
                implement construction workflows, get digital commissioning in place.
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
                    <div className="text-sm font-medium text-gray-500">Project Overview</div>
                    <div className="text-sm text-primary">Live Updates</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">18</div>
                      <div className="text-sm text-gray-600">Active Projects</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">On Schedule</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {["Design Phase", "Construction", "Commissioning"].map((phase, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm font-medium">{phase}</span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${[100, 75, 30][index]}%` }}
                          ></div>
                        </div>
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
              Proven impact in construction
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

export default Commercial;