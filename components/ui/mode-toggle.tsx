'use client';

import { useAppContext } from '@/contexts/app-context';

export function ModeToggle() {
  const { mode, setMode } = useAppContext();

  return (
    <div className="flex rounded-full border border-slate-200 bg-white p-1 shadow-soft dark:border-slate-700 dark:bg-slate-900">
      {(['study', 'quiz'] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setMode(item)}
          className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
            mode === item
              ? 'bg-brand-teal text-white'
              : 'text-slate-600 hover:text-brand-teal dark:text-slate-300'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
