import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, DollarSign } from "lucide-react";

const GeneralContractors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-construction-blue to-construction-gray text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Built for
                <span className="text-primary block">General Contractors</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Control schedules, manage teams, track progress, and deliver projects on time and within budget with our comprehensive project management platform.
              </p>

              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started Free
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Project Dashboard</div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-primary/10 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-sm text-gray-600">Active Projects</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">On Schedule</div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-blue-600">$2.1M</div>
                      <div className="text-sm text-gray-600">Under Budget</div>
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
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Team Management</h3>
              <p className="text-muted-foreground">Coordinate teams, assign tasks, and track progress across all project phases.</p>
            </div>
            <div className="text-center p-8">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Schedule Control</h3>
              <p className="text-muted-foreground">Keep projects on track with real-time scheduling and milestone tracking.</p>
            </div>
            <div className="text-center p-8">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Budget Management</h3>
              <p className="text-muted-foreground">Monitor costs, track expenses, and ensure projects stay within budget.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralContractors;