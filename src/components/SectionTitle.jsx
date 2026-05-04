import { useTheme } from '../contexts/ThemeContext';

export default function SectionTitle({ icon: Icon, title }) {
  const { darkMode } = useTheme();
  return (
    <div className="flex items-center gap-3 mb-8 group">
      <div className={`p-2 rounded-lg transition-colors ${
        darkMode ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20' : 'bg-cyan-600/10 text-cyan-600 group-hover:bg-cyan-600/20'
      }`}>
        <Icon size={24} />
      </div>
      <h2 className={`text-2xl font-bold tracking-tight relative ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
        {title}
        <span className={`absolute -bottom-2 left-0 w-12 h-1 rounded-full group-hover:w-full transition-all duration-300 opacity-50 ${darkMode ? 'bg-cyan-500' : 'bg-cyan-600'}`}></span>
      </h2>
    </div>
  );
}
