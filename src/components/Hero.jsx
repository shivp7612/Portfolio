import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const roles = ["Software Developer"];

export default function Hero({ darkMode }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && displayText === currentRole) {
      if (roles.length > 1) {
        setTimeout(() => setIsDeleting(true), 2000);
      }
      return;
    }
    
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setDisplayText((prev) => 
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs Removed for Minimalist Look */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Profile Image */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`w-40 h-40 md:w-48 md:h-48 rounded-full border p-2 shadow-2xl relative group transition-colors duration-300 ${
              darkMode ? 'border-white/10 bg-zinc-900/40' : 'border-[#e6dfd3] bg-white'
            }`}
          >
            <div className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center transition-colors duration-300 ${
              darkMode ? 'bg-zinc-950' : 'bg-[#f4efe6]'
            }`}>
              {/* Replace with actual image */}
              <span className={`text-4xl font-bold group-hover:scale-110 transition-transform ${
                darkMode ? 'text-zinc-100' : 'text-[#242424]'
              }`}>ST</span>
            </div>
          </motion.div>

          <div className="space-y-4 max-w-3xl flex flex-col items-center">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`font-medium tracking-wide flex items-center gap-2 transition-colors duration-300 ${
                darkMode ? 'text-zinc-400' : 'text-[#059669]'
              }`}
            >
              HELLO, I'M
            </motion.h2>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-5xl md:text-7xl font-bold tracking-tighter transition-all duration-300 ${
                darkMode ? 'text-gradient' : 'text-[#242424]'
              }`}
            >
              Shivaprasad V Tengli
            </motion.h1>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-2xl md:text-3xl font-light h-10 flex flex-col md:flex-row items-center justify-center gap-3 transition-colors duration-300 ${
                darkMode ? 'text-zinc-400' : 'text-[#555555]'
              }`}
            >
              <div>
                I am a <span className={`font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-[#059669]'
                }`}>{displayText}</span>
              </div>
            </motion.div>


            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-zinc-400' : 'text-[#555555]'
              }`}
            >
              Computer Science Engineering student passionate about full-stack development and building scalable software solutions. Driven by curiosity and continuous learning.
            </motion.p>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/[0.05] text-zinc-100 border-white/10 hover:bg-white/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]' 
                  : 'bg-[#242424] text-white border-transparent hover:bg-[#059669] shadow-md hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <Download size={20} />
              View Resume
            </a>
          </motion.div>


        </div>
      </div>

      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300 ${
          darkMode ? 'text-zinc-500 hover:text-zinc-200' : 'text-[#555555] hover:text-[#059669]'
        }`}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
