import Link from 'next/link';
import { subjects } from '@/lib/data/sample-data';
import { SubjectIcon } from '@/components/ui/subject-icon';

export default function SubjectsPage() {
  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">All Subjects</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Explore major preparation categories and subject-wise MCQ archives.</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/${subject.slug}`} className="card p-6 transition hover:-translate-y-1 hover:border-brand-teal">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-teal">
              <SubjectIcon icon={subject.icon} className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{subject.name}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{subject.description}</p>
            <p className="mt-4 text-sm font-semibold text-brand-teal">{subject.mcqCount}+ MCQs</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
