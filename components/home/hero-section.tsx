import Link from 'next/link';
import { stats } from '@/lib/data/sample-data';

export function HeroSection() {
  return (
    <section className="container-shell py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="badge bg-brand-teal/10 text-brand-teal">Pakistan Job Test Prep Platform</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">Master Your Job Tests With Confidence</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">Practice expertly curated MCQs, subject-wise prep, mock tests and past papers designed for PPSC, FPSC, NTS, KPPSC, SPSC and more.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/subjects" className="rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white">Browse Subjects</Link>
          <Link href="/pricing" className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold dark:border-slate-700">View Pricing</Link>
        </div>
      </div>
      <div className="card mx-auto mt-10 grid max-w-4xl gap-4 p-6 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl bg-slate-50 p-5 text-center dark:bg-slate-800/60">
            <p className="text-2xl font-bold text-brand-teal">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
