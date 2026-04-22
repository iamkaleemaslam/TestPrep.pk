import Link from 'next/link';
import { mcqs } from '@/lib/data/sample-data';
import { SectionHeading } from '@/components/ui/section-heading';

export function LatestMcqsSection() {
  const grouped = ['Pakistan Studies', 'General Knowledge', 'Everyday Science'].map((subject) => ({
    subject,
    items: mcqs.filter((mcq) => mcq.subject === subject).slice(0, 5)
  }));

  return (
    <section className="container-shell py-16">
      <SectionHeading eyebrow="Fresh Practice" title="Latest MCQs" />
      <div className="grid gap-6 lg:grid-cols-3">
        {grouped.map((group) => (
          <div key={group.subject} className="card p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.subject}</h3>
            </div>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                  <Link href={`/${item.subjectSlug}/${item.slug}`} className="text-sm font-semibold text-slate-900 transition hover:text-brand-teal dark:text-white">{item.question}</Link>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {item.options.slice(0, 4).map((option) => <li key={option.id}>• {option.text}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="https://expansion.pk/mcqs/" className="rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white">View All</Link>
      </div>
    </section>
  );
}
