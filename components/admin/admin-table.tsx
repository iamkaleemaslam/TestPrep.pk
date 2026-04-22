'use client';

import { useState } from 'react';
import { mcqs } from '@/lib/data/sample-data';

export function AdminTable() {
  const [rows, setRows] = useState(mcqs.slice(0, 8));

  function remove(id: string) {
    setRows((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">MCQs</h2>
          <p className="text-sm text-slate-500">Add, edit, delete and approve user submissions.</p>
        </div>
        <button className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white">Add MCQ</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900/70">
            <tr>
              {['Question', 'Subject', 'Exam', 'Difficulty', 'Actions'].map((head) => <th key={head} className="px-6 py-4 font-semibold">{head}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-slate-200 dark:border-slate-800">
                <td className="px-6 py-4">{row.question}</td>
                <td className="px-6 py-4">{row.subject}</td>
                <td className="px-6 py-4">{row.examType}</td>
                <td className="px-6 py-4">{row.difficulty}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-full border border-slate-200 px-3 py-1.5 dark:border-slate-700">Edit</button>
                    <button onClick={() => remove(row.id)} className="rounded-full border border-rose-200 px-3 py-1.5 text-rose-600 dark:border-rose-800">Delete</button>
                    <button className="rounded-full border border-emerald-200 px-3 py-1.5 text-emerald-600 dark:border-emerald-800">Approve</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
