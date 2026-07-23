import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from '../components/SocialIcons';

export const GithubStats: React.FC = () => {
  return (
    <section id="github" className="py-16 md:py-20 relative overflow-hidden bg-grid-pattern">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />

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

        {/* Dashboard Layout - Entire Section Link */}
        <motion.a 
          href="https://github.com/ideveshtripathii" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="block max-w-md mx-auto group"
        >
          {/* GitHub Profile Card */}
          <div className="relative flex flex-col items-center justify-between text-center p-5 md:p-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl w-full transition-all duration-500 ease-out shadow-lg group-hover:-translate-y-2 group-hover:border-brand-cyan/40 group-hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] overflow-hidden">
            {/* Corner Glow Overlay */}
            <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

            <div className="flex flex-col items-center relative z-10">
              {/* GitHub Icon */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan mb-4 shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-110">
                <GithubIcon size={40} />
              </div>
              
              {/* Name */}
              <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300 group-hover:text-brand-cyan">
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
            <div className="mt-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:shadow-[0_4px_15px_rgba(94,106,210,0.25)] hover:scale-[1.03]">
                View GitHub Profile
                <span className="text-xs">→</span>
              </span>
            </div>
          </div>
        </motion.a>

      </div>
    </section>
  );
};
