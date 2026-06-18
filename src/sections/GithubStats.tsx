import React from 'react';
import { motion } from 'framer-motion';

export const GithubStats: React.FC = () => {
  return (
    <section id="github" className="py-16 md:py-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            GitHub <span className="text-brand-cyan">Profile</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Dashboard Grid Layout - Entire Section Link */}
        <motion.a 
          href="https://github.com/ideveshtripathii" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="block max-w-4xl mx-auto group"
        >
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* GitHub Profile Card */}
            <div className="flex flex-col items-center justify-between text-center p-6 md:p-8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl w-full max-w-md mx-auto shadow-2xl transition-all duration-300 group-hover:border-brand-cyan/30 dark:group-hover:border-brand-cyan/30 group-hover:scale-[1.01]">
              <div className="flex flex-col items-center">
                {/* GitHub Avatar */}
                <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan mb-4 shadow-lg overflow-hidden shrink-0">
                  <img 
                    src="https://github.com/github.png" 
                    alt="GitHub Profile" 
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Devesh Tripathi
                </h3>
                
                {/* Username */}
                <span className="text-xs text-brand-cyan font-mono mt-1 font-semibold">
                  @ideveshtripathii
                </span>
                
                {/* Tagline */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 leading-relaxed max-w-xs font-normal">
                  Explore my projects, code repositories, and development journey on GitHub.
                </p>
              </div>

              {/* View GitHub Profile Button */}
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300">
                  View GitHub Profile
                  <span className="text-xs">→</span>
                </span>
              </div>
            </div>

            {/* Top Languages Card */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl w-full max-w-md mx-auto shadow-2xl transition-all duration-300 group-hover:border-brand-purple/30 dark:group-hover:border-brand-purple/30 group-hover:scale-[1.01]">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ideveshtripathii&layout=compact&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=e2e8f0&icon_color=06b6d4" 
                alt="Devesh's Top Languages" 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

          </div>
        </motion.a>

      </div>
    </section>
  );
};
