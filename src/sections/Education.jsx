import { Cpu } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { useTheme } from '../contexts/ThemeContext';
import { resumeData } from '../data/resumeData';

export default function Education() {
  const { darkMode } = useTheme();
  return (
    <section id="education" className="scroll-mt-24">
      <SectionTitle icon={Cpu} title="Education" />
      <div className="space-y-6">
        {resumeData.education.map((edu, idx) => (
          <Card key={idx}>
            <div className="space-y-1">
              <h3 className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>{edu.school}</h3>
              <p className="text-cyan-500 text-sm">{edu.degree}</p>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Advisor: {edu.advisor}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-slate-500 font-mono mt-2 gap-1">
                <span>{edu.period}</span>
                <span>GPA: {edu.gpa}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
