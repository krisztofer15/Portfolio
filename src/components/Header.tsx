import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events for header appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update header appearance based on scroll position
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["contact", "projects", "skills", "about", "home"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    // Close the menu first to prevent layout shifts during scrolling
    setMenuOpen(false);
    
    // Small delay to allow menu closing animation to complete
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        // Calculate the offset for proper scrolling (accounting for fixed header)
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        // Scroll to the element with offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navItems = [
    { id: "home", label: "Kezdőlap" },
    { id: "about", label: "Rólam" },
    { id: "skills", label: "Képességek" },
    { id: "projects", label: "Projektek" },
    { id: "contact", label: "Kapcsolat" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d1117]/90 backdrop-blur-md shadow-lg py-3' : 'bg-[#0d1117]/70 backdrop-blur-sm py-4'}`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-white cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          Krisztofer.dev
        </motion.h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative text-sm font-medium transition-colors ${activeSection === item.id ? 'text-blue-400' : 'text-white/70 hover:text-white'}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span 
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transform transition-all duration-300 ${menuOpen ? 'rotate-45 top-2' : 'top-0'}`}
            />
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transform transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'} top-2`}
            />
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transform transition-all duration-300 ${menuOpen ? '-rotate-45 top-2' : 'top-4'}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0d1117] border-t border-white/10 overflow-hidden"
          >
            <div className="container max-w-6xl mx-auto px-6 py-6 flex flex-col">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className={`py-4 text-left text-lg font-medium ${activeSection === item.id ? 'text-blue-400' : 'text-white/80'}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}