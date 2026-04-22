import { notFound } from 'next/navigation';
import { ArchiveSidebar } from '@/components/mcq/archive-sidebar';
import { McqCard } from '@/components/mcq/mcq-card';
import { FilterSelect } from '@/components/ui/filter-select';
import { Pagination } from '@/components/ui/pagination';
import { mcqs, subjects, subtopicsBySubject } from '@/lib/data/sample-data';

export function generateStaticParams() {
  return subjects.map((subject) => ({ slug: subject.slug }));
}

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const subject = subjects.find((item) => item.slug === slug);

  if (!subject) notFound();

  const items = mcqs.filter((item) => item.subjectSlug === slug);
  const subtopics = subtopicsBySubject[slug] || [];

  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="card grid gap-6 p-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">{subject.name}</h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subject.description}</p>
        </div>
        <div className="rounded-2xl bg-brand-teal/10 px-6 py-5 text-center">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Total MCQs</p>
          <p className="mt-2 text-4xl font-bold text-brand-teal">{subject.mcqCount}+</p>
        </div>
      </div>

      <div className="card mt-8 grid gap-4 p-5 md:grid-cols-2">
        <FilterSelect label="Exam" options={['All Exams', 'PPSC', 'FPSC', 'NTS', 'SPSC', 'KPPSC']} />
        <FilterSelect label="Difficulty" options={['Select Difficulty Level', 'All', 'Easy', 'Medium', 'Hard']} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {subtopics.map((subtopic) => (
          <button key={subtopic} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-brand-teal hover:text-brand-teal dark:border-slate-700">
            {subtopic}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <h2 className="mb-5 text-2xl font-bold text-slate-950 dark:text-white">{subject.name} MCQs</h2>
          <div className="space-y-5">
            {items.map((mcq) => <McqCard key={mcq.id} mcq={mcq} />)}
          </div>
          <Pagination />
        </div>
        <ArchiveSidebar />
      </div>
    </section>
  );
}
