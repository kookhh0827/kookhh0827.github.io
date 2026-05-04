import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { darkMode } = useTheme();
  return (
    <footer className={`py-8 text-center text-sm border-t ${darkMode ? 'border-slate-800/50 bg-slate-950 text-slate-600' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>
      <p>© {new Date().getFullYear()} Hyunho Kook</p>
    </footer>
  );
}
