import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="card w-full max-w-md p-8">
      <h1 className="text-3xl font-bold text-slate-950 dark:text-white">Sign In</h1>
      <div className="mt-8 space-y-4">
        <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-900" placeholder="Email" />
        <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-900" placeholder="Password" />
        <button className="w-full rounded-full bg-brand-teal px-5 py-3 text-sm font-semibold text-white">Sign In</button>
      </div>
      <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">No account? <Link href="/sign-up" className="font-semibold text-brand-teal">Create one</Link></p>
    </div>
  );
}
