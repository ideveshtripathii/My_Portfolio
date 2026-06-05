import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Server, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: 'academic' | 'training' | 'seeking';
  icon: React.ReactNode;
  description: string;
  points: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: 'Full Stack & AI Engineer Opportunities',
    company: 'Available for Relocation / Remote',
    period: 'Present',
    type: 'seeking',
    icon: <Sparkles className="text-brand-cyan" size={18} />,
    description: 'Currently seeking Full Stack Developer, Backend Developer, and AI Engineer opportunities. Actively refining my systems knowledge, testing new LLM integrations, and preparing to build high-performance software within a collaborative engineering team.',
    points: [
      'Available for full-time employment from May 2026 onwards',
      'Target roles: Full Stack Developer (MERN), Backend Engineer, AI Engineer',
      'Proficient in modern CI/CD, microservices patterns, Docker containerization, and AWS hosting',
    ],
  },
  {
    role: '100xDevs Cohort 3 Graduate',
    company: 'Full Stack Web Development & DevOps Program',
    period: 'Jul 2024 - Dec 2024',
    type: 'training',
    icon: <Server className="text-brand-purple" size={18} />,
    description: 'Completed intensive 6-month developer accelerator covering advanced architectural patterns, real-time networking, caching layers, and production deployments.',
    points: [
      'Mastered asynchronous message streams using Socket.io and Pub/Sub architectures',
      'Engineered cache-aside layers using Redis to resolve bottleneck queries',
      'Configured secure payments via Stripe checkouts and automatic webhook processing',
    ],
  },
  {
    role: 'Master of Computer Applications (MCA)',
    company: 'Babu Banarasi Das University, Lucknow',
    period: 'Sep 2024 - May 2026',
    type: 'academic',
    icon: <GraduationCap className="text-brand-indigo" size={18} />,
    description: 'Advanced study of software engineering principles, algorithms, cloud computing, database optimization, and machine learning models.',
    points: [
      'Maintained academic focus in system engineering and database indexing',
      'Achieved a strong academic standing with an SGPA score of 8.0',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-grid-pattern">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

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
                <div className={`absolute -left-[30px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border z-10 shadow-md ${
                  item.type === 'seeking'
                    ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan'
                    : item.type === 'training'
                    ? 'bg-brand-purple/15 border-brand-purple text-brand-purple'
                    : 'bg-brand-indigo/15 border-brand-indigo text-brand-indigo'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    item.type === 'seeking'
                      ? 'bg-brand-cyan animate-pulse'
                      : item.type === 'training'
                      ? 'bg-brand-purple'
                      : 'bg-brand-indigo'
                  }`} />
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
