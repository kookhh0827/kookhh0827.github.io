import { FileText, Github, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { useTheme } from '../contexts/ThemeContext';
import { resumeData } from '../data/resumeData';

const LINK_META = {
  arxiv: { label: 'arXiv', icon: ExternalLink },
  code: { label: 'Code', icon: Github },
};

function PubLink({ type, href, darkMode }) {
  const meta = LINK_META[type];
  if (!meta) return null;
  const Icon = meta.icon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${
        darkMode
          ? 'border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/50'
          : 'border-slate-300 text-slate-600 hover:border-cyan-500/50 hover:text-cyan-600 hover:bg-cyan-50'
      }`}
    >
      <Icon size={12} />
      {meta.label}
    </a>
  );
}

function groupByYear(publications) {
  const groups = new Map();
  for (const pub of publications) {
    const year = pub.year;
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(pub);
  }
  return Array.from(groups.entries()).sort((a, b) => b[0] - a[0]);
}

export default function Publications() {
  const { darkMode } = useTheme();
  const grouped = groupByYear(resumeData.publications);

  return (
    <section id="publications" className="scroll-mt-24">
      <SectionTitle icon={FileText} title="Selected Publications" />
      <div className="space-y-8">
        {grouped.map(([year, pubs]) => (
          <div key={year} className="grid grid-cols-[auto_1fr] gap-6">
            <div className="pt-6">
              <span className={`font-mono text-sm font-bold tracking-wider ${darkMode ? 'text-cyan-500' : 'text-cyan-600'}`}>
                {year}
              </span>
            </div>
            <div className="grid gap-4">
              {pubs.map((pub, idx) => (
                <Card key={idx} className="group cursor-default">
                  <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h3 className={`text-lg font-bold transition-colors ${darkMode ? 'text-slate-100 group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-cyan-600'}`}>
                        {pub.title}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {pub.authors.split('**').map((part, i) =>
                          i % 2 === 1 ? <span key={i} className={`font-bold ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>{part}</span> : part
                        )}
                      </p>
                      {pub.links && Object.keys(pub.links).length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {Object.entries(pub.links).map(([type, href]) => (
                            <PubLink key={type} type={type} href={href} darkMode={darkMode} />
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0 flex md:flex-col items-start md:items-end gap-2">
                      <Badge type={pub.status === 'accepted' ? 'success' : 'warning'}>
                        {pub.venue}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
