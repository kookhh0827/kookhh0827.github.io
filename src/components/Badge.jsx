import { useTheme } from '../contexts/ThemeContext';

export default function Badge({ children, type = 'default' }) {
  const { darkMode } = useTheme();
  const styles = {
    default: darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700',
    success: darkMode
      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
      : 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    warning: darkMode
      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
      : 'bg-amber-100 text-amber-700 border border-amber-200',
    tech: darkMode
      ? 'bg-cyan-900/30 text-cyan-300 border border-cyan-800/50 text-xs font-mono'
      : 'bg-cyan-50 text-cyan-700 border border-cyan-200 text-xs font-mono',
  };
  return (
    <span className={`px-2 py-1 rounded-md text-sm font-medium ${styles[type] || styles.default}`}>
      {children}
    </span>
  );
}
