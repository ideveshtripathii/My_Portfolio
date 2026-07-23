import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cpu } from 'lucide-react';

interface TechGroup {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'purple' | 'indigo';
  skills: string[];
}

const techGroups: TechGroup[] = [
  {
    title: 'Frontend & Programming',
    description: 'Building modern, responsive, and performance-optimized client-side interfaces and systems.',
    icon: <Code2 size={18} />,
    color: 'cyan',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Tailwind CSS', 'Context API', 'React Router', 'HTML5 & CSS3', 'Responsive Web Design'],
  },
  {
    title: 'Backend & Systems',
    description: 'Designing secure, scalable REST APIs, robust authentication layers, and backend services.',
    icon: <Server size={18} />,
    color: 'purple',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io', 'JWT Authentication', 'MVC Architecture', 'API Integration', 'Java'],
  },
  {
    title: 'Database & Caching',
    description: 'Designing database schemas, optimizing queries with indexing, and managing Redis caching.',
    icon: <Database size={18} />,
    color: 'indigo',
    skills: ['MongoDB', 'Mongoose', 'Database Design', 'Indexing', 'Redis'],
  },
  {
    title: 'Tools & Technologies',
    description: 'Integrating external services, payment gateways, authentication providers, and managing deployments.',
    icon: <Cpu size={18} />,
    color: 'cyan',
    skills: ['Gemini API', 'Stripe API', 'Clerk', 'bcryptjs', 'Vercel', 'Hostinger cPanel', 'Git & GitHub', 'Postman'],
  },
];

export const TechStack: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-20 relative bg-grid-pattern overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none" />

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
            Technical <span className="text-brand-purple">Stack</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 2x2 Bento Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {techGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="relative group p-4 md:p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden shadow-md hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-[0_15px_30px_rgba(94,106,210,0.12)]"
            >
              {/* Corner Glow Overlay */}
              <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan transition-transform duration-300 group-hover:scale-110 relative z-10">
                    {group.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300 group-hover:text-brand-cyan relative z-10">
                    {group.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed relative z-10">
                  {group.description}
                </p>
              </div>

              {/* Skills Pills Flow */}
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-brand-cyan/5 dark:bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/15 dark:border-brand-cyan/20 rounded-lg text-[10px] font-semibold transition-all duration-300 hover:bg-brand-cyan/10 hover:border-brand-cyan/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
