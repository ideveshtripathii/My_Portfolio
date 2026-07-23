import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { TechStack } from './sections/TechStack';
import { GithubStats } from './sections/GithubStats';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const ProjectDetail = lazy(() =>
  import('./sections/ProjectDetail').then((module) => ({ default: module.ProjectDetail }))
);

function MainLayout() {
  return (
    <>
      {/* Floating Header & Navigation */}
      <Navbar />
      
      {/* Scrollable Layout sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <GithubStats />
        <Contact />
      </main>

      {/* Styled Footer */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden transition-colors duration-500">
        {/* Global Custom Mouse Cursor Trail */}
        <CustomCursor />
        
        {/* Global Canvas Interactive Particle Background */}
        <AnimatedBackground />

        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route
              path="/project/:id"
              element={
                <Suspense
                  fallback={
                    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-neutral-950 transition-colors duration-500">
                      <div className="w-10 h-10 border-4 border-brand-cyan border-t-transparent rounded-full animate-spin" />
                    </div>
                  }
                >
                  <ProjectDetail />
                </Suspense>
              }
            />
            {/* Fallback routing to ensure all subroutes land gracefully */}
            <Route path="*" element={<MainLayout />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
