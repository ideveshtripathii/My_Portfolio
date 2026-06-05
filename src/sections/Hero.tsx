import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send } from 'lucide-react';
import profileImg from '../assets/profile_images.png';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-brand-indigo/10 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={childVariants}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand-indigo/20 text-xs font-semibold tracking-wide text-brand-cyan mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            Open for Developer Opportunities • MCA 2026
          </motion.div>

          {/* Heading Name */}
          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-slate-900 dark:text-white"
          >
            Devesh Tripathi
          </motion.h1>

          {/* Professional Title */}
          <motion.h2
            variants={childVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan bg-clip-text text-transparent"
          >
            AI Full Stack MERN Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed"
          >
            Building intelligent SaaS platforms, AI-powered applications, and scalable backend architectures that power exceptional digital experiences.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan text-white font-bold rounded-xl shadow-lg hover:shadow-brand-indigo/25 hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              View Projects
              <ArrowRight size={18} />
            </button>

            <a
              href="./Devesh_Tripathi_Full Stack_MERN_Developer.pdf"
              download="Devesh_Tripathi_Full_Stack_MERN_Developer.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              Download Resume
              <Download size={18} />
            </a>

            <button
              onClick={() => handleScrollTo('#contact')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-brand-indigo/30 hover:bg-brand-indigo hover:border-brand-indigo text-brand-indigo dark:text-brand-cyan hover:text-white font-semibold rounded-xl hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              Contact Me
              <Send size={16} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Interactive Visual Column */}
        <div className="lg:col-span-5 relative w-full h-[400px] flex items-center justify-center mt-10 lg:mt-0 select-none">
          
          {/* Main Visual Container: Large circular image frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center"
          >
            {/* Glowing Photo frame */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan p-[3px] glow-indigo flex items-center justify-center animate-bounce-slow">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-[#0A0A0A] overflow-hidden border-[4px] border-slate-200 dark:border-[#0A0A0A] flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Devesh Tripathi"
                  className="w-full h-full object-cover object-top rounded-full"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Interactive glow nodes surrounding the main card */}
          <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-brand-cyan/20 blur-[2px] animate-ping" />
          <div className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-brand-purple/30 blur-[1px] animate-pulse" />
        </div>

      </div>
    </section>
  );
};
