
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, TrendingUp, Percent } from "lucide-react";

const Commercial = () => {
  const features = [
    {
      title: "Design & construction, faster",
      description: "Accelerate project delivery with integrated design and construction workflows.",
      icon: <Building className="h-8 w-8" />
    },
    {
      title: "Less risk. More ROI.",
      description: "Minimize project risks while maximizing return on investment through better planning.",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Happy clients, repeat business",
      description: "Deliver exceptional results that keep clients coming back for more projects.",
      icon: <Users className="h-8 w-8" />
    }
  ];

  const stats = [
    { number: "85%", label: "Repeat business" },
    { number: "3x", label: "Increase in productivity & accuracy" },
    { number: "65%", label: "Reduction in RFI handling time" },
    { number: "100%", label: "Increase in leads on projects" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-construction-blue to-construction-gray text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/800"
            alt="Commercial construction site"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/80 to-construction-gray/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  COMMERCIAL CONSTRUCTION INDUSTRIES
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Less complexity. More
                <span className="text-primary block">construction.</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Commercial builders know that to finish first, first gather and store resources with Autodesk. Built to help teams work faster than ever.
              </p>

              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started
              </Button>
            </div>

            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Commercial construction dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Build with Autodesk Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Build it with Autodesk.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help commercial construction teams work smarter, not harder. Commercial spaces are where people work, shop, and spend time together. Build effective workflows for building.
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
              Construction teams are essential parts of the Autodesk ecosystem that save time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Construction software for the next era of work
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Autodesk's cost-effective yet powerful general contractor software efficiently gets the job done. Helps eliminate bottlenecks and manage all the moving pieces of construction projects.
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">General Construction</h4>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-muted-foreground">Speciality</h4>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-muted-foreground">Trade</h4>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-muted-foreground">Plant & Infrastructure</h4>
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
                alt="Commercial construction software interface"
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

      {/* Learn More Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Learn more about how Autodesk commercial construction software can work for you.
          </h2>
          <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
            Get Started
          </Button>
        </div>
      </section>

      {/* Built for Commercial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for commercial construction projects.
            </h2>
            
            <div className="flex justify-center flex-wrap gap-4 mt-8">
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium">
                Project Management
              </button>
              <button className="px-6 py-2 text-gray-600 hover:text-primary">
                Document Management
              </button>
              <button className="px-6 py-2 text-gray-600 hover:text-primary">
                Quality & Compliance
              </button>
              <button className="px-6 py-2 text-gray-600 hover:text-primary">
                BIM Coordination
              </button>
              <button className="px-6 py-2 text-gray-600 hover:text-primary">
                Quantification
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Upscale commercial construction and drive profitability.
              </h3>
              
              <p className="text-muted-foreground mb-6">
                As one of our project leads is likely to communicate: "Our teams use various workflows depending on the situation, and the commercial construction team has seen this to be beneficial in managing the project's construction, commercial estimating, and more."
              </p>

              <p className="text-muted-foreground mb-8">
                Accurate information leads to the same communication between teams. And by providing stakeholders with easy access to shared models, information isn't siloed and everyone can always be working with the latest, most accurate project data.
              </p>

              <Button variant="hero" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/500/400" 
                alt="Commercial construction project planning interface"
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

export default Commercial;
