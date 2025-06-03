import { motion } from "framer-motion";
import { Mail, User, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000); // Üzenet eltűnik 4 mp után
  };

  return (
    <section id="contact" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-blue-500/10 px-3 py-1 rounded-full mb-4"
          >
            <span className="text-blue-400 font-medium">Írj nekem</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Kapcsolat
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f141e] border border-[#1a2233] p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/0 opacity-0 group-focus-within:opacity-100 rounded-lg transition-opacity duration-300"></div>
                <User className="absolute left-3 top-3 text-blue-400 w-5 h-5" />
                <input
                  type="text"
                  required
                  placeholder="Neved"
                  className="pl-10 pr-4 py-3 w-full bg-[#0d1117] border border-[#1a2233] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all z-10 relative"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/0 opacity-0 group-focus-within:opacity-100 rounded-lg transition-opacity duration-300"></div>
                <Mail className="absolute left-3 top-3 text-blue-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  placeholder="Email címed"
                  className="pl-10 pr-4 py-3 w-full bg-[#0d1117] border border-[#1a2233] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all z-10 relative"
                />
              </div>
            </div>

            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/0 opacity-0 group-focus-within:opacity-100 rounded-lg transition-opacity duration-300"></div>
              <MessageCircle className="absolute left-3 top-3 text-blue-400 w-5 h-5" />
              <textarea
                required
                placeholder="Üzeneted..."
                rows={5}
                className="pl-10 pr-4 py-3 w-full bg-[#0d1117] border border-[#1a2233] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none z-10 relative"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Küldés</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
              >
                <p className="text-center text-green-400 font-medium">
                  ✓ Köszönöm az üzenetet! Hamarosan válaszolok.
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
