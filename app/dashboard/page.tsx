import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { mcqs, mockTests, testAttempts } from '@/lib/data/sample-data';

export default function DashboardPage() {
  const weakSubjects = Object.entries(
    testAttempts.flatMap((attempt) => attempt.subjectBreakdown).reduce<Record<string, number[]>>((acc, item) => {
      acc[item.subject] = [...(acc[item.subject] || []), item.accuracy];
      return acc;
    }, {})
  ).map(([subject, values]) => ({ subject, accuracy: Math.round(values.reduce((a, b) => a + b, 0) / values.length) })).sort((a, b) => a.accuracy - b.accuracy);

  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">User Dashboard</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Performance analytics, attempts, weak areas and saved questions.</p>
      </div>
      <div className="mt-10 space-y-8">
        <DashboardStats />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Weak Subjects Analysis</h2>
            <div className="mt-5 space-y-4">
              {weakSubjects.map((item) => (
                <div key={item.subject}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{item.subject}</span>
                    <span className="font-semibold text-brand-teal">{item.accuracy}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-3 rounded-full bg-brand-teal" style={{ width: `${item.accuracy}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Bookmarked Questions</h2>
            <div className="mt-5 space-y-4">
              {mcqs.slice(0, 4).map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 p-4 text-sm dark:border-slate-700">
                  {item.question}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Recent Activity</h2>
            <div className="mt-5 space-y-4">
              {testAttempts.map((attempt) => {
                const test = mockTests.find((item) => item.id === attempt.testId);
                return (
                  <div key={attempt.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                    <p className="font-semibold text-slate-950 dark:text-white">{test?.title}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Score {attempt.score}/{attempt.total} • {attempt.points} points • {attempt.createdAt}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Total Attempts</h2>
            <div className="mt-5 space-y-4">
              {testAttempts.map((attempt) => (
                <div key={attempt.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                  <p className="font-semibold text-slate-950 dark:text-white">Attempt ID: {attempt.id}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Correct {attempt.correct} • Wrong {attempt.wrong} • Points {attempt.points}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
