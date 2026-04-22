const papers = ['PPSC Past Papers', 'FPSC Past Papers', 'NTS Past Papers', 'SPSC Past Papers', 'KPPSC Past Papers'];

export default function PastPapersPage() {
  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Past Papers</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Browse previously asked questions and high-yield paper collections by exam authority.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {papers.map((paper) => (
          <div key={paper} className="card p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{paper}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Important paper-based preparation archives with repeated MCQs.</p>
            <button className="mt-5 rounded-full bg-brand-teal px-5 py-3 text-sm font-semibold text-white">Open Archive</button>
          </div>
        ))}
      </div>
    </section>
  );
}
