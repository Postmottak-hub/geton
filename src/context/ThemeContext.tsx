import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyThemeToDocument(theme: Theme): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('theme-light');
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
  } else {
    root.classList.remove('theme-light');
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  }
  root.setAttribute('data-theme', theme);
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('geton_theme') as Theme | null;
      if (saved === 'light' || saved === 'dark') {
        applyThemeToDocument(saved);
        return saved;
      }
    } catch {
      // Ignore storage access issues
    }
    applyThemeToDocument('dark');
    return 'dark';
  });

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    applyThemeToDocument(nextTheme);
    try {
      localStorage.setItem('geton_theme', nextTheme);
    } catch {
      // Ignore storage access issues
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
