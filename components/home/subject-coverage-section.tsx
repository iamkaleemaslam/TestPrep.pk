import Link from 'next/link';
import { subjects } from '@/lib/data/sample-data';
import { SubjectIcon } from '@/components/ui/subject-icon';
import { SectionHeading } from '@/components/ui/section-heading';

export function SubjectCoverageSection() {
  return (
    <section className="container-shell py-16">
      <SectionHeading eyebrow="Coverage" title="Subject Coverage" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/${subject.slug}`} className="card group p-6 transition hover:-translate-y-1 hover:border-brand-teal">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-teal">
              <SubjectIcon icon={subject.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{subject.name}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{subject.description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="https://expansion.pk/subjects/" className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold dark:border-slate-700">View All Subjects</Link>
      </div>
    </section>
  );
}
