import React, { useState, useEffect } from 'react';
import { Mail, Github, FileText, MapPin, ExternalLink, Calendar, Award, Terminal, Cpu, BookOpen, Sun, Moon, Linkedin, Instagram } from 'lucide-react';
import { resumeData } from './data/resumeData';

// --- COMPONENTS ---

const SectionTitle = ({ icon: Icon, title, isDark }) => (
  <div className="flex items-center gap-3 mb-8 group">
    <div className={`p-2 rounded-lg transition-colors ${
      isDark ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20' : 'bg-cyan-600/10 text-cyan-600 group-hover:bg-cyan-600/20'
    }`}>
      <Icon size={24} />
    </div>
    <h2 className={`text-2xl font-bold tracking-tight relative ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
      {title}
      <span className={`absolute -bottom-2 left-0 w-12 h-1 rounded-full group-hover:w-full transition-all duration-300 opacity-50 ${isDark ? 'bg-cyan-500' : 'bg-cyan-600'}`}></span>
    </h2>
  </div>
);

const Card = ({ children, className = "", isDark }) => (
  <div className={`backdrop-blur-sm border p-6 rounded-xl transition-all hover:shadow-lg ${
    isDark 
      ? 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
      : 'bg-white/80 border-slate-200 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
    } ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, type = "default", isDark }) => {
  const styles = {
    default: isDark ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-700",
    success: isDark 
      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
      : "bg-emerald-100 text-emerald-700 border border-emerald-200",
    warning: isDark 
      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
      : "bg-amber-100 text-amber-700 border border-amber-200",
    tech: isDark 
      ? "bg-cyan-900/30 text-cyan-300 border border-cyan-800/50 text-xs font-mono" 
      : "bg-cyan-50 text-cyan-700 border border-cyan-200 text-xs font-mono"
  };
  
  return (
    <span className={`px-2 py-1 rounded-md text-sm font-medium ${styles[type] || styles.default}`}>
      {children}
    </span>
  );
};

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme based on user system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-950 text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200' 
        : 'bg-slate-50 text-slate-600 selection:bg-cyan-200 selection:text-cyan-900'
    }`}>
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? 'rgba(6, 182, 212, 0.05)' : 'rgba(6, 182, 212, 0.15)'} 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? (darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200') + ' backdrop-blur-md border-b py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / Title Area */}
          <div className={`text-xl font-bold tracking-tighter font-mono ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            KOOK<span className="text-cyan-500 animate-pulse">.</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            {['About', 'Publications', 'Experience', 'Education', 'Honors'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-500 transition-colors hidden sm:block">
                {item}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${
                darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-cyan-500 font-mono text-sm tracking-wide">HELLO, I'M</h2>
              <h1 className={`text-5xl md:text-7xl font-bold tracking-tight ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                {resumeData.profile.name}
              </h1>
              <p className={`text-xl md:text-2xl font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {resumeData.profile.title}
              </p>
            </div>
            
            <p className={`max-w-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Researching <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Neuromorphic Computing</span> and <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Efficient AI</span>. 
              Currently exploring <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>LLM Acceleration</span> and <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Agent Systems</span>.
              Based in {resumeData.profile.location}.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={resumeData.profile.github} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center p-3 rounded-lg transition-all border ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-cyan-500/50' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-500/50 shadow-sm'
              }`} aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={resumeData.profile.scholar} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center p-3 rounded-lg transition-all border ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-cyan-500/50' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-500/50 shadow-sm'
              }`} aria-label="Google Scholar">
                <BookOpen size={20} />
              </a>
              
              {/* LinkedIn Button - Icon Only */}
              <a href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center p-3 rounded-lg transition-all border ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-cyan-500/50' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-500/50 shadow-sm'
              }`} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>

              <a href={`mailto:${resumeData.profile.email}`} className={`flex items-center justify-center p-3 rounded-lg transition-all border ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-cyan-500/50' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-500/50 shadow-sm'
              }`} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-white bg-slate-100 shadow-xl'}`}>
               {/* Replace src with your actual image path */}
              <img 
                src={resumeData.profile.image} 
                alt="Profile" 
                className="w-full h-full object-cover object-top filter hover:brightness-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Research Interests Ticker */}
        <div className={`mt-20 pt-8 border-t ${darkMode ? 'border-slate-800/50' : 'border-slate-200'}`}>
           <h3 className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-wider">Research Interests</h3>
           <div className="flex flex-wrap gap-2">
             {resumeData.interests.map((interest, idx) => (
               <span key={idx} className={`px-3 py-1.5 rounded-full border text-sm transition-colors cursor-default ${
                 darkMode 
                   ? 'bg-slate-900 border-slate-800 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-400' 
                   : 'bg-white border-slate-200 text-slate-600 hover:border-cyan-500/30 hover:text-cyan-600'
               }`}>
                 {interest}
               </span>
             ))}
           </div>
        </div>
      </section>

      {/* Main Content */}
      {/* IMPORTANT FIX: Added id="about" here so the navigation link works.
        The navigation bar links to #about, #publications, and #experience.
      */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24 z-10 relative">
        
        {/* Publications */}
        <section id="publications" className="scroll-mt-24">
          <SectionTitle icon={FileText} title="Selected Publications" isDark={darkMode} />
          <div className="grid gap-4">
            {resumeData.publications.map((pub, idx) => (
              <Card key={idx} className="group cursor-default" isDark={darkMode}>
                <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                  <div className="space-y-2">
                    <h3 className={`text-lg font-bold transition-colors ${darkMode ? 'text-slate-100 group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-cyan-600'}`}>
                      {pub.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{pub.authors}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <p className="font-mono text-xs">{pub.desc}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex md:flex-col items-start md:items-end gap-2">
                    <Badge type={pub.status === 'accepted' ? 'success' : 'warning'} isDark={darkMode}>
                      {pub.venue}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24">
          <SectionTitle icon={Terminal} title="Research Experience" isDark={darkMode} />
          <div className={`relative border-l-2 ml-3 space-y-12 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all group-hover:scale-110 ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-600 group-hover:border-cyan-400' 
                    : 'bg-white border-slate-300 group-hover:border-cyan-500'
                }`}></div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>{exp.role}</h3>
                    <span className="font-mono text-sm text-cyan-500">{exp.period}</span>
                  </div>
                  <div className={`font-medium flex items-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {exp.org}
                    <span className={`w-1 h-1 rounded-full ${darkMode ? 'bg-slate-600' : 'bg-slate-400'}`}></span>
                    <span className={`text-sm font-normal ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{exp.location}</span>
                  </div>
                  <ul className={`list-disc list-outside ml-4 space-y-1 pt-2 text-sm marker:text-cyan-500/50 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Teaching Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <section id="education" className="scroll-mt-24">
            <SectionTitle icon={Cpu} title="Education" isDark={darkMode} />
            <div className="space-y-6">
              {resumeData.education.map((edu, idx) => (
                <Card key={idx} isDark={darkMode}>
                  <div className="space-y-1">
                    <h3 className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>{edu.school}</h3>
                    <p className="text-cyan-500 text-sm">{edu.degree}</p>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Advisor: {edu.advisor}</p>
                    <div className="flex justify-between text-xs text-slate-500 font-mono mt-2">
                      <span>{edu.period}</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Teaching */}
          <section>
            <SectionTitle icon={BookOpen} title="Teaching" isDark={darkMode} />
             <div className="space-y-6">
              {resumeData.teaching.map((exp, idx) => (
                <Card key={idx} isDark={darkMode}>
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>{exp.role}</h3>
                      <span className="text-xs font-mono text-slate-500 whitespace-nowrap ml-2">{exp.period}</span>
                    </div>
                    <p className="text-cyan-500 text-sm">{exp.course}</p>
                    <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{exp.school}</p>
                    <ul className={`list-disc list-inside mt-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {exp.details.map((detail, dIdx) => (
                         <li key={dIdx} className="text-xs">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Awards & Grants Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Awards */}
          <section id="honors" className="scroll-mt-24">
            <div>
              <SectionTitle icon={Award} title="Honors & Awards" isDark={darkMode} />
              <ul className="space-y-3">
                {resumeData.awards.map((award, idx) => (
                  <li key={idx} className={`flex items-start justify-between text-sm border-b pb-2 last:border-0 ${darkMode ? 'border-slate-800/50' : 'border-slate-200'}`}>
                    <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{award.title}</span>
                    <span className="font-mono text-slate-500 text-xs whitespace-nowrap ml-4">{award.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Grants */}
          <section>
            <div>
              <SectionTitle icon={Award} title="Grants & Fellowships" isDark={darkMode} />
              <ul className="space-y-3">
                {resumeData.grants.map((grant, idx) => (
                  <li key={idx} className={`flex flex-col sm:flex-row sm:items-start justify-between text-sm border-b pb-2 last:border-0 ${darkMode ? 'border-slate-800/50' : 'border-slate-200'}`}>
                    <div className="flex flex-col">
                      <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{grant.title}</span>
                      <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{grant.org}, {grant.amount}</span>
                    </div>
                    <span className="font-mono text-slate-500 text-xs whitespace-nowrap sm:ml-4 mt-1 sm:mt-0">{grant.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

      </main>

      {/* Footer */}
      <footer className={`py-8 text-center text-sm border-t ${darkMode ? 'border-slate-800/50 bg-slate-950 text-slate-600' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>
        <p>© {new Date().getFullYear()} Hyunho Kook. Last updated: 2025-11-24</p>
      </footer>
    </div>
  );
}