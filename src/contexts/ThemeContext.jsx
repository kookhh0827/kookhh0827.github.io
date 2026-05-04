import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ darkMode: true, toggleTheme: () => {} });

const STORAGE_KEY = 'theme';

const getInitial = () => {
  if (typeof window === 'undefined') return true;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return false;
  return true;
};

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(getInitial);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((v) => !v);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
