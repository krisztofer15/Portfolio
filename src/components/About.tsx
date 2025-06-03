import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0d1117] overflow-hidden">
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
            <span className="text-blue-400 font-medium text-sm sm:text-base">Ismerj meg</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            Rólam
          </motion.h2>
        </div>
        
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
            Helló! Kóczé Krisztofer vagyok
          </h3>
          
          <p className="text-gray-300 text-base sm:text-lg">
            Szenvedélyes junior fejlesztő vagyok, akit lenyűgöz a modern webfejlesztés és UI design világa.
            Folyamatosan új technológiákat tanulok, és valós projekteken keresztül fejlesztem tudásomat.
            Célom, hogy olyan alkalmazásokat hozzak létre, amelyek nemcsak jól működnek, hanem öröm használni is őket.
          </p>
        </motion.div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0f141e] p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-blue-900/10 hover:translate-y-[-3px] transition-all duration-300 w-full"
          >
            <div className="text-center">
              <div className="bg-blue-500/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-blue-400 text-base sm:text-lg font-bold">#1</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Technológiák</h4>
              <div className="space-y-1 text-gray-300 text-xs sm:text-sm">
                <p>React, Next.js</p>
                <p>Tailwind CSS</p>
                <p>Node.js</p>
                <p>Supabase</p>
              </div>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0f141e] p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-blue-900/10 hover:translate-y-[-3px] transition-all duration-300 w-full"
          >
            <div className="text-center">
              <div className="bg-blue-500/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-blue-400 text-base sm:text-lg font-bold">#2</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Tanulmányok</h4>
              <p className="text-gray-300 text-xs sm:text-sm">
                Informatikai mérnök, folyamatos önképzés és szakmai fejlődés a legújabb technológiákban.
              </p>
            </div>
          </motion.div>
          
          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#0f141e] p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-blue-900/10 hover:translate-y-[-3px] transition-all duration-300 w-full"
          >
            <div className="text-center">
              <div className="bg-blue-500/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-blue-400 text-base sm:text-lg font-bold">#3</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Célom</h4>
              <p className="text-gray-300 text-xs sm:text-sm">
                Olyan webalkalmazások fejlesztése, amelyek egyszerűek, hatékonyak és felhasználóbarátok. Szeretnék egy olyan csapatban dolgozni, ahol folyamatosan fejlődhetek.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
