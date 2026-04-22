import { AdminTable } from '@/components/admin/admin-table';

const menu = ['Dashboard', 'MCQs', 'Subjects', 'Exams', 'Mock Tests', 'Users', 'Payments'];

export default function AdminPage() {
  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="card p-5">
          <h1 className="text-2xl font-bold text-slate-950 dark:text-white">Admin Panel</h1>
          <nav className="mt-6 space-y-2">
            {menu.map((item, index) => (
              <button key={item} className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold ${index === 1 ? 'bg-brand-teal text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                {item}
              </button>
            ))}
          </nav>
        </aside>
        <div className="space-y-6">
          <div className="grid gap-5 md:grid-cols-4">
            {['MCQs', 'Subjects', 'Users', 'Payments'].map((item, index) => (
              <div key={item} className="card p-5">
                <p className="text-sm text-slate-600 dark:text-slate-300">{item}</p>
                <p className="mt-2 text-3xl font-bold text-brand-teal">{[1520, 24, 860, 'PKR 2.1M'][index]}</p>
              </div>
            ))}
          </div>
          <AdminTable />
        </div>
      </div>
    </section>
  );
}
