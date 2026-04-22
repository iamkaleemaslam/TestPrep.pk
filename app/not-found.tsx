import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="card max-w-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-slate-950 dark:text-white">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">The requested page does not exist in this Expansion.pk build.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white">Back to Home</Link>
      </div>
    </div>
  );
}
