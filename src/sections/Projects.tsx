import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Server, BarChart3 } from 'lucide-react';
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
  category: 'fullstack' | 'frontend-api';
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
    subtitle: 'AI SaaS Platform',
    description: 'A production-ready AI SaaS platform featuring real-time conversational AI, image generation, and secure user authentication.',
    image: promptstackImg,
    category: 'fullstack',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis', 'Stripe', 'Gemini API'],
    liveLink: 'https://promptstack-ai.vercel.app',
    githubLink: 'https://github.com/ideveshtripathii/PromptStack',
    icon: <Sparkles className="text-brand-cyan" size={20} />,
    highlights: [
      'Built a production-ready AI SaaS platform with real-time conversational AI, image generation, and secure user authentication.',
      'Implemented WebSocket-based streaming using Socket.io with Redis caching to improve chat performance and user experience.',
      'Developed a credit-based payment system using Stripe Checkout and Svix webhooks with JWT authentication and ImageKit integration.',
    ],
  },
  {
    id: 'insiderjobs',
    title: 'InsiderJobs',
    subtitle: 'Full Stack Job Portal',
    description: 'AI-powered MERN job portal featuring role-based access, AI resume parsing, mock interviews, recruiter dashboard, Clerk authentication, and Redis caching for faster data retrieval.',
    image: insiderjobsImg,
    category: 'fullstack',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Clerk', 'Cloudinary', 'Redis'],
    liveLink: 'https://insiderjobsfullstack.vercel.app',
    githubLink: 'https://github.com/ideveshtripathii/Insiderjobs',
    icon: <Server className="text-brand-cyan" size={20} />,
    highlights: [
      'Developed an AI-powered job portal featuring role-based access control (RBAC), AI resume parsing, mock interviews, and recruiter dashboards.',
      'Built secure APIs with Clerk authentication and integrated Redis caching to optimize data retrieval and API response times.',
      'Implemented recruiter features with Quill editor, Cloudinary media storage, optimized database operations, and Sentry error monitoring.',
    ],
  },
  {
    id: 'weatherscope',
    title: 'WeatherScope',
    subtitle: 'Real-time Weather Dashboard',
    description: 'High-performance React weather dashboard providing real-time weather forecasts, air quality insights, and 2-year historical weather analytics.',
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
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend / APIs', value: 'frontend-api' },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  React.useEffect(() => {
    const section = sessionStorage.getItem('scrollToSection');
    if (section) {
      sessionStorage.removeItem('scrollToSection');
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, []);

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden bg-grid-pattern">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[300px] h-[300px] rounded-full bg-brand-indigo/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Featured <span className="text-brand-cyan">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar px-1">
          <div className="flex bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-white/5 p-1 rounded-xl">
            {filterOptions.map((opt) => {
              const isActive = filter === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`px-4 py-2 rounded-lg text-[11px] font-semibold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative flex flex-col group border border-black/5 dark:border-white/5 p-4 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl transition-all duration-500 ease-out shadow-md hover:-translate-y-1.5 overflow-hidden hover:border-brand-cyan/40 hover:shadow-[0_15px_30px_rgba(94,106,210,0.12)]"
              >
                {/* Corner Glow Overlay */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/5" />

                <Link to={`/project/${project.id}`} className="flex flex-col flex-grow cursor-pointer">
                  {/* Visual Area (Mockup Image) */}
                  <div className="w-full relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-neutral-950 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4">
                    {/* Floating Category Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2 py-0.5 bg-slate-950/75 dark:bg-neutral-950/75 backdrop-blur-md rounded-lg border border-white/10 text-white text-[9px] font-bold tracking-wider uppercase">
                      {project.icon}
                      <span>{project.subtitle}</span>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>

                  {/* Information Area */}
                  <div className="flex flex-col flex-grow items-start text-left relative z-10">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight transition-colors duration-300 group-hover:text-brand-cyan">
                      {project.title}
                    </h3>

                    {/* Tagline / Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-3.5 text-xs leading-relaxed min-h-[48px]">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[8.5px] font-mono rounded-full border font-semibold transition-all duration-300 bg-brand-cyan/5 dark:bg-brand-cyan/10 text-brand-cyan border-brand-cyan/15 dark:border-brand-cyan/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* Actions buttons */}
                <div className="flex items-center gap-2.5 w-full mt-1.5 relative z-20">
                  <Link
                    to={`/project/${project.id}`}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all duration-300 cursor-pointer bg-gradient-to-r from-brand-indigo to-brand-cyan hover:shadow-[0_4px_10px_rgba(94,106,210,0.15)] hover:scale-[1.02]"
                  >
                    <ExternalLink size={11} />
                    Case Study
                  </Link>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                  >
                    <GithubIcon size={11} />
                    Code
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
