import { motion } from 'framer-motion';
import { ExternalLink, Activity, Leaf, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import AnimatedTitle from './AnimatedTitle';

const projects = [
  {
    title: "Real-Time Exercise Posture Correction & Injury Risk Detection",
    description: "Developed an AI-powered posture correction system using computer vision. Calculated body joint angles in real time to analyze exercise form, detect posture errors, and provide live corrective feedback with repetition counting.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    icon: <Activity size={32} className="text-current" />,
    links: {
      github: "https://github.com/shivp7612/AI_GYM_Trainer"
    },
    color: "from-white/[0.03] to-transparent"
  },
  {
    title: "Agricultural Chatbot",
    description: "Built an AI chatbot to assist farmers with crop, soil, fertilizer, and weather-related queries. Integrated NLP techniques to understand user queries and connected weather APIs to provide real-time agricultural recommendations.",
    tech: ["Python", "NLP", "REST API"],
    icon: <Leaf size={32} className="text-current" />,
    links: {
      github: "https://github.com/prxnxv07/Agri-Bot"
    },
    color: "from-white/[0.03] to-transparent"
  },
  {
    title: "Glass-Box Browsing Companion",
    description: "Developed a context-aware browser assistant using a Chrome Extension and Python FastAPI backend to provide real-time webpage assistance. Implemented webpage context extraction to analyze content from the active browser tab. Integrated Google Gemini 2.5 Flash and built an interactive browser side-panel using JavaScript, HTML, and CSS for AI-assisted browsing.",
    tech: ["Python", "FastAPI", "JavaScript", "Chrome Extension"],
    icon: <Globe size={32} className="text-current" />,
    links: {
      github: "https://github.com/shivp7612/Glass-Box-Browsing-Companion"
    },
    color: "from-white/[0.03] to-transparent"
  }
];

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <AnimatedTitle text="What I've Built" darkMode={darkMode} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`group flex flex-col h-full overflow-hidden transition-all duration-300 ${
                darkMode ? 'glass-card' : 'bg-white border border-[#e6dfd3] hover:bg-[#fffdf9] shadow-sm hover:shadow-md'
              }`}
            >
              <div className={`h-32 flex items-center justify-center relative overflow-hidden bg-gradient-to-b transition-colors duration-300 ${
                darkMode ? project.color : 'from-[#f4efe6] to-transparent'
              }`}>
                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 transition-all duration-300 ${
                    darkMode ? 'bg-zinc-950 border border-white/10 shadow-lg text-zinc-300' : 'bg-white border border-[#e6dfd3] shadow-sm text-[#059669]'
                  }`}
                >
                  {project.icon}
                </motion.div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-zinc-100 group-hover:text-white' : 'text-[#242424] group-hover:text-[#059669]'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 flex-1 text-sm md:text-base transition-colors duration-300 ${
                  darkMode ? 'text-zinc-400' : 'text-[#555555]'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                        darkMode ? 'text-zinc-300 bg-white/[0.03] border-white/10' : 'text-[#555555] bg-[#f4efe6] border-[#e6dfd3]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={`flex items-center gap-4 pt-4 border-t transition-colors duration-300 ${
                  darkMode ? 'border-white/5' : 'border-[#e6dfd3]'
                }`}>
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                        darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-[#555555] hover:text-[#059669]'
                      }`}
                    >
                      <GithubIcon size={18} />
                      Code
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ml-auto ${
                        darkMode ? 'text-zinc-100 hover:text-white' : 'text-[#242424] hover:text-[#059669]'
                      }`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
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
