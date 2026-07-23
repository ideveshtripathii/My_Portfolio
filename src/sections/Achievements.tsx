import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Cpu, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Achievement {
  title: string;
  metric: string;
  sub: string;
  details: string;
  icon: React.ReactNode;
  color: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'Postgrad Academic standing',
    metric: '8.0 SGPA',
    sub: 'MCA Class of 2026',
    details: 'Mastering algorithms, software architecture, and system engineering principles at BBD University.',
    icon: <GraduationCap size={22} />,
    color: 'indigo',
  },
  {
    title: 'Full Stack Web Development',
    metric: '100xDevs Cohort 3',
    sub: 'Certified July 2024',
    details: 'Completed hands-on training in full-stack application development using modern JavaScript, React.js, Node.js, backend architecture, REST APIs, database management, and scalable web applications.',
    icon: <Award size={22} />,
    color: 'purple',
  },
  {
    title: 'AI Architectures',
    metric: 'Gemini + Vectors',
    sub: 'Production Ready RAG',
    details: 'Engineered search workflows using Gemini text/image APIs, MongoDB vector stores, and custom semantic indexing.',
    icon: <Cpu size={22} />,
    color: 'cyan',
  },
  {
    title: 'Real-time Engines',
    metric: 'Sub-100ms streaming',
    sub: 'WebSockets & Redis',
    details: 'Designed event-driven chat triggers, cache-aside optimization layers, and Stripe webhook transaction processes.',
    icon: <Zap size={22} />,
    color: 'purple',
  },
];

export const Achievements: React.FC = () => {
  const triggerConfetti = (color: string) => {
    let colors = ['#5E6AD2', '#8A94E5', '#38BDF8'];
    if (color === 'indigo') colors = ['#5E6AD2', '#4F46E5'];
    if (color === 'purple') colors = ['#8A94E5', '#A5B4FC'];
    if (color === 'cyan') colors = ['#38BDF8', '#0EA5E9'];

    confetti({
      particleCount: 120,
      spread: 70,
      colors: colors,
      origin: { y: 0.7 },
    });
  };

  return (
    <section id="achievements" className="py-16 md:py-20 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Key <span className="text-brand-cyan">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
          <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mt-4">
            Click cards to celebrate milestones!
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => triggerConfetti(item.color)}
              className="relative p-5 md:p-6 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col md:flex-row gap-6 items-start md:items-center cursor-pointer select-none group overflow-hidden"
            >
              {/* Corner Glow Overlay */}
              <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

              {/* Icon Container with glowing borders */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan transition-transform duration-300 group-hover:scale-110 relative z-10">
                {item.icon}
              </div>

              {/* Text / Metric Description */}
              <div className="flex-1 text-left relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white font-sans tracking-tight transition-colors duration-300 group-hover:text-brand-cyan">
                    {item.metric}
                  </h3>
                  <span className="text-[9px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-brand-cyan/5 dark:bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/15 dark:border-brand-cyan/20 transition-all duration-300 self-start sm:self-center">
                    {item.sub}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider font-mono">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
