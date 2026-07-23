import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Briefcase, Sparkles } from 'lucide-react';

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
    <section id="about" className="py-16 md:py-20 relative overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] rounded-full bg-brand-cyan/10 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />

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
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Bio Details */}
          <motion.div className="flex flex-col items-start text-left" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              Full Stack MERN & AI Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Hi, I'm Devesh Tripathi, a Full Stack MERN & AI Developer who enjoys building modern web applications from idea to deployment. I specialize in creating responsive frontends, scalable backend systems, and AI-powered features using React, Node.js, TypeScript, MongoDB, Redis, and modern development tools.

              During my internship at Navigant Technologies, I gained hands-on experience working on real-world applications, backend APIs, debugging, testing, and collaborating with developers. These experiences helped me understand how production software is built and maintained.

              I'm passionate about learning new technologies, solving challenging problems, and building products that deliver a great user experience. Whether working with a team or directly with clients, my goal is to create reliable, scalable, and high-quality software.
            </p>

            {/* Academic Journey Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {/* MCA card */}
              <div
                className="relative p-5 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out flex gap-4 shadow-lg overflow-hidden group"
              >
                {/* Corner Glow Overlay */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 transition-transform duration-300 group-hover:scale-110 relative z-10">
                  <GraduationCap size={20} />
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-brand-cyan block uppercase">2024 - 2026</span>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white mt-1 transition-colors duration-300 group-hover:text-brand-cyan">Master of Computer Applications</h4>
                  <p className="text-xs text-gray-500 mt-1">BBD University, Lucknow</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 bg-brand-cyan/5 dark:bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/15 dark:border-brand-cyan/20 rounded-full text-[9px] font-mono font-semibold transition-all duration-300">SGPA: 8.0</span>
                </div>
              </div>

              {/* BCA card */}
              <div
                className="relative p-5 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out flex gap-4 shadow-lg overflow-hidden group"
              >
                {/* Corner Glow Overlay */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 transition-transform duration-300 group-hover:scale-110 relative z-10">
                  <BookOpen size={18} />
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-brand-cyan block uppercase">2021 - 2024</span>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white mt-1 transition-colors duration-300 group-hover:text-brand-cyan">Bachelor of Computer Applications</h4>
                  <p className="text-xs text-gray-500 mt-1">Microtek College, Varanasi</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 bg-brand-cyan/5 dark:bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/15 dark:border-brand-cyan/20 rounded-full text-[9px] font-mono font-semibold transition-all duration-300">Score: 75%</span>
                </div>
              </div>
            </div>

            {/* Quick stats counter grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full py-8 border-t border-black/10 dark:border-white/10">

              {/* Stat 1: Production Projects */}
              <div
                className="relative group p-5 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between min-h-[120px] overflow-hidden"
              >
                {/* Decorative glow behind */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

                <div className="flex justify-between items-start relative z-10">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-cyan tracking-tight font-sans">
                    4+
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                    <Briefcase size={16} />
                  </div>
                </div>

                <div className="mt-4 relative z-10">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold font-mono">
                    Production Projects
                  </p>
                </div>
              </div>

              {/* Stat 2: Web Developer Intern */}
              <div
                className="relative group p-5 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between min-h-[120px] overflow-hidden"
              >
                {/* Decorative glow behind */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

                <div className="flex justify-between items-start gap-2 relative z-10">
                  <span className="text-[14px] sm:text-[15px] font-extrabold text-brand-cyan tracking-tight font-sans leading-tight uppercase">
                    Web Developer<br />Intern
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                    <Briefcase size={16} />
                  </div>
                </div>

                <div className="mt-3 relative z-10">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold font-mono truncate">
                    Navigant Technologies
                  </p>
                  <p className="text-[9px] text-brand-cyan font-mono mt-0.5 font-semibold">
                    Jun 2026 – Present
                  </p>
                </div>
              </div>

              {/* Stat 3: Specializations */}
              <div
                className="relative group p-5 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between min-h-[120px] overflow-hidden"
              >
                {/* Decorative glow behind */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

                <div className="flex justify-between items-start gap-2 relative z-10">
                  <span className="text-sm sm:text-base font-extrabold text-brand-cyan tracking-tight font-sans leading-tight uppercase">
                    Specializations
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                    <Sparkles size={16} />
                  </div>
                </div>

                <div className="mt-3 flex flex-col gap-0.5 text-left relative z-10">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold font-mono">
                    • Full Stack Development
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold font-mono">
                    • AI Integration
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold font-mono">
                    • REST API Development
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold font-mono">
                    • Database Design
                  </p>
                </div>
              </div>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
