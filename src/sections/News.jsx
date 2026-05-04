import React from 'react';
import { Newspaper } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { useTheme } from '../contexts/ThemeContext';
import { newsData } from '../data/newsData';

export default function News() {
  const { darkMode } = useTheme();
  return (
    <section id="news" className="scroll-mt-24">
      <SectionTitle icon={Newspaper} title="News" />
      <div className="grid gap-4">
        {newsData.map((news, idx) => (
          <Card key={idx} className="group cursor-default">
            <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
              <div className="space-y-2">
                <h3 className={`text-lg font-bold transition-colors ${darkMode ? 'text-slate-100 group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-cyan-600'}`}>
                  {news.title}
                </h3>
                <p className={`text-xs font-mono mb-2 ${darkMode ? 'text-cyan-500' : 'text-cyan-600'}`}>
                  {news.date}
                </p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {news.description.split('Intelligent Computing Lab').map((part, i, arr) =>
                    i === arr.length - 1 ? part : (
                      <React.Fragment key={i}>
                        {part}
                        <a href={news.link} target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                          Intelligent Computing Lab
                        </a>
                      </React.Fragment>
                    )
                  )}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
