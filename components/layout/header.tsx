'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/ui/logo';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const subjectLinks = [
  ['General Knowledge', '/general-knowledge-mcqs'],
  ['Pakistan Studies', '/pakistan-studies-mcqs'],
  ['Islamic Studies', '/islamic-studies-mcqs'],
  ['Everyday Science', '/everyday-science-mcqs'],
  ['Computer', '/computer-mcqs'],
  ['English', '/english-mcqs'],
  ['Mathematics', '/mathematics-mcqs'],
  ['View All', '/subjects']
] as const;

const links = [
  ['Home', '/'],
  ['Past Papers', '/past-papers'],
  ['Mock Tests', '/mock-tests'],
  ['Leaderboard', '/leaderboard'],
  ['Pricing', '/pricing']
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3 lg:hidden">
          <button className="rounded-full border border-slate-200 p-2 dark:border-slate-700" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <Link href="/sign-in" className="text-sm font-semibold">Sign In</Link>
            <Link href="/sign-up" className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white">Sign Up</Link>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-1/4"><Logo /></div>
        <div className="flex lg:hidden"><Logo /></div>

        <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-8">
          <Link href="/" className="text-sm font-semibold text-slate-700 transition hover:text-brand-teal dark:text-slate-200">Home</Link>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-brand-teal dark:text-slate-200">
              Subjects <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
              {subjectLinks.map(([label, href]) => (
                <Link key={label} href={href} className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-teal dark:text-slate-300 dark:hover:bg-slate-800">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {links.slice(1).map(([label, href]) => (
            <Link key={label} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-brand-teal dark:text-slate-200">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:w-1/4 lg:justify-end">
          <div className="hidden lg:flex"><ModeToggle /></div>
          <div className="lg:hidden scale-90 origin-right"><ModeToggle /></div>
          <ThemeToggle />
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/sign-in" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700">Sign In</Link>
            <Link href="/sign-up" className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white">Sign Up</Link>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden" onClick={() => setOpen(false)}>
          <aside className="h-full w-[86%] max-w-sm bg-white p-6 dark:bg-slate-950" onClick={(event) => event.stopPropagation()}>
            <div className="mb-8 flex items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)} className="rounded-full border border-slate-200 p-2 dark:border-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-6 flex items-center gap-3">
              <ModeToggle />
            </div>
            <div className="space-y-2">
              <Link href="/" className="block rounded-xl px-4 py-3 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">Home</Link>
              {subjectLinks.map(([label, href]) => (
                <Link key={label} href={href} className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">{label}</Link>
              ))}
              {links.slice(1).map(([label, href]) => (
                <Link key={label} href={href} className="block rounded-xl px-4 py-3 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">{label}</Link>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <Link href="/sign-in" className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold dark:border-slate-700">Sign In</Link>
              <Link href="/sign-up" className="rounded-full bg-brand-teal px-4 py-3 text-center text-sm font-semibold text-white">Sign Up</Link>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
