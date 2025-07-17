const StatsSection = () => {
  const stats = [
    {
      number: "85%",
      label: "Repeat business",
      description: "of projects see increased efficiency after switching to our solution"
    },
    {
      number: "3x",
      label: "Increase in productivity & accuracy", 
      description: "teams report significant improvements in project delivery"
    },
    {
      number: "65%",
      label: "Reduction in RFI handling time",
      description: "faster resolution of project issues and communications"
    },
    {
      number: "100%",
      label: "Increase in fields on projects",
      description: "complete visibility across all project phases and teams"
    }
  ];

  return (
    <section className="py-20 bg-construction-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Proven impact in construction
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of construction professionals who trust our platform to deliver better project outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2 text-white">
                {stat.label}
              </div>
              <div className="text-sm text-white/70 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;