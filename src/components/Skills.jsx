import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Brain, Users } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const technicalSkills = [
  {
    title: "Languages",
    icon: <Code2 size={24} />,
    color: "text-zinc-300",
    skills: ["C++", "Python", "Java", "SQL"]
  },
  {
    title: "Web Development",
    icon: <Monitor size={24} />,
    color: "text-zinc-300",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
  },
  {
    title: "Developer Tools",
    icon: <Server size={24} />,
    color: "text-zinc-300",
    skills: ["VS Code", "Git", "GitHub"]
  }
];

const otherSkills = [
  {
    title: "Soft Skills",
    icon: <Users size={24} />,
    color: "text-zinc-300",
    skills: ["Problem Solving", "Team Collaboration", "Logical Thinking", "Communication"]
  },
  {
    title: "Areas of Interest",
    icon: <Brain size={24} />,
    color: "text-zinc-300",
    skills: ["Artificial Intelligence", "Machine Learning", "Web Development", "Data Structures & Algorithms"]
  }
];

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Technical Skills Section */}
        <AnimatedTitle text="Technical Skills" darkMode={darkMode} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technicalSkills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 flex flex-col h-full transition-all duration-300 ${
                darkMode ? 'glass-card hover:bg-zinc-900/50' : 'bg-white border border-[#e6dfd3] hover:bg-[#fffdf9] shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  darkMode ? 'bg-zinc-950 border border-white/10 text-zinc-300' : 'bg-[#f4efe6] border border-[#e6dfd3] text-[#059669]'
                }`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold transition-colors duration-300 ${darkMode ? 'text-zinc-100' : 'text-[#242424]'}`}>{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 cursor-default rounded-lg border ${
                      darkMode 
                        ? 'text-zinc-300 bg-white/[0.03] border-white/10 hover:border-white/20 hover:text-zinc-100 hover:bg-white/[0.05]' 
                        : 'text-[#242424] bg-[#f4efe6] border-[#e6dfd3] hover:border-[#059669] hover:text-[#059669] hover:bg-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Interests Section */}
        <AnimatedTitle id="interests" text="Interests" darkMode={darkMode} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {otherSkills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 flex flex-col h-full transition-all duration-300 ${
                darkMode ? 'glass-card hover:bg-zinc-900/50' : 'bg-white border border-[#e6dfd3] hover:bg-[#fffdf9] shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  darkMode ? 'bg-zinc-950 border border-white/10 text-zinc-300' : 'bg-[#f4efe6] border border-[#e6dfd3] text-[#059669]'
                }`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold transition-colors duration-300 ${darkMode ? 'text-zinc-100' : 'text-[#242424]'}`}>{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 cursor-default rounded-lg border ${
                      darkMode 
                        ? 'text-zinc-300 bg-white/[0.03] border-white/10 hover:border-white/20 hover:text-zinc-100 hover:bg-white/[0.05]' 
                        : 'text-[#242424] bg-[#f4efe6] border-[#e6dfd3] hover:border-[#059669] hover:text-[#059669] hover:bg-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
