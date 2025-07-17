const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Integrate with the software you already use
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect Autodesk Build with your existing project management, accounting, and design software. Pick the building tools that work best for your projects.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {[
            "Procore", "PlanGrid", "BIM 360", "Revit", "AutoCAD", "Excel",
            "SmartSheet", "Sage", "QuickBooks", "Teams", "Slack", "Dropbox"
          ].map((integration, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mb-2 mx-auto"></div>
                <div className="text-sm font-medium text-gray-600">{integration}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-construction-blue rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">JD</span>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <blockquote className="text-lg lg:text-xl text-foreground mb-4">
                "We can do the entire project in Autodesk 1 Vansh instead of doing BIM coordination in a separate piece of software first."
              </blockquote>
              <div className="text-construction-blue font-semibold">John Doe</div>
              <div className="text-sm text-muted-foreground">Project Manager, Construction Pro</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-construction-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-construction-gray transition-colors">
            See All Integrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;