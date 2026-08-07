import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const education = [
  {
    institution: "RV Institute of Technology and Management (RVITM)",
    degree: "B.E in Computer Science and Engineering • Bengaluru",
    score: "CGPA • 7.72/10",
    badge: "GRADUATING 2027",
    icon: <GraduationCap className="text-current" size={32} />
  },
  {
    institution: "Chimalgi PU College",
    degree: "Class XII • Kalaburagi",
    badge: "2021 – 2023",
    icon: <span className="text-3xl">📚</span>
  },
  {
    institution: "Kenbridge School",
    degree: "Class X (CBSE) • Kalaburagi",
    badge: "2019 – 2021",
    icon: <span className="text-3xl">🏫</span>
  }
];

export default function About({ darkMode }) {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        
        <AnimatedTitle text="Education" darkMode={darkMode} />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-6">
            {education.map((item, idx) => (
              <div 
                key={idx} 
                className={`w-full p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 ${
                  darkMode ? 'glass-card hover:bg-zinc-900/40' : 'bg-white border border-[#e6dfd3] hover:bg-[#fffdf9] shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start md:items-center gap-6 w-full md:w-auto">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 ${
                    darkMode ? 'bg-zinc-950 border border-white/10 text-zinc-300' : 'bg-[#f4efe6] border border-[#e6dfd3] text-[#059669]'
                  }`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <h4 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-zinc-100' : 'text-[#242424]'}`}>{item.institution}</h4>
                    <p className={`text-sm md:text-base transition-colors duration-300 ${darkMode ? 'text-zinc-400' : 'text-[#555555]'}`}>{item.degree}</p>
                    {item.score && (
                      <p className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${darkMode ? 'text-zinc-300' : 'text-[#059669]'}`}>
                        {item.score}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mt-2 md:mt-0 md:shrink-0 self-end md:self-center">
                  <span className={`px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    darkMode ? 'border-white/10 text-zinc-400 bg-white/[0.03]' : 'border-[#e6dfd3] text-[#555555] bg-[#f4efe6]'
                  }`}>
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
