'use client';

import { Moon, Sun } from 'lucide-react';
import { useAppContext } from '@/contexts/app-context';

export function ThemeToggle() {
  const { theme, setTheme } = useAppContext();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand-teal hover:text-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
