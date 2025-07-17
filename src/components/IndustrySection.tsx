import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, Hammer } from "lucide-react";

const IndustrySection = () => {
  const industries = [
    {
      title: "General Contractors",
      description: "Control schedules, manage teams, track progress, and deliver projects on time and within budget.",
      icon: <Users className="h-12 w-12 text-primary" />,
      stats: "85% faster project delivery",
      link: "/general-contractors"
    },
    {
      title: "Specialty Contractors", 
      description: "Coordinate with general contractors, manage workflows, and ensure quality deliverables.",
      icon: <Hammer className="h-12 w-12 text-primary" />,
      stats: "60% reduction in rework",
      link: "/specialty"
    },
    {
      title: "Owners",
      description: "Monitor project progress, manage budgets, and ensure successful project outcomes from start to finish.",
      icon: <Building className="h-12 w-12 text-primary" />,
      stats: "40% cost savings achieved",
      link: "/owners"
    }
  ];

  return (
    <section className="py-20 bg-construction-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Construction software built for builders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep all your project information in one place - from initial planning through final delivery. Make your complex projects more manageable with our software solutions.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  {industry.icon}
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {industry.title}
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-primary">{industry.stats}</div>
                </div>

                <Button variant="hero" className="group">
                  Learn More About Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Mockup/Visual */}
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-construction p-8">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 h-64">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="h-4 bg-primary/30 rounded w-32"></div>
                        <div className="w-8 h-8 bg-primary rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="h-16 bg-primary/20 rounded-lg"></div>
                        <div className="h-16 bg-green-100 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;