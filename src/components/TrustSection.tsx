const TrustSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Your single source of truth for every project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AEC is a complex and collaborative effort that involves every person, trade, and contractor working on a single project. Everything must work together seamlessly.
          </p>
        </div>

        {/* Circular Workflow Diagram */}
        <div className="flex justify-center mb-16">
          <div className="relative w-96 h-96">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-construction">
              <div className="text-center">
                <div className="text-white font-bold text-lg">Project</div>
                <div className="text-white text-sm">Hub</div>
              </div>
            </div>

            {/* Surrounding Elements */}
            {[
              { title: "Design", pos: "top-0 left-1/2 -translate-x-1/2", color: "bg-blue-500" },
              { title: "Build", pos: "top-8 right-0", color: "bg-green-500" },
              { title: "Operate", pos: "bottom-8 right-0", color: "bg-purple-500" },
              { title: "Plan", pos: "bottom-0 left-1/2 -translate-x-1/2", color: "bg-yellow-500" },
              { title: "Manage", pos: "bottom-8 left-0", color: "bg-red-500" },
              { title: "Connect", pos: "top-8 left-0", color: "bg-indigo-500" },
            ].map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.pos} w-20 h-20 ${item.color} rounded-lg flex items-center justify-center text-white font-semibold shadow-lg`}
              >
                {item.title}
              </div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <defs>
                <pattern id="dots" patternUnits="userSpaceOnUse" width="4" height="4">
                  <circle cx="2" cy="2" r="1" fill="#e5e7eb" />
                </pattern>
              </defs>
              <circle cx="192" cy="192" r="120" fill="none" stroke="url(#dots)" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-construction-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-construction-gray transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;