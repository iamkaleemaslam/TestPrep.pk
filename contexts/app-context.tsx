'use client';

import { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Mode, Theme } from '@/types';

interface AppContextType {
  mode: Mode;
  setMode: (value: Mode) => void;
  theme: Theme;
  setTheme: (value: Theme) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useLocalStorage<Mode>('expansion-mode', 'study');
  const [theme, setTheme] = useLocalStorage<Theme>('expansion-theme', 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <AppContext.Provider value={{ mode, setMode, theme, setTheme }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }

  return context;
}
