import { useTheme } from '../contexts/ThemeContext';

export default function Card({ children, className = '' }) {
  const { darkMode } = useTheme();
  return (
    <div className={`backdrop-blur-sm border p-6 rounded-xl transition-all hover:shadow-lg ${
      darkMode
        ? 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]'
        : 'bg-white/80 border-slate-200 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
      } ${className}`}>
      {children}
    </div>
  );
}
