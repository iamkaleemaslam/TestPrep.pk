interface FilterSelectProps {
  label: string;
  options: string[];
  value?: string;
}

export function FilterSelect({ label, options, value }: FilterSelectProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</span>
      <select defaultValue={value} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-teal dark:border-slate-700 dark:bg-slate-900">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
