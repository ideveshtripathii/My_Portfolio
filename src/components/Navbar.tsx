import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollDirection } from '../hooks/useScrollDirection';
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#skills' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const scrollDirection = useScrollDirection();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for progress and active section intersections
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Track active section
      const scrollPosition = window.scrollY + 150; // offset
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[50]">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:max-w-7xl lg:mx-auto h-16 rounded-2xl glass z-40 transition-transform duration-300 ${
          scrollDirection === 'down' ? '-translate-y-24' : 'translate-y-0'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="h-full px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-2 font-bold tracking-wider text-slate-800 dark:text-white group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white shadow-lg transition-transform group-hover:scale-105">
              DT
            </div>
            <span className="hidden sm:inline font-sans text-lg">
              DEVESH <span className="text-brand-cyan font-light">TRIPATHI</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-slate-100 dark:bg-white/5 rounded-full z-[-1]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Actions: Theme toggle & CV & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* Download CV (Desktop) */}
            <a
              href="./Devesh_Tripathi_Full Stack_MERN_Developer.pdf"
              download="Devesh_Tripathi_Full_Stack_MERN_Developer.pdf"
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-brand-indigo to-brand-purple text-white rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <Download size={14} />
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger (Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-white/95 dark:bg-[#090A0F]/95 backdrop-blur-lg flex flex-col justify-center items-center p-6 md:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            {/* Floating Glow */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-purple/10 blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-6 text-center z-10">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`text-2xl font-bold tracking-wide transition-colors ${
                      isActive ? 'text-brand-cyan' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="mt-8 flex flex-col items-center">
                <a
                  href="./Devesh_Tripathi_Full Stack_MERN_Developer.pdf"
                  download="Devesh_Tripathi_Full_Stack_MERN_Developer.pdf"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase bg-gradient-to-r from-brand-indigo to-brand-purple text-white rounded-xl shadow-lg cursor-pointer"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
