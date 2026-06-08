import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowUpRight } from 'lucide-react';

interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

const articlesData: Article[] = [
  {
    title: 'Understanding Database Indexing in MongoDB for Scale',
    description: 'A deep dive into single field, compound, and multikey indexes in MongoDB. Learn how indexing reduces query response times by 30% in high-traffic applications.',
    date: 'May 24, 2026',
    readTime: '6 min read',
    tags: ['Database', 'MongoDB', 'Performance'],
    link: '#',
  },
  {
    title: 'Architecting Real-Time Networking with WebSockets and Redis',
    description: 'Learn how to build a scalable, event-driven message streaming network. Covers Socket.io integration, Redis Pub/Sub, and sub-100ms message delivery.',
    date: 'Apr 12, 2026',
    readTime: '8 min read',
    tags: ['WebSockets', 'Redis', 'Node.js'],
    link: '#',
  },
  {
    title: 'Leveraging Gemini API & Vector Embeddings in MERN Stack',
    description: 'Step-by-step guide on integrating LLMs with vector database stores to build context-aware search engines and multi-turn AI chat interfaces.',
    date: 'Mar 18, 2026',
    readTime: '10 min read',
    tags: ['AI & LLM', 'Gemini API', 'Vector Embeddings'],
    link: '#',
  },
];

export const Writing: React.FC = () => {
  return (
    <section id="writing" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/2 blur-[120px] pointer-events-none" />

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
            Technical <span className="text-brand-purple">Writing</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
          <p className="text-xs text-slate-500 font-mono tracking-widest uppercase mt-4">
            Guides, Tutorials, and Deep Dives on Full Stack & AI Engineering
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articlesData.map((article, idx) => (
            <motion.a
              key={idx}
              href={article.link}
              target={article.link !== '#' ? '_blank' : undefined}
              rel={article.link !== '#' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-purple/40 dark:hover:border-brand-purple/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Meta Details */}
                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-brand-purple transition-colors flex items-start justify-between gap-2 text-left">
                  <span>{article.title}</span>
                  <ArrowUpRight size={18} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-brand-purple" />
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal text-left mb-6">
                  {article.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-slate-50 dark:bg-white/5 text-[9px] font-mono rounded text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-white/5 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
