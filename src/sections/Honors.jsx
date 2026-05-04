import { Award, Trophy } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useTheme } from '../contexts/ThemeContext';
import { resumeData } from '../data/resumeData';

const TYPE_LABEL = {
  award: 'Award',
  grant: 'Grant',
};

export default function Honors() {
  const { darkMode } = useTheme();
  return (
    <section id="honors" className="scroll-mt-24">
      <SectionTitle icon={Award} title="Honors, Awards & Grants" />
      <ul className="space-y-3">
        {resumeData.honors.map((item, idx) => (
          <li
            key={idx}
            className={`flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-sm border-b pb-3 last:border-0 ${
              darkMode ? 'border-slate-800/50' : 'border-slate-200'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`mt-0.5 p-1.5 rounded-md flex-shrink-0 ${
                item.type === 'grant'
                  ? (darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600')
                  : (darkMode ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100 text-amber-600')
              }`}>
                <Trophy size={14} />
              </div>
              <div className="flex flex-col">
                <span className={`${darkMode ? 'text-slate-200' : 'text-slate-800'} font-medium`}>{item.title}</span>
                <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                  {item.org}
                  {item.detail && <span> · {item.detail}</span>}
                  <span className={`ml-2 uppercase tracking-wider text-[10px] ${
                    item.type === 'grant'
                      ? (darkMode ? 'text-blue-400/70' : 'text-blue-600/70')
                      : (darkMode ? 'text-amber-400/70' : 'text-amber-600/70')
                  }`}>
                    {TYPE_LABEL[item.type]}
                  </span>
                </span>
              </div>
            </div>
            <span className="font-mono text-slate-500 text-xs whitespace-nowrap sm:ml-4 mt-1 sm:mt-0">{item.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
