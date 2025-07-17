import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import heroImage from "@/assets/construction-hero.jpg";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-construction-blue to-construction-gray overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction site with technology"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/80 to-construction-gray/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                AUTODESK 1 Vansh
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Build it with
              <br />
              <span className="text-primary">1 Vansh</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-lg">
              Connect people, data, and workflows across the construction project lifecycle with field execution software for builders.
            </p>

            {/* Rating */}
            <div className="flex items-center mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-white/90">Trusted by 100,000+ projects</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started Free
              </Button>
              <Button variant="outline-white" size="lg" className="group">
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12">
              <p className="text-sm text-white/70 mb-4">
                Trusted by construction management software teams at 500+ projects globally
              </p>
              <div className="flex items-center space-x-8 opacity-70">
                <div className="text-white font-semibold">DPR Construction</div>
                <div className="text-white font-semibold">Boldt</div>
                <div className="text-white font-semibold">Gaylor</div>
                <div className="text-white font-semibold">Walsh</div>
              </div>
            </div>
          </div>

          {/* Right Content - Software Interface Mockup */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="bg-white rounded-lg shadow-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">Project Dashboard</div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">95%</div>
                        <div className="text-xs text-gray-600">Complete</div>
                      </div>
                    </div>
                    <div className="h-20 bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">12</div>
                        <div className="text-xs text-gray-600">On Track</div>
                      </div>
                    </div>
                    <div className="h-20 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">3</div>
                        <div className="text-xs text-gray-600">At Risk</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;