'use client';

import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const item = window.localStorage.getItem(key);
    if (item) {
      setValue(JSON.parse(item));
    }
  }, [key]);

  useEffect(() => {
    if (mounted) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, mounted]);

  return [value, setValue] as const;
}
