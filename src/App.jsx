import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import News from './sections/News';
import Publications from './sections/Publications';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Teaching from './sections/Teaching';
import Honors from './sections/Honors';

function PortfolioInner() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode
        ? 'bg-slate-950 text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200'
        : 'bg-slate-50 text-slate-600 selection:bg-cyan-200 selection:text-cyan-900'
    }`}>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? 'rgba(6, 182, 212, 0.05)' : 'rgba(6, 182, 212, 0.08)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Nav />
      <Hero />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24 z-10 relative">
        <News />
        <Publications />
        <Experience />

        <div className="grid md:grid-cols-2 gap-12">
          <Education />
          <Teaching />
        </div>

        <Honors />
      </main>

      <Footer />
    </div>
  );
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioInner />
    </ThemeProvider>
  );
}
