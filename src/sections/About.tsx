import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, Briefcase, Award, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile_images.png';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Glow Blur decoration */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            About <span className="text-brand-indigo">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column: Image with frame */}
          <motion.div className="lg:col-span-5 flex justify-center" variants={itemVariants}>
            <div className="relative group max-w-[340px] w-full">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo to-brand-cyan rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden aspect-square border border-black/10 dark:border-white/10 shadow-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl flex items-center justify-center p-3">
                <img
                  src={profileImg}
                  alt="Devesh Tripathi"
                  className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Tag Floating on Frame */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-brand-indigo to-brand-purple rounded-xl border border-white/10 shadow-lg text-[11px] font-mono text-white flex items-center gap-1.5 font-semibold">
                <MapPin size={12} className="text-brand-cyan" />
                Open to Relocation
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details */}
          <motion.div className="lg:col-span-7 flex flex-col items-start text-left" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              AI Full Stack MERN Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm Devesh Tripathi, an MCA candidate and AI Full Stack MERN Developer passionate about building scalable SaaS platforms, intelligent web applications, and high-performance backend systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              My journey combines intensive full-stack training with real-world project development, including 3+ deployed applications featuring AI integrations, real-time systems, secure authentication, payment processing, and scalable backend architectures.
            </p>

            {/* Academic Journey Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {/* MCA card */}
              <motion.div 
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-indigo/30 dark:hover:border-brand-indigo/30 transition-all flex gap-4 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-cyan block uppercase">2024 - 2026</span>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white mt-1">MCA</h4>
                  <p className="text-xs text-gray-500 mt-1">BBD University, Lucknow</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-brand-indigo/10 rounded-md text-[10px] font-mono text-brand-indigo">SGPA: 8.0</span>
                </div>
              </motion.div>

              {/* BCA card */}
              <motion.div 
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-purple/30 dark:hover:border-brand-purple/30 transition-all flex gap-4 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-purple block uppercase">2022 - 2024</span>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white mt-1">BCA</h4>
                  <p className="text-xs text-gray-500 mt-1">Microtek College, Varanasi</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-brand-purple/10 rounded-md text-[10px] font-mono text-brand-purple">Score: 75%</span>
                </div>
              </motion.div>
            </div>

            {/* Quick stats counter grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full py-8 border-t border-black/10 dark:border-white/10">
              
              {/* Stat 1: Production Projects */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 dark:hover:border-brand-cyan/40 hover:shadow-[0_10px_25px_rgba(6,182,212,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[120px] overflow-hidden"
              >
                {/* Decorative glow behind */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-brand-cyan/5 blur-xl group-hover:bg-brand-cyan/15 transition-all duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan to-transparent opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="flex justify-between items-start">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-cyan tracking-tight font-sans">
                    3+
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                    <Briefcase size={16} />
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold font-mono">
                    Production Projects
                  </p>
                </div>
              </motion.div>

              {/* Stat 2: Cohort 3 */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-indigo/40 dark:hover:border-brand-indigo/40 hover:shadow-[0_10px_25px_rgba(99,102,241,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[120px] overflow-hidden"
              >
                {/* Decorative glow behind */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-brand-indigo/5 blur-xl group-hover:bg-brand-indigo/15 transition-all duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-indigo to-transparent opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="flex justify-between items-start">
                  <span className="text-xl sm:text-2xl font-extrabold text-brand-indigo tracking-tight font-sans whitespace-nowrap">
                    100xDevs
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                    <Award size={16} />
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold font-mono">
                    Cohort 3
                  </p>
                </div>
              </motion.div>

              {/* Stat 3: Mern Developer */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-purple/40 dark:hover:border-brand-purple/40 hover:shadow-[0_10px_25px_rgba(139,92,246,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[120px] overflow-hidden"
              >
                {/* Decorative glow behind */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-brand-purple/5 blur-xl group-hover:bg-brand-purple/15 transition-all duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-transparent opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="flex justify-between items-start">
                  <span className="text-[15px] sm:text-[16px] md:text-lg lg:text-xl font-extrabold text-brand-purple tracking-tight font-sans leading-snug">
                    AI Full Stack
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                    <Sparkles size={16} />
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold font-mono">
                    MERN Developer
                  </p>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
