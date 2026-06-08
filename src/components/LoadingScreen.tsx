import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingSteps = [
  'Initializing workspace...',
  'Connecting to MongoDB Cluster...',
  'Syncing Redis Cache...',
  'Configuring Gemini LLM Embeddings...',
  'Compiling React components...',
  'Starting Dev Server...',
  'Ready!',
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDone(true);
          return 100;
        }
        // Increment speed varies to make it feel realistic
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Sync current message based on progress
    const segment = 100 / loadingSteps.length;
    const currentStep = Math.min(Math.floor(progress / segment), loadingSteps.length - 1);
    setStepIndex(currentStep);
  }, [progress]);

  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800); // Allow brief pause on "Ready!"
      return () => clearTimeout(timeout);
    }
  }, [isDone, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 bg-[#090A0F] z-[99999] flex flex-col items-center justify-center font-sans p-6"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Neon Radial Gradient Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none" />

          {/* Loader Box */}
          <div className="relative max-w-md w-full flex flex-col items-center text-center">
            {/* Title / Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white shadow-lg">
                DT
              </div>
              <span className="text-xl font-bold tracking-wider text-white">
                DEVESH <span className="text-brand-cyan">TRIPATHI</span>
              </span>
            </motion.div>

            {/* Percentage Circle / Core Indicator */}
            <div className="relative flex items-center justify-center mb-8">
              <svg className="w-32 h-32 transform -rotate-90">
                {/* Track circle */}
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  className="stroke-slate-800"
                  strokeWidth="3"
                  fill="transparent"
                />
                {/* Active progress circle */}
                <motion.circle
                  cx="64"
                  cy="64"
                  r="58"
                  className="stroke-brand-indigo"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 58}
                  strokeDashoffset={2 * Math.PI * 58 * (1 - progress / 100)}
                  style={{
                    strokeLinecap: 'round',
                  }}
                  transition={{ ease: 'easeInOut' }}
                />
              </svg>
              <span className="absolute text-3xl font-bold font-mono text-white">
                {progress}%
              </span>
            </div>

            {/* Step Message */}
            <div className="h-6 flex items-center justify-center mb-6">
              <motion.p
                key={stepIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.8, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 font-mono text-sm tracking-wide"
              >
                {loadingSteps[stepIndex]}
              </motion.p>
            </div>

            {/* Horizontal progress bar */}
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut' }}
              />
            </div>

            <div className="mt-8 flex gap-6 text-[10px] text-gray-500 font-mono">
              <span>MERN STACK</span>
              <span>•</span>
              <span>AI INTEGRATED</span>
              <span>•</span>
              <span>SYSTEM DESIGN</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
