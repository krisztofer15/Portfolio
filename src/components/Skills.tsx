import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Git", category: "tools" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#0d1117] overflow-hidden">
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
            <span className="text-blue-400 font-medium text-sm sm:text-base">Technológiák</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            Tech Stack & Képességek
          </motion.h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              className={`bg-[#0f141e] p-3 sm:p-4 rounded-lg shadow-sm border border-[#1a2233] transition-all duration-300 w-full`}
            >
              <div className="text-center">
                <div className="h-6 sm:h-8 flex items-center justify-center mb-1 sm:mb-2">
                  <span className="text-blue-400 text-xs sm:text-sm font-medium">{skill.category}</span>
                </div>
                <p className="text-white text-sm sm:text-base font-semibold break-words">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
