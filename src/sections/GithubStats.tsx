import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Flame, Trophy, Code2 } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

// Seed static contribution grid data (53 weeks * 7 days = 371 squares)
// Let's generate a list of squares with contribution levels (0 to 4)
const generateGridData = () => {
  const data = [];
  const levels = [0, 0, 1, 1, 2, 2, 3, 3, 4]; // weights
  const days = 371;
  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() - days);

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(baseDate);
    currentDate.setDate(baseDate.getDate() + i);
    const level = levels[Math.floor(Math.random() * levels.length)];
    data.push({
      date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      level,
      commits: level === 0 ? 0 : level * 2 + Math.floor(Math.random() * 2),
    });
  }
  return data;
};

// Language distribution data
const languageData = [
  { name: 'JavaScript', value: 35, color: '#F7DF1E' },
  { name: 'TypeScript', value: 25, color: '#3178C6' },
  { name: 'React (HTML/CSS)', value: 20, color: '#61DAFB' },
  { name: 'Node / Express', value: 15, color: '#339933' },
  { name: 'Databases', value: 5, color: '#47A248' },
];

// Activity Graph data (last 6 months)
const activityData = [
  { name: 'Dec', commits: 145 },
  { name: 'Jan', commits: 198 },
  { name: 'Feb', commits: 210 },
  { name: 'Mar', commits: 175 },
  { name: 'Apr', commits: 245 },
  { name: 'May', commits: 280 },
];

export const GithubStats: React.FC = () => {
  const contributionGrid = useMemo(() => generateGridData(), []);

  // Compute total commits from grid
  const computedTotalCommits = useMemo(() => {
    return contributionGrid.reduce((sum, item) => sum + item.commits, 0);
  }, [contributionGrid]);

  const getSquareColorClass = (level: number) => {
    if (level === 0) return 'bg-gray-200 dark:bg-[#1F2937]/30';
    if (level === 1) return 'bg-brand-indigo/25 text-brand-indigo';
    if (level === 2) return 'bg-brand-indigo/50 text-brand-indigo';
    if (level === 3) return 'bg-brand-purple/75 text-brand-purple';
    return 'bg-brand-cyan text-brand-cyan glow-cyan';
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

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
            GitHub <span className="text-brand-cyan">Metrics</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Contribution Grid panel - Span 12 */}
          <div className="lg:col-span-12 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 p-6 md:p-8 rounded-3xl text-left shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-black/5 dark:border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <GitCommit className="text-brand-cyan" size={20} />
                  Contribution Calendar
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-mono">
                  {computedTotalCommits}+ commits in the past 371 days
                </p>
              </div>
              <div className="flex gap-2 text-[10px] text-gray-500 font-mono items-center">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-[#1F2937]/30" />
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-indigo/25" />
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-indigo/50" />
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-purple/75" />
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-cyan" />
                <span>More</span>
              </div>
            </div>

            {/* Scrollable grid box */}
            <div className="overflow-x-auto no-scrollbar pb-2">
              <div className="grid grid-flow-col grid-rows-7 gap-1 md:gap-[5px] w-max select-none">
                {contributionGrid.map((item, idx) => (
                  <div
                    key={idx}
                    className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-sm transition-transform hover:scale-125 cursor-help ${getSquareColorClass(
                      item.level
                    )}`}
                    title={`${item.commits} commits on ${item.date}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Metrics Panel - Span 4 */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Streak Card */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 flex items-center gap-4 text-left shadow-xl hover:border-brand-purple/20 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 animate-pulse">
                <Flame size={22} />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block">Developer Streak</span>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  45 Days Continuous
                </h4>
                <p className="text-xs text-gray-500 font-mono mt-0.5">Current: 12 days streak</p>
              </div>
            </div>

            {/* Top Language Card */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 flex items-center gap-4 text-left shadow-xl hover:border-brand-cyan/20 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
                <Code2 size={22} />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block">Top Ecosystem</span>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  MERN + TS Stack
                </h4>
                <p className="text-xs text-gray-500 font-mono mt-0.5">Primary language: JS / TS</p>
              </div>
            </div>

            {/* Global Standing */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 flex items-center gap-4 text-left shadow-xl hover:border-brand-indigo/20 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo shrink-0">
                <Trophy size={20} />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block">Open Source Status</span>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Active Contributor
                </h4>
                <p className="text-xs text-gray-500 font-mono mt-0.5">150+ Pull Requests Merged</p>
              </div>
            </div>

          </div>

          {/* Recharts Language Donut Chart - Span 4 */}
          <div className="lg:col-span-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 p-6 rounded-3xl text-left shadow-2xl flex flex-col justify-between h-[300px]">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 font-mono">
              Language Share %
            </h4>
            <div className="h-[160px] relative w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(10,10,10,0.85)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      fontSize: '11px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend Labels */}
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[9px] font-mono text-gray-400">
              {languageData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                  <span>{entry.name} ({entry.value}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recharts Commit Activity Line Graph - Span 4 */}
          <div className="lg:col-span-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 p-6 rounded-3xl text-left shadow-2xl flex flex-col justify-between h-[300px]">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 font-mono">
                Commit Velocity
              </h4>
              <p className="text-[10px] text-gray-500 font-mono">Monthly commit frequency</p>
            </div>

            <div className="h-[180px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#6B7280" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6B7280" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(10,10,10,0.85)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '11px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="commits"
                    stroke="#06B6D4"
                    strokeWidth={2.5}
                    dot={{ fill: '#06B6D4', strokeWidth: 1, r: 3 }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
