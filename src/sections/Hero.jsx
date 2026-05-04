import { Github, Mail, BookOpen, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { resumeData } from '../data/resumeData';

const socialBtnClass = (darkMode) => `flex items-center justify-center p-3 rounded-lg transition-all border ${
  darkMode
    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-cyan-500/50'
    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-500/50 shadow-sm'
}`;

export default function Hero() {
  const { darkMode } = useTheme();
  const { profile, interests } = resumeData;

  return (
    <section id="about" className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto z-10">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-cyan-500 font-mono text-sm tracking-wide">HELLO, I'M</h2>
            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              {profile.name}
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {profile.title}
            </p>
          </div>

          <p className={`max-w-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Researching <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Neuromorphic Computing</span>, <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Efficient AI</span>, and <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Generative Models</span>.
            Based in {profile.location}.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={socialBtnClass(darkMode)} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.scholar} target="_blank" rel="noopener noreferrer" className={socialBtnClass(darkMode)} aria-label="Google Scholar">
              <BookOpen size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={socialBtnClass(darkMode)} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className={socialBtnClass(darkMode)} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-white bg-slate-100 shadow-xl'}`}>
            <img
              src={profile.image}
              alt="Profile"
              className="w-full h-full object-cover object-top filter hover:brightness-110 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      <div className={`mt-20 pt-8 border-t ${darkMode ? 'border-slate-800/50' : 'border-slate-200'}`}>
        <h3 className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-wider">Research Interests</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, idx) => (
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
  );
}
