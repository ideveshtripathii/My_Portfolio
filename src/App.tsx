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

function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-500">
      {/* Custom Mouse Cursor Trail */}
      <CustomCursor />
      
      {/* Canvas Interactive Particle Background */}
      <AnimatedBackground />
      
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
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          {/* Fallback routing to ensure all subroutes land gracefully */}
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
