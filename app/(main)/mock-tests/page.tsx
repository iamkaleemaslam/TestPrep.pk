import { MockTestRunner } from '@/components/mock/mock-test-runner';

export default function MockTestsPage() {
  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Mock Tests</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Timed exam simulation with question passing, result review and share-ready performance cards.</p>
      </div>
      <div className="mt-10">
        <MockTestRunner />
      </div>
    </section>
  );
}
