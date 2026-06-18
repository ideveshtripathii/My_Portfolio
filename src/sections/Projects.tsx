import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Server, BarChart3, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import promptstackImg from '../assets/Promptstack.png';
import insiderjobsImg from '../assets/Insiderjobs.png';
import weatherscopeImg from '../assets/Weatherscope.png';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: 'ai-saas' | 'fullstack' | 'frontend-api';
  tags: string[];
  liveLink: string;
  githubLink: string;
  icon: React.ReactNode;
  highlights: string[];
}

const projectsData: Project[] = [
  {
    id: 'promptstack',
    title: 'PromptStack',
    subtitle: 'AI SaaS & Image Generation Platform',
    description: 'AI-powered SaaS platform featuring real-time chat, image generation, secure payments, and scalable backend architecture.',
    image: promptstackImg,
    category: 'ai-saas',
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Stripe', 'Redis', 'Gemini API', 'ImageKit'],
    liveLink: 'https://promptstack-ai.vercel.app',
    githubLink: 'https://github.com/ideveshtripathii/PromptStack',
    icon: <Sparkles className="text-brand-cyan" size={20} />,
    highlights: [
      'Built a scalable AI SaaS platform supporting 100+ users using WebSockets, Redis, and event-driven architecture',
      'Implemented real-time response streaming (Socket.io) achieving sub-100ms latency',
      'Developed context-aware chat system with MongoDB and vector embeddings for multi-turn interactions',
      'Integrated Stripe-based credit system with secure webhook handling for automated billing',
    ],
  },
  {
    id: 'insiderjobs',
    title: 'InsiderJobs',
    subtitle: 'Full Stack Job Portal',
    description: 'Production-ready recruitment platform with secure authentication, recruiter dashboards, and optimized hiring workflows.',
    image: insiderjobsImg,
    category: 'fullstack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Clerk', 'Cloudinary'],
    liveLink: 'https://insiderjobsfullstack.vercel.app',
    githubLink: 'https://github.com/ideveshtripathii/Insiderjobs',
    icon: <Server className="text-brand-purple" size={20} />,
    highlights: [
      'Developed a scalable full-stack job portal with role-based access control (RBAC) and RESTful APIs supporting complete CRUD operations',
      'Optimized backend performance by implementing MongoDB indexing and query optimization, reducing response time by ~30%',
      'Integrated Clerk authentication with secure session management and Cloudinary for efficient file and media storage',
      'Designed and implemented recruiter and user dashboards for job management, application tracking, and status workflows',
    ],
  },
  {
    id: 'weatherscope',
    title: 'WeatherScope',
    subtitle: 'Real-time Weather Dashboard',
    description: 'Real-time weather analytics dashboard with geolocation forecasting, 2-year historical data exploration, and interactive charting.',
    image: weatherscopeImg,
    category: 'frontend-api',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Open-Meteo API', 'Recharts'],
    liveLink: 'https://weatherscope-three.vercel.app',
    githubLink: 'https://github.com/ideveshtripathii/weather-dashboard',
    icon: <BarChart3 className="text-brand-cyan" size={20} />,
    highlights: [
      'Built a high-performance weather dashboard with geolocation-based data fetching, achieving sub-500ms rendering speed',
      'Implemented 2-year historical weather analytics with optimized API orchestration and interactive visualizations using Recharts',
      'Designed a responsive UI with dynamic data handling, including real-time weather metrics and efficient state management',
    ],
  },
];

const filterOptions = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI & SaaS', value: 'ai-saas' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend / APIs', value: 'frontend-api' },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/2 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[300px] h-[300px] rounded-full bg-brand-indigo/2 blur-[100px] pointer-events-none" />

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
            Featured <span className="text-brand-cyan">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar px-1">
          <div className="flex bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-white/5 p-1 rounded-2xl">
            {filterOptions.map((opt) => {
              const isActive = filter === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive
                    ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white'
                    }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Container */}
        <div className="flex flex-col gap-12 lg:gap-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-black/5 dark:border-white/5 p-6 lg:p-10 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl hover:border-slate-200 dark:hover:border-white/10 transition-colors duration-300 shadow-2xl"
              >

                {/* Visual Area (Mockup Image) - Left/Right alternates on desktop */}
                <div className={`lg:col-span-7 w-full relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group aspect-[16/9] bg-slate-100 dark:bg-neutral-950 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-last' : ''
                  }`}>

                  {/* Interactive zoom image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>

                {/* Information Area - Left/Right alternates */}
                <div className="lg:col-span-5 flex flex-col items-start text-left">

                  {/* Category icon / Subtitle */}
                  <div className="flex items-center gap-2 mb-3">
                    {project.icon}
                    <span className="text-[11px] font-mono tracking-widest text-brand-purple uppercase font-bold">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Tagline / Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Highlights Accordion */}
                  <div className="flex flex-col gap-2.5 w-full mb-8">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={14} className="text-brand-cyan shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-normal">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-[10px] font-mono rounded-md border border-slate-200 dark:border-white/5 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-indigo to-brand-purple text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </a>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
