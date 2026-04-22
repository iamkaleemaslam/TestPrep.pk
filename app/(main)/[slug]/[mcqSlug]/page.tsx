import { notFound } from 'next/navigation';
import { ArchiveSidebar } from '@/components/mcq/archive-sidebar';
import { McqCard } from '@/components/mcq/mcq-card';
import { mcqs, subjects } from '@/lib/data/sample-data';

export function generateStaticParams() {
  return mcqs.map((mcq) => ({ slug: mcq.subjectSlug, mcqSlug: mcq.slug }));
}

export default async function SingleMcqPage({ params }: { params: Promise<{ slug: string; mcqSlug: string }> }) {
  const { slug, mcqSlug } = await params;
  const subject = subjects.find((item) => item.slug === slug);
  const mcq = mcqs.find((item) => item.subjectSlug === slug && item.slug === mcqSlug);

  if (!subject || !mcq) notFound();

  const related = mcq.relatedIds?.map((id) => mcqs.find((item) => item.id === id)).filter(Boolean) || [];

  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <McqCard mcq={mcq} clickableTitle={false} />
          {related.length ? (
            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-950 dark:text-white">Related MCQs</h2>
              <div className="space-y-5">
                {related.map((item) => <McqCard key={item!.id} mcq={item!} titleAs="h3" />)}
              </div>
            </section>
          ) : null}
        </div>
        <ArchiveSidebar />
      </div>
    </section>
  );
}
