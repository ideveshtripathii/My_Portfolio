import { Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-black/10 dark:border-white/5 overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-brand-indigo/5 blur-[80px] pointer-events-none rounded-t-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 font-sans">
        {/* Name brand / Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-slate-800 dark:text-white">
            Designed & Developed by Devesh Tripathi
          </p>
          <p className="text-[10px] text-gray-500 font-mono mt-1">
            © {new Date().getFullYear()} All rights reserved. Noida, UP, India.
          </p>
        </div>

        {/* Social connections */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:deveshbiksi@gmail.com"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-cyan dark:hover:text-brand-cyan transition-all shadow-md cursor-pointer"
            aria-label="Send email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://linkedin.com/in/idevesh-tripathi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-cyan dark:hover:text-brand-cyan transition-all shadow-md cursor-pointer"
            aria-label="Visit LinkedIn"
          >
            <LinkedinIcon size={14} />
          </a>
          <a
            href="https://github.com/ideveshtripathii"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-cyan dark:hover:text-brand-cyan transition-all shadow-md cursor-pointer"
            aria-label="Visit GitHub"
          >
            <GithubIcon size={14} />
          </a>

          {/* Quick scroll to top */}
          <button
            onClick={handleScrollToTop}
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors shadow-md cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
