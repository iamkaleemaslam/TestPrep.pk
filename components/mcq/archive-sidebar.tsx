import Link from 'next/link';
import { mockTests, subjects } from '@/lib/data/sample-data';

export function ArchiveSidebar() {
  return (
    <aside className="space-y-6">
      <div className="card p-5">
        <input placeholder="Search MCQs" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-teal dark:border-slate-700 dark:bg-slate-900" />
      </div>
      <SidebarList title="Mock Tests" items={mockTests.map((item) => ({ label: item.title, href: '/mock-tests' }))} />
      <SidebarList title="Subjects" items={subjects.map((item) => ({ label: item.name, href: `/${item.slug}` }))} />
      <SidebarList title="Past Papers" items={['PPSC Past Papers', 'FPSC Past Papers', 'NTS Past Papers', 'KPPSC Past Papers'].map((item) => ({ label: item, href: '/past-papers' }))} />
    </aside>
  );
}

function SidebarList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="card p-5">
      <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 transition hover:border-brand-teal hover:text-brand-teal dark:border-slate-700 dark:text-slate-300">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
