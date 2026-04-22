import Link from 'next/link';
import { Award, Flame, Trophy } from 'lucide-react';
import { leaderboard } from '@/lib/data/sample-data';
import { SectionHeading } from '@/components/ui/section-heading';

export function LeaderboardPreview() {
  return (
    <section className="container-shell py-16">
      <SectionHeading eyebrow="Competitive Prep" title="Leaderboard" />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-7">
          <p className="text-lg text-slate-600 dark:text-slate-300">Stay motivated with points, streaks and badges as you practice daily and climb the ranks.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Feature icon={Trophy} title="Points" />
            <Feature icon={Flame} title="Streaks" />
            <Feature icon={Award} title="Badges" />
          </div>
          <Link href="/leaderboard" className="mt-8 inline-flex rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white">View Full Leaderboard</Link>
        </div>
        <div className="card p-7">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Top 5 Users</h3>
          <div className="mt-5 space-y-4">
            {leaderboard.map((user, index) => (
              <div key={user.id} className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 dark:border-slate-700">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">#{index + 1} {user.name}</p>
                  <p className="text-sm text-slate-500">{user.badge} • {user.streak} day streak</p>
                </div>
                <p className="text-lg font-bold text-brand-teal">{user.points}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title }: { icon: typeof Trophy; title: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
      <Icon className="h-7 w-7 text-brand-teal" />
      <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
    </div>
  );
}
