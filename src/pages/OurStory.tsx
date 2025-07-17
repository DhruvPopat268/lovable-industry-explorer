
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";

const OurStory = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We continuously push the boundaries of construction technology to deliver cutting-edge solutions.",
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your construction goals.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from our software to our customer service.",
      icon: <Award className="h-8 w-8" />
    }
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", description: "Started with a vision to revolutionize construction project management" },
    { year: "2018", title: "10,000 Users", description: "Reached our first major milestone of active users across North America" },
    { year: "2020", title: "Global Expansion", description: "Expanded operations to serve construction projects worldwide" },
    { year: "2023", title: "Industry Leader", description: "Recognized as the leading construction cloud platform" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-construction-blue to-construction-gray text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Building the future of construction, one project at a time. 
              Learn about our mission, values, and the team behind Construction Cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower construction professionals with innovative cloud-based solutions 
                that streamline project management, enhance collaboration, and drive successful 
                project outcomes.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that technology should simplify, not complicate, the construction 
                process. Our platform brings together all stakeholders on a single, 
                unified platform that promotes transparency, efficiency, and accountability.
              </p>
              <Button variant="hero" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-construction-light-gray rounded-xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100,000+</div>
                    <div className="text-sm text-gray-600">Projects Managed</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-construction-blue">50+</div>
                      <div className="text-xs text-gray-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-construction-blue">500+</div>
                      <div className="text-xs text-gray-600">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-construction-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
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

export default OurStory;
