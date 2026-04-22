import { leaderboard } from '@/lib/data/sample-data';

export default function LeaderboardPage() {
  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Leaderboard</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">See top performers, daily streaks and badge winners across the platform.</p>
      </div>
      <div className="mt-10 grid gap-4">
        {leaderboard.map((user, index) => (
          <div key={user.id} className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-teal">Rank #{index + 1}</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{user.name}</h2>
              <p className="mt-2 text-sm text-slate-500">{user.badge} badge • {user.streak} day streak</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Points</p>
              <p className="text-3xl font-bold text-brand-teal">{user.points}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
