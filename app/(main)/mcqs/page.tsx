import { ArchiveSidebar } from '@/components/mcq/archive-sidebar';
import { McqCard } from '@/components/mcq/mcq-card';
import { FilterSelect } from '@/components/ui/filter-select';
import { Pagination } from '@/components/ui/pagination';
import { mcqs } from '@/lib/data/sample-data';

export default function McqsPage() {
  const recent = [...mcqs].reverse().slice(0, 20);

  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="card grid gap-6 p-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">MCQs</h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">Browse subject-wise and exam-wise MCQs curated for Pakistani job test preparation.</p>
        </div>
        <div className="rounded-2xl bg-brand-teal/10 px-6 py-5 text-center">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Total MCQs</p>
          <p className="mt-2 text-4xl font-bold text-brand-teal">10K+</p>
        </div>
      </div>

      <div className="card mt-8 grid gap-4 p-5 md:grid-cols-3">
        <FilterSelect label="Exam" options={['All Exams', 'PPSC', 'FPSC', 'NTS', 'SPSC', 'KPPSC']} />
        <FilterSelect label="Subject" options={['All Subjects', 'Pakistan Current Affairs', 'World Current Affairs', 'Geography', 'Urdu']} />
        <FilterSelect label="Difficulty" options={['Select Difficulty Level', 'All', 'Easy', 'Medium', 'Hard']} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <h2 className="mb-5 text-2xl font-bold text-slate-950 dark:text-white">Recent MCQs</h2>
          <div className="space-y-5">
            {recent.map((mcq) => <McqCard key={mcq.id} mcq={mcq} />)}
          </div>
          <Pagination />
        </div>
        <ArchiveSidebar />
      </div>
    </section>
  );
}
