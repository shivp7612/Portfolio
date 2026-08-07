import { motion } from 'framer-motion';

export default function AnimatedTitle({ text, darkMode, className = "", id }) {
  // Split string into words so we can keep words intact without breaking layout on responsive wraps
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
    },
  };

  return (
    <div id={id} className="flex flex-col items-center mb-12 md:mb-16">
      <motion.h2
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight text-center flex flex-wrap justify-center gap-x-[0.25em] ${
          darkMode ? 'text-zinc-50' : 'text-[#242424]'
        } ${className}`}
      >
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-flex overflow-hidden">
            {Array.from(word).map((char, charIdx) => (
              <motion.span
                variants={child}
                key={charIdx}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        className={`w-20 h-1 mx-auto rounded-full origin-center ${
          darkMode ? 'bg-white/10' : 'bg-[#059669]/30'
        }`}
      />
    </div>
  );
}
