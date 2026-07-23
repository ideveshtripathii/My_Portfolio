import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  Database, 
  Cpu, 
  Layers, 
  RotateCcw,
  Sparkles,
  Server,
  BarChart3,
  CheckCircle2,
  Code
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

// Import images to ensure Vite bundles them
import promptstackImg from '../assets/Promptstack.png';
import insiderjobsImg from '../assets/Insiderjobs.png';
import weatherscopeImg from '../assets/Weatherscope.png';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  icon: React.ReactNode;
  overview: string;
  features: string[];
  architecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    integrations: string[];
  };
  databaseDesign?: string;
  challenge: string;
  solution: string;
  systemFlow?: string;
}

const caseStudiesData: Record<string, CaseStudy> = {
  promptstack: {
    id: 'promptstack',
    title: 'PromptStack',
    subtitle: 'AI SaaS Platform',
    description: 'A production-ready AI SaaS platform featuring real-time conversational AI, image generation, and secure user authentication.',
    image: promptstackImg,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis', 'Stripe', 'Gemini API'],
    liveLink: 'https://promptstack-ai.vercel.app',
    githubLink: 'https://github.com/ideveshtripathii/PromptStack',
    icon: <Sparkles className="text-brand-cyan" size={20} />,
    overview: `PromptStack is a production-ready AI SaaS platform that combines real-time conversational AI, AI image generation, and secure credit-based billing. Built with the MERN stack, Socket.io, Redis, Stripe, and Gemini API, it delivers fast, scalable, and interactive AI experiences.`,
    features: [
      '⚡ Real-Time AI Streaming – Stream AI responses token-by-token using Socket.io.',
      '💬 Context-Aware Chat – Maintain conversation history with Google Gemini for smarter responses.',
      '🎨 AI Image Generation – Generate high-quality images directly from text prompts.',
      '💳 Credit-Based Billing – Secure Stripe Checkout integration with automated credit management.',
      '🚀 Redis Caching – Improve response speed and reduce database load with Redis.',
      '🔐 Secure Authentication – JWT authentication with bcrypt password encryption.',
      '📱 Modern Responsive UI – Built with React 19 and Tailwind CSS for a seamless experience.',
      '🔗 Webhook Integration – Svix-powered webhook verification for secure payment processing.'
    ],
    architecture: {
      frontend: ['React 19', 'Vite', 'Tailwind CSS', 'Context API', 'Socket.io Client'],
      backend: ['Node.js', 'Express.js', 'Socket.io', 'JWT Authentication', 'REST APIs'],
      database: ['MongoDB', 'Mongoose ODM', 'Redis (Upstash)'],
      integrations: ['Google Gemini API', 'ImageKit', 'Stripe Payments', 'Svix Webhooks']
    },
    challenge: `Delivering real-time AI streaming, maintaining conversation context, and processing secure payments while ensuring high performance and scalability.`,
    solution: `Implemented Socket.io for token-by-token AI streaming, Redis for low-latency caching, Gemini API for context-aware conversations, Stripe + Svix for secure credit management, and JWT authentication to build a fast, scalable, and secure AI platform.`,
    systemFlow: 'React UI → Express API → Gemini API / ImageKit → MongoDB + Redis → Stripe Webhooks → Real-time updates via Socket.io'
  },
  insiderjobs: {
    id: 'insiderjobs',
    title: 'InsiderJobs',
    subtitle: 'Full Stack Job Portal',
    description: 'AI-powered MERN job portal featuring role-based access, AI resume parsing, mock interviews, recruiter dashboard, Clerk authentication, and Redis caching for faster data retrieval.',
    image: insiderjobsImg,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Clerk', 'Cloudinary', 'Redis'],
    liveLink: 'https://insiderjobsfullstack.vercel.app',
    githubLink: 'https://github.com/ideveshtripathii/Insiderjobs',
    icon: <Server className="text-brand-cyan" size={20} />,
    overview: `InsiderJobs is an AI-powered full-stack job portal that streamlines the hiring process for job seekers and recruiters. Built with the MERN stack, Redis, Clerk, and Google Gemini, it features AI resume parsing, mock interviews, recruiter management, and high-performance caching to deliver a fast, secure, and intelligent recruitment experience.`,
    features: [
      '🤖 AI Resume Parser – Extracts skills, education, and experience from PDF resumes using Google Gemini.',
      '🎤 AI Mock Interviews – Generates role-specific interview questions with AI-powered feedback and scoring.',
      '🔍 Smart Job Search – Search and filter jobs by category, location, and salary.',
      '💼 Recruiter Dashboard – Manage job postings, applicants, and hiring workflows.',
      '📄 Application Tracking – Monitor application status in real time.',
      '⚡ Redis Caching – Accelerates database reads for faster job retrieval.',
      '🔐 Secure Authentication – Clerk authentication with Svix webhook synchronization.',
      '📱 Responsive UI – Modern interface built with React 19 and Tailwind CSS.'
    ],
    architecture: {
      frontend: ['React 19', 'Vite', 'Tailwind CSS v4', 'React Router', 'Context API', 'Axios'],
      backend: ['Node.js', 'Express.js', 'REST APIs', 'Clerk Authentication', 'Svix Webhooks'],
      database: ['MongoDB', 'Mongoose', 'Upstash Redis'],
      integrations: ['Google Gemini AI', 'Cloudinary', 'Sentry']
    },
    challenge: `Building a scalable recruitment platform that combines AI-powered resume analysis, personalized mock interviews, secure authentication, and fast job discovery while maintaining excellent performance and user experience.`,
    solution: `Integrated Google Gemini AI for resume parsing and interview evaluation, Upstash Redis for low-latency caching, Clerk for secure authentication, Cloudinary for file storage, and Sentry for real-time monitoring to build a scalable, intelligent hiring platform.`,
    systemFlow: 'React UI → Express API → Gemini AI → MongoDB + Redis → Clerk Authentication → Cloudinary Storage → Recruiter & Job Seeker Dashboard'
  },
  weatherscope: {
    id: 'weatherscope',
    title: 'WeatherScope',
    subtitle: 'Real-time Weather Dashboard',
    description: 'High-performance React weather dashboard providing real-time weather forecasts, air quality insights, and 2-year historical weather analytics.',
    image: weatherscopeImg,
    tags: ['React', 'Vite', 'Tailwind CSS', 'Open-Meteo API', 'Recharts'],
    liveLink: 'https://weatherscope-three.vercel.app',
    githubLink: 'https://github.com/ideveshtripathii/weather-dashboard',
    icon: <BarChart3 className="text-brand-cyan" size={20} />,
    overview: 'WeatherScope is a high-performance React weather dashboard that provides real-time weather forecasts, air quality insights, and two years of historical weather analytics. Built with React, Vite, Tailwind CSS, Recharts, and the Open-Meteo API, it delivers fast, interactive, and responsive weather visualizations with location-based forecasting.',
    features: [
      '🌤️ Real-Time Weather Forecasts – Live weather updates based on the user\'s location.',
      '🌍 Automatic Geolocation – Detects the user\'s location for hyper-local weather information.',
      '📊 Interactive Weather Charts – Visualizes hourly and daily weather trends using Recharts.',
      '📅 2-Year Historical Analytics – Explore historical weather data, precipitation, and wind trends.',
      '🌫️ Air Quality Monitoring – Displays PM2.5, PM10, CO, and NO₂ air quality metrics.',
      '🌅 Sunrise & Sunset Tracking – Shows daily sun cycle information.',
      '⚡ Optimized Performance – Concurrent API requests enable rendering speeds under 500ms.',
      '📱 Responsive Design – Mobile-first interface built with React and Tailwind CSS.'
    ],
    architecture: {
      frontend: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'Axios', 'Day.js'],
      backend: ['None (Direct Client-to-API communication)'],
      database: ['LocalStorage (Recent locations & preferences caching)'],
      integrations: ['Open-Meteo Weather API', 'Open-Meteo Historical API', 'Open-Meteo Air Quality API', 'Browser Geolocation API']
    },
    challenge: 'Building a fast and responsive weather dashboard capable of displaying real-time forecasts, historical weather trends, air quality data, and interactive charts while maintaining low latency and a seamless user experience.',
    solution: 'Integrated the Open-Meteo API for weather and historical data, browser geolocation for location-based forecasts, Recharts for interactive visualizations, and Axios with concurrent API requests to deliver accurate weather insights with rendering speeds under 500ms.',
    systemFlow: 'Browser Geolocation → Open-Meteo APIs → React + Axios → Recharts Visualization → Responsive Dashboard'
  }
};

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'architecture'>('overview');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const study = id ? caseStudiesData[id] : null;

  useEffect(() => {
    // If invalid project ID, redirect back to home page
    if (!study) {
      navigate('/');
    }
  }, [study, navigate]);

  useEffect(() => {
    setIframeLoaded(false);
  }, [id]);

  if (!study) return null;

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIframeLoaded(false);
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  // Viewport widths for the mockup sandbox
  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      default: return 'max-w-full';
    }
  };

  return (
    <div className="min-h-screen lg:h-screen bg-transparent text-slate-900 dark:text-gray-100 flex flex-col transition-colors duration-500 overflow-y-auto lg:overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-white/40 dark:bg-[#0F111A]/40 backdrop-blur-md border-b border-slate-200 dark:border-white/5 px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => {
            sessionStorage.setItem('scrollToSection', 'projects');
          }}
          className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-brand-cyan dark:hover:text-brand-cyan transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={study.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/10 hover:border-brand-cyan/30 text-gray-600 dark:text-gray-400 hover:text-brand-cyan transition-colors bg-white/50 dark:bg-white/5"
            title="View Code on GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={study.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-indigo to-brand-cyan shadow-sm hover:shadow-[0_4px_12px_rgba(94,106,210,0.2)] hover:scale-[1.02] transition-all"
          >
            <ExternalLink size={13} />
            Open Demo
          </a>
        </div>
      </header>

      {/* Split Layout Container */}
      <div className="flex-none lg:flex-1 flex flex-col lg:flex-row lg:overflow-hidden relative z-10">
        
        {/* Left Side: Case Study Description */}
        <aside className="w-full lg:w-[42%] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/5 overflow-y-visible lg:overflow-y-auto p-6 md:p-8 flex flex-col shrink-0 lg:shrink scrollbar-thin scrollbar-thumb-brand-cyan/20">
          
          {/* Project Title & Badge */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-brand-cyan">
              {study.icon}
              <span>{study.subtitle}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-brand-indigo to-slate-900 dark:from-white dark:via-brand-cyan dark:to-white bg-clip-text text-transparent">
              {study.title}
            </h1>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {study.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 text-[10px] font-semibold font-mono rounded-full bg-brand-cyan/5 dark:bg-brand-cyan/10 border border-brand-cyan/15 dark:border-brand-cyan/20 text-brand-cyan transition-all"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-slate-200 dark:border-white/5 flex gap-6 mb-6">
            {(['overview', 'features', 'architecture'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 transition-all relative ${
                  activeTab === tab 
                    ? 'border-brand-cyan text-brand-cyan dark:text-white font-extrabold' 
                    : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  <p className="font-medium text-gray-900 dark:text-white text-base whitespace-pre-line">
                    {study.overview}
                  </p>
                  
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-cyan mb-2.5">
                      The Challenge
                    </h4>
                    <p className="bg-slate-100 dark:bg-white/5 p-4 rounded-2xl border border-slate-200/50 dark:border-white/5 text-xs md:text-sm italic whitespace-pre-line">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-cyan mb-2.5">
                      The Solution
                    </h4>
                    <p className="text-xs md:text-sm whitespace-pre-line">
                      {study.solution}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Features */}
              {activeTab === 'features' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {study.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 bg-slate-100 dark:bg-white/5 p-4 rounded-2xl border border-slate-200/50 dark:border-white/5 transition-all hover:border-brand-cyan/20">
                      <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-0.5 animate-pulse" />
                      <p className="text-xs md:text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Tab 3: Architecture & System Details */}
              {activeTab === 'architecture' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Grid of details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 p-4 rounded-2xl">
                      <div className="flex items-center gap-1.5 text-brand-cyan font-bold mb-2 text-xs md:text-sm">
                        <Layers size={14} />
                        Frontend
                      </div>
                      <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                        {study.architecture.frontend.map((item) => (
                          <li key={item} className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 p-4 rounded-2xl">
                      <div className="flex items-center gap-1.5 text-brand-cyan font-bold mb-2 text-xs md:text-sm">
                        <Cpu size={14} />
                        Backend
                      </div>
                      <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                        {study.architecture.backend.map((item) => (
                          <li key={item} className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 p-4 rounded-2xl col-span-2">
                      <div className="flex items-center gap-1.5 text-brand-cyan font-bold mb-2 text-xs md:text-sm">
                        <Database size={14} />
                        Database & Cache
                      </div>
                      <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                        {study.architecture.database.map((item) => (
                          <li key={item} className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 p-4 rounded-2xl col-span-2">
                      <div className="flex items-center gap-1.5 text-brand-cyan font-bold mb-2 text-xs md:text-sm">
                        <Code size={14} />
                        Integrations & APIs
                      </div>
                      <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                        {study.architecture.integrations.map((item) => (
                          <li key={item} className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {study.databaseDesign && (
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-brand-cyan mb-2.5">
                        Database Structure
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-slate-100 dark:bg-white/5 p-4 rounded-2xl border border-slate-200/50 dark:border-white/5">
                        {study.databaseDesign}
                      </p>
                    </div>
                  )}

                  {study.systemFlow && (
                    <div className="mt-6">
                      <h4 className="text-xs font-black uppercase tracking-wider text-brand-cyan mb-2.5">
                        System Flow
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-slate-100 dark:bg-white/5 p-4 rounded-2xl border border-slate-200/50 dark:border-white/5 font-mono">
                        {study.systemFlow}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Note info bottom */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 text-[10px] md:text-xs text-gray-500 flex justify-between items-center bg-transparent">
              <span>Case study page: Option 1</span>
              <span>Performance Optimized</span>
            </div>
          </div>
        </aside>

        {/* Right Side: Interactive Browser Sandbox preview */}
        <main className="flex-none lg:flex-1 bg-slate-100/40 dark:bg-neutral-900/20 backdrop-blur-[2px] p-4 md:p-6 flex flex-col justify-center items-center overflow-hidden h-[600px] sm:h-[700px] md:h-[850px] lg:h-full">
          
          {/* Viewport resizing bar */}
          <div className="w-full max-w-full flex items-center justify-between mb-4 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-slate-200 dark:border-white/5 p-2 rounded-2xl shadow-sm z-10">
            <div className="flex gap-1">
              {(['desktop', 'tablet', 'mobile'] as const).map((mode) => {
                const isActive = viewport === mode;
                const getIcon = () => {
                  switch (mode) {
                    case 'mobile': return <Smartphone size={15} />;
                    case 'tablet': return <Tablet size={15} />;
                    default: return <Monitor size={15} />;
                  }
                };
                return (
                  <button
                    key={mode}
                    onClick={() => setViewport(mode)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-brand-cyan/15 text-brand-cyan dark:text-white border border-brand-cyan/25' 
                        : 'text-gray-400 hover:text-gray-700 dark:hover:text-white'
                    }`}
                    title={`Rescale to ${mode}`}
                  >
                    {getIcon()}
                  </button>
                );
              })}
            </div>

            {/* Live Address text bar */}
            <div className="hidden sm:flex flex-1 mx-4 max-w-md bg-slate-100 dark:bg-neutral-950 border border-slate-200 dark:border-white/5 px-4 py-1.5 rounded-full justify-between items-center text-[10px] text-gray-500 font-mono select-none">
              <span className="truncate">{study.liveLink}</span>
            </div>

            {/* Frame Controls */}
            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/5 text-gray-400 hover:text-gray-700 dark:hover:text-white hover:border-brand-cyan/20 transition-all cursor-pointer bg-transparent"
                title="Reload Frame"
              >
                <RotateCcw size={14} />
              </button>
              <a
                href={study.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/5 text-gray-400 hover:text-gray-700 dark:hover:text-white hover:border-brand-cyan/20 transition-all bg-transparent"
                title="Open in new window"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Browser Device mockup wrapper container */}
          <div className={`w-full flex-1 min-h-0 flex items-stretch justify-center transition-all duration-300 ${getViewportWidth()}`}>
            
            <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-neutral-950 shadow-2xl flex flex-col overflow-hidden relative">
              
              {/* macOS layout titlebar dots */}
              <div className="px-4 py-2.5 bg-slate-50 dark:bg-neutral-900 border-b border-slate-200 dark:border-white/5 flex items-center gap-1.5 select-none shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-grow text-center text-[10px] text-gray-400 font-bold uppercase tracking-wider pr-10 truncate">
                  {study.title} Sandbox Preview
                </div>
              </div>

              {/* View Frame Area */}
              <div className="flex-grow min-h-0 w-full relative bg-white dark:bg-neutral-950">
                
                {/* Loader Screen */}
                {!iframeLoaded && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-50 dark:bg-neutral-950 gap-4 transition-colors duration-500">
                    <div className="w-10 h-10 border-4 border-brand-cyan border-t-transparent rounded-full animate-spin" />
                    <div className="text-center px-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest animate-pulse">
                        Connecting to live deployment...
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1 max-w-[280px]">
                        If embedding is blocked or slow, click the action buttons to open natively.
                      </p>
                    </div>
                  </div>
                )}

                {/* Actual Frame Sandbox */}
                <iframe
                  ref={iframeRef}
                  src={study.liveLink}
                  title={`${study.title} Sandbox Live Frame`}
                  className="w-full h-full border-none relative z-10 select-none pointer-events-auto"
                  onLoad={() => setIframeLoaded(true)}
                  loading="lazy"
                  allow="geolocation; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

            </div>

          </div>

        </main>

      </div>
    </div>
  );
};
