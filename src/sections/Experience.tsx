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
    period: 'June 2026 – Present',
    type: 'professional',
    icon: <Briefcase className="text-brand-cyan" size={18} />,
    description: 'Contributed to the development and maintenance of enterprise web applications using the MERN stack, focusing on backend development, API integration, debugging, testing, and production deployments.',
    points: [
      'Developed and maintained scalable applications using React.js, Node.js, Express.js, TypeScript, and MongoDB.',
      'Built and integrated RESTful APIs, optimized database operations, and ensured reliable data flow.',
      'Investigated, debugged, and resolved frontend, backend, API, and database issues through root cause analysis.',
      'Performed functional and end-to-end testing to improve software quality before production releases.',
      'Deployed application updates, managed production environments, and monitored live releases using Hostinger cPanel.',
      'Collaborated with cross-functional teams using Git/GitHub to deliver features, review code, and maintain application stability.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 relative bg-grid-pattern">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />

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
                <div className="relative bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 p-5 md:p-6 rounded-3xl transition-all duration-500 ease-out shadow-lg hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 overflow-hidden group">
                  {/* Corner Glow Overlay */}
                  <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />
                  
                  {/* Timeline Header Area */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 relative z-10">
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300 group-hover:text-brand-cyan">
                        {item.role}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold text-brand-cyan mt-1 font-mono tracking-wide">
                        {item.company}
                      </p>
                    </div>

                    {/* Period badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-cyan/5 dark:bg-brand-cyan/10 border border-brand-cyan/15 dark:border-brand-cyan/20 rounded-full text-[9px] font-mono text-brand-cyan font-semibold self-start md:self-center transition-all duration-300">
                      <Calendar size={12} />
                      {item.period}
                    </div>
                  </div>

                  {/* Core Description Text */}
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10">
                    {item.description}
                  </p>

                  {/* Key achievement bullets */}
                  <div className="flex flex-col gap-2.5 relative z-10">
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
