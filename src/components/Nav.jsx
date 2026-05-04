import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const NAV_ITEMS = ['About', 'News', 'Publications', 'Experience', 'Education', 'Honors'];

export default function Nav() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || menuOpen
        ? (darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200') + ' backdrop-blur-md border-b py-4'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <div className={`text-xl font-bold tracking-tighter font-mono ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
          KOOK<span className="text-cyan-500 animate-pulse">.</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-500 transition-colors hidden sm:block"
            >
              {item}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${
              darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`sm:hidden p-2 rounded-full transition-all ${
              darkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`sm:hidden mt-4 mx-6 rounded-lg overflow-hidden border ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'
        }`}>
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-sm transition-colors ${
                    darkMode ? 'text-slate-300 hover:bg-slate-800 hover:text-cyan-400' : 'text-slate-700 hover:bg-slate-100 hover:text-cyan-600'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
