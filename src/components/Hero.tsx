import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../assets/kriszzzz.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-[#0d1117] to-[#0f141e]"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Left column - Text content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:flex-1 lg:flex-none lg:w-3/5 text-center md:text-left order-2 md:order-1"
          >
            <div className="mb-4 inline-block bg-blue-500/10 px-3 py-1 rounded-full">
              <span className="text-blue-400 font-medium text-sm sm:text-base">Junior Szoftverfejlesztő</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Szia, <span className="text-blue-400">Kóczé Krisztofer</span> vagyok
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0 mb-6 sm:mb-8">
              Szenvedélyes fejlesztő, aki React, Next.js, Supabase és Node.js technológiákkal épít modern webes és mobilalkalmazásokat. Célom, hogy egyszerű, de hatékony megoldásokat hozzak létre.  
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-600 transition"
              >
                <Sparkles className="w-4 h-4" />
                Projektjeim
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-transparent border border-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:border-blue-400 hover:text-blue-400 transition"
              >
                <Mail className="w-4 h-4" />
                Kapcsolat
              </a>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          {/* Right column - Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:flex-1 lg:flex-none lg:w-2/5 flex justify-center mb-8 md:mb-0 order-1 md:order-2"
          >
            <div className="relative">
              {/* Decorative element behind image */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
              
              {/* Image with border */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#1a2233] shadow-xl">
                <img 
                  src={profileImage} 
                  alt="Kóczé Krisztofer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1a2233] px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg border border-blue-500/30">
                <span className="text-blue-400 font-medium text-xs sm:text-sm">Frontend Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
