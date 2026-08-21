import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { SparklesCore } from './components/ui/sparkles';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.style.backgroundColor = '#0d0d0d';
      document.body.style.color = '#e4e4e7';
    } else {
      document.body.style.backgroundColor = '#fcf9f2';
      document.body.style.color = '#242424';
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      darkMode 
        ? "bg-gradient-to-b from-[#333333] via-[#1c1c1c] to-[#0d0d0d] text-zinc-100 selection:bg-white/20" 
        : "bg-[#fcf9f2] text-[#242424] selection:bg-[#059669]/20"
    }`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        
        {/* Background Sparkles for sections below Hero */}
        <div className="relative">
          <div className={`absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ${darkMode ? 'opacity-50' : 'opacity-100'}`}>
             <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={darkMode ? 0.6 : 0.8}
                maxSize={darkMode ? 1.4 : 2.0}
                particleDensity={darkMode ? 100 : 150}
                className="w-full h-full"
                particleColor={darkMode ? "#FFFFFF" : "#059669"}
                speed={1}
              />
          </div>
          
          <div className="relative z-10">
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
          </div>
        </div>
      </main>
      
      <div className="relative z-10">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
