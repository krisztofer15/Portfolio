import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RK_GymShop",
    description: "Teljes funkcionalitású webshop Next.js + Supabase + Tailwind CSS alapokon, admin panellel és szerepkörkezeléssel.",
    github: "https://github.com/koczekrisztian/rk_gymshop",
    live: "https://rk-gymshop.vercel.app",
    tags: ["Next.js", "Supabase", "Tailwind CSS"]
  },
  {
    title: "Workout Tracker App",
    description: "React Native + Supabase edzéskövető mobilapp: célkitűzések, gyakorlatok, profil, értesítések, statisztikák.",
    github: "https://github.com/koczekrisztian/workout-tracker",
    live: "",
    tags: ["React Native", "Supabase", "Mobile"]
  },
  {
    title: "AutoBooking",
    description: "Modern időpontfoglaló weboldal autószervizeknek. Next.js, Supabase, fájlfeltöltés és scroll animációk.",
    github: "https://github.com/koczekrisztian/autobooking",
    live: "https://autobooking.vercel.app",
    tags: ["Next.js", "Supabase", "Animation"]
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#0d1117] overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-blue-500/10 px-3 py-1 rounded-full mb-3 sm:mb-4"
          >
            <span className="text-blue-400 font-medium text-sm sm:text-base">Munkáim</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            Projektek
          </motion.h2>
        </div>

        {/* Projects grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3 w-full">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#0f141e] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/10 hover:translate-y-[-5px] transition-all duration-300 flex flex-col h-full border border-[#1a2233] w-full"
            >
              {/* Project header with gradient */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 sm:p-5 border-b border-[#1a2233]">
                <h3 className="text-lg sm:text-xl font-bold text-white break-words">
                  {project.title}
                </h3>
              </div>
              
              {/* Project content */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col">
                <p className="text-gray-300 text-sm sm:text-base mb-4 flex-grow break-words">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 justify-end">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors p-1"
                      title="GitHub Repo"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors p-1"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
