
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const industryItems = [
    { title: "Commercial", href: "/commercial" },
    { title: "Industrial", href: "/industrial" },
    { title: "Infrastructure", href: "/infrastructure" },
    { title: "Institutional", href: "/institutional" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ecffcb72-cfd0-4859-9099-2fdd4e94d379.png" 
                  alt="1 VANS Logo" 
                  className="h-8 w-8 object-contain filter invert"
                />
              </div>
              <span className="ml-2 text-xl font-semibold text-foreground">
                1 VANS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                  Industry
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                  {industryItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link to={item.href} className="w-full">
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/our-story" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                Our Story
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                to="/"
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <span className="text-sm font-medium text-muted-foreground">Industry</span>
                <div className="mt-2 space-y-1">
                  {industryItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-foreground hover:text-primary block px-3 py-2 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/our-story"
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
