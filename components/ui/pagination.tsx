export function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {['Prev', '1', '2', '3', 'Next'].map((item, index) => (
        <button
          key={item}
          className={`rounded-xl px-4 py-2 text-sm font-semibold ${
            index === 1 ? 'bg-brand-teal text-white' : 'border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
