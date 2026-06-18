import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: 'professional';
  icon: React.ReactNode;
  description: string;
  points: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: 'Web Developer Intern',
    company: 'Navigant Technologies',
    period: 'Jun 2026 – Present',
    type: 'professional',
    icon: <Briefcase className="text-brand-cyan" size={18} />,
    description: 'Contributing to full-stack web application development using React.js, Node.js, Express.js, MongoDB, and TypeScript. Assisting with backend APIs, database management, quality assurance testing, and team coordination.',
    points: [
      'Contributing to full-stack web application development using React.js, Node.js, Express.js, MongoDB, and TypeScript',
      'Assisting in backend API development and database management',
      'Participating in testing, debugging, and issue resolution to improve application quality',
      'Collaborating with team members using Git and GitHub to deliver project requirements',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 relative bg-grid-pattern">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/3 blur-[120px] pointer-events-none" />

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
            Professional <span className="text-brand-indigo">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Experience Timeline Grid */}
        <div className="max-w-4xl mx-auto relative pl-6 md:pl-10">
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-[7px] md:left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-indigo/10 rounded-full" />

          {/* Cards Loop */}
          <div className="flex flex-col gap-10">
            {experienceData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                
                {/* Timeline node dot indicator */}
                <div className="absolute -left-[30px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border border-brand-cyan z-10 shadow-md bg-brand-cyan/15 text-brand-cyan">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                </div>

                {/* Main Card Content */}
                <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 p-6 md:p-8 rounded-3xl shadow-xl">
                  
                  {/* Timeline Header Area */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold text-brand-cyan mt-1 font-mono tracking-wide">
                        {item.company}
                      </p>
                    </div>

                    {/* Period badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[10px] font-mono text-gray-500 dark:text-gray-400 font-semibold self-start md:self-center">
                      <Calendar size={12} />
                      {item.period}
                    </div>
                  </div>

                  {/* Core Description Text */}
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key achievement bullets */}
                  <div className="flex flex-col gap-2.5">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-1.5" />
                        <span className="leading-relaxed font-normal">{pt}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
