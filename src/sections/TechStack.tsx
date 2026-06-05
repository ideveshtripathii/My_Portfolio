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
    title: 'Frontend & Client',
    description: 'Building highly interactive, typed, and performance-optimized client-side interfaces.',
    icon: <Code2 size={22} />,
    color: 'cyan',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'Context API'],
  },
  {
    title: 'Backend & Systems',
    description: 'Designing secure, scalable APIs, structured MVC patterns, and robust authentication layers.',
    icon: <Server size={22} />,
    color: 'purple',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture', 'JWT Auth', 'Clerk Auth'],
  },
  {
    title: 'Real-Time & Databases',
    description: 'Managing scalable schemas, database index optimization, Redis caching, and bi-directional message streams.',
    icon: <Database size={22} />,
    color: 'indigo',
    skills: ['MongoDB', 'Mongoose', 'Database Indexing', 'Redis Caching', 'Socket.io (WebSockets)'],
  },
  {
    title: 'AI & Integrations',
    description: 'Integrating LLMs, semantic vector embeddings, transactional billing, and automated deployments.',
    icon: <Cpu size={22} />,
    color: 'cyan',
    skills: ['Gemini API', 'Vector Embeddings', 'Stripe Payments', 'Cloudinary', 'Git & GitHub', 'Vercel'],
  },
];

export const TechStack: React.FC = () => {
  const getGlowColor = (color: TechGroup['color']) => {
    if (color === 'cyan') return 'group-hover:bg-brand-cyan/10';
    if (color === 'purple') return 'group-hover:bg-brand-purple/10';
    return 'group-hover:bg-brand-indigo/10';
  };

  const getBorderHoverColor = (color: TechGroup['color']) => {
    if (color === 'cyan') return 'hover:border-brand-cyan/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.05)]';
    if (color === 'purple') return 'hover:border-brand-purple/40 hover:shadow-[0_10px_30px_rgba(139,92,246,0.05)]';
    return 'hover:border-brand-indigo/40 hover:shadow-[0_10px_30px_rgba(99,102,241,0.05)]';
  };

  const getIconBgColor = (color: TechGroup['color']) => {
    if (color === 'cyan') return 'bg-brand-cyan/10 text-brand-cyan';
    if (color === 'purple') return 'bg-brand-purple/10 text-brand-purple';
    return 'bg-brand-indigo/10 text-brand-indigo';
  };

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
    <section id="skills" className="py-24 relative bg-grid-pattern overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {techGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className={`relative group p-6 md:p-8 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 transition-all duration-300 flex flex-col justify-between overflow-hidden ${getBorderHoverColor(
                group.color
              )}`}
            >
              {/* Corner Glow Overlay */}
              <div className={`absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none ${getGlowColor(
                group.color
              )}`} />

              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${getIconBgColor(
                    group.color
                  )}`}>
                    {group.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills Pills Flow */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold rounded-xl border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 dark:hover:border-brand-cyan/30 transition-all duration-200"
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
