
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "PRODUCTS",
      links: [
        "Autodesk Build",
        "Autodesk Docs", 
        "Autodesk Takeoff",
        "Build Management",
        "BIM Collaborate",
        "Autodesk Redlines"
      ]
    },
    {
      title: "EXPLORE",
      links: [
        "3D",
        "AI",
        "Android",
        "CAD Collaborate",
        "Enterprise",
        "iOS"
      ]
    },
    {
      title: "INTEGRATIONS",
      links: [
        "Platform Developers",
        "ARC Connect",
        "API Developers",
        "3D Webhooks",
        "App Store",
        "Marketplace"
      ]
    },
    {
      title: "SUPPORT",
      links: [
        "Help Center",
        "Training",
        "Community",
        "Partners",
        "Developer Support",
        "Contact Us"
      ]
    },
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Investors",
        "Blog",
        "Careers",
        "Press",
        "Privacy"
      ]
    }
  ];

  return (
    <footer className="bg-construction-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-white/20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Getting started is easy
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Try Free
            </button>
            <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              Buy Now
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-sm mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to="#" 
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ecffcb72-cfd0-4859-9099-2fdd4e94d379.png" 
                  alt="1 VANS Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="ml-2 text-lg font-semibold">
                1 VANS
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8 text-sm text-white/70">
            <div>© 2024 1 VANS. All rights reserved.</div>
            <div className="flex space-x-6">
              <Link to="#" className="hover:text-white transition-colors">Terms</Link>
              <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
