import { BookOpen } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { useTheme } from '../contexts/ThemeContext';
import { resumeData } from '../data/resumeData';

export default function Teaching() {
  const { darkMode } = useTheme();
  return (
    <section>
      <SectionTitle icon={BookOpen} title="Teaching" />
      <div className="space-y-6">
        {resumeData.teaching.map((exp, idx) => (
          <Card key={idx}>
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>{exp.role}</h3>
                <span className="text-xs font-mono text-slate-500 whitespace-nowrap">{exp.period}</span>
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
  );
}
