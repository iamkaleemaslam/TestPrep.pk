import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 font-bold tracking-tight text-slate-950 dark:text-white">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-teal text-lg text-white shadow-soft">E</span>
      <span className="text-lg sm:text-xl">Expansion.pk</span>
    </Link>
  );
}
