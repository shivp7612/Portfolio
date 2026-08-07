import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'About me', href: '#interests' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact Me', href: '#footer' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? (darkMode ? 'glass py-3' : 'bg-[#fcf9f2]/95 backdrop-blur-md border-b border-[#e6dfd3]/80 shadow-sm py-3') 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${
            darkMode ? 'text-zinc-50' : 'text-[#242424] hover:text-[#059669]'
          }`}>
            ST
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
              darkMode 
                ? 'border-white/10 text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]' 
                : 'border-[#e6dfd3] text-[#555555] hover:text-[#059669] hover:bg-[#f4efe6]'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
            darkMode 
              ? 'bg-white/[0.03] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
              : 'bg-[#fffdf9] border-[#e6dfd3] shadow-sm'
          }`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    darkMode 
                      ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]' 
                      : 'text-[#555555] hover:text-[#059669] hover:bg-[#f4efe6]'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${darkMode ? 'text-zinc-400' : 'text-[#555555]'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 md:hidden ${
              darkMode ? 'glass' : 'bg-[#fcf9f2] border-t border-[#e6dfd3] shadow-lg'
            }`}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-[#555555] hover:text-[#059669]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
