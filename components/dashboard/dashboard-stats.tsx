import { testAttempts } from '@/lib/data/sample-data';

export function DashboardStats() {
  const totalAttempts = testAttempts.length;
  const accuracy = Math.round((testAttempts.reduce((sum, item) => sum + item.correct, 0) / testAttempts.reduce((sum, item) => sum + item.total, 0)) * 100);
  const points = testAttempts.reduce((sum, item) => sum + item.points, 0);

  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Stat title="Total Attempts" value={String(totalAttempts)} subtitle="Details of each attempted test" />
      <Stat title="Accuracy" value={`${accuracy}%`} subtitle="Based on all answered MCQs" />
      <Stat title="Points" value={points.toFixed(2)} subtitle="+1 correct, -0.25 wrong" />
    </div>
  );
}

function Stat({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="card p-6">
      <p className="text-sm text-slate-600 dark:text-slate-300">{title}</p>
      <p className="mt-2 text-3xl font-bold text-brand-teal">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}
