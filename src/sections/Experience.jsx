import { Terminal } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useTheme } from '../contexts/ThemeContext';
import { resumeData } from '../data/resumeData';

const isPastPeriod = (period) => {
  const end = period.split('-').slice(-1)[0]?.trim();
  if (!end || /present/i.test(end)) return false;
  const parsed = Date.parse(end);
  if (Number.isNaN(parsed)) return false;
  return parsed < Date.now();
};

export default function Experience() {
  const { darkMode } = useTheme();
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionTitle icon={Terminal} title="Research Experience" />
      <div className={`relative border-l-2 ml-3 space-y-12 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        {resumeData.experience.map((exp, idx) => {
          const past = isPastPeriod(exp.period);
          return (
            <div key={idx} className="relative pl-8 group">
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all group-hover:scale-110 ${
                darkMode
                  ? 'bg-slate-900 border-slate-600 group-hover:border-cyan-400'
                  : 'bg-white border-slate-300 group-hover:border-cyan-500'
              }`}></div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>{exp.role}</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-cyan-500">{exp.period}</span>
                    {past && (
                      <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        darkMode ? 'bg-slate-800 text-slate-500 border border-slate-700' : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}>
                        Completed
                      </span>
                    )}
                  </div>
                </div>
                <div className={`font-medium flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <span>{exp.org}</span>
                  <span className={`hidden sm:block w-1 h-1 rounded-full ${darkMode ? 'bg-slate-600' : 'bg-slate-400'}`}></span>
                  <span className={`text-sm font-normal ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{exp.location}</span>
                </div>
                <ul className={`list-disc list-outside ml-4 space-y-1 pt-2 text-sm marker:text-cyan-500/50 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
