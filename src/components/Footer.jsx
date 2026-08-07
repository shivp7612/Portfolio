import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className={`w-full py-10 border-t transition-colors duration-300 mt-20 ${
      darkMode ? 'bg-[#121212] border-white/[0.08]' : 'bg-white border-[#e6dfd3]'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${darkMode ? 'text-zinc-50' : 'text-[#242424]'}`}>
            Shivaprasad
          </span>
          <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-zinc-400' : 'text-[#555555]'}`}>
            Software Developer
          </p>
        </div>

        <div className={`flex items-center gap-1 transition-colors duration-300 text-sm ${darkMode ? 'text-zinc-400' : 'text-[#555555]'}`}>
          <MapPin size={16} className={`transition-colors duration-300 ${darkMode ? 'text-zinc-400' : 'text-[#059669]'}`} />
          <span>Bengaluru, Karnataka</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="http://github.com/shivp7612" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 p-2 rounded-full ${
            darkMode ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]' : 'text-[#555555] hover:text-[#059669] hover:bg-[#f4efe6]'
          }`}>
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shivaprasad-tengli-29aa32388" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 p-2 rounded-full ${
            darkMode ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]' : 'text-[#555555] hover:text-[#059669] hover:bg-[#f4efe6]'
          }`}>
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:shivaprasadtengli39@gmail.com" className={`transition-colors duration-300 p-2 rounded-full ${
            darkMode ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]' : 'text-[#555555] hover:text-[#059669] hover:bg-[#f4efe6]'
          }`}>
            <Mail size={20} />
          </a>
          <a href="tel:8088855589" className={`flex items-center gap-2 transition-colors duration-300 p-2 rounded-full ${
            darkMode ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]' : 'text-[#555555] hover:text-[#059669] hover:bg-[#f4efe6]'
          }`}>
            <Phone size={20} />
            <span className="text-sm font-medium">8088855589</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
