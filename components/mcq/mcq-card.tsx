'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ExternalLink, Star } from 'lucide-react';
import { useAppContext } from '@/contexts/app-context';
import { MCQ } from '@/types';
import { cn } from '@/lib/utils';

interface McqCardProps {
  mcq: MCQ;
  titleAs?: 'h2' | 'h3';
  clickableTitle?: boolean;
}

export function McqCard({ mcq, titleAs = 'h2', clickableTitle = true }: McqCardProps) {
  const { mode } = useAppContext();
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(mode === 'study');
  const TitleTag = titleAs;

  const reveal = mode === 'study' || Boolean(selected);

  useEffect(() => {
    if (mode === 'study') {
      setOpen(true);
    }
  }, [mode]);

  const optionState = useMemo(() => {
    return (optionId: string) => {
      if (mode === 'study') {
        return optionId === mcq.correctOptionId
          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300'
          : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200';
      }

      if (!selected) {
        return 'border-slate-200 bg-white text-slate-700 hover:border-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200';
      }

      if (optionId === mcq.correctOptionId) {
        return 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300';
      }

      if (optionId === selected && optionId !== mcq.correctOptionId) {
        return 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-300';
      }

      return 'border-slate-200 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400';
    };
  }, [mcq.correctOptionId, mode, selected]);

  return (
    <article className="card p-6 sm:p-7">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="badge bg-brand-teal/10 text-brand-teal">{mcq.subject}</span>
          <span className="badge bg-brand-gold/20 text-slate-900 dark:text-slate-950">{mcq.examType}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="badge bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">{mcq.difficulty}</span>
          {mcq.important ? <span title="Important question" className="badge bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300"><Star className="mr-1 h-3.5 w-3.5 fill-current" />Important</span> : null}
        </div>
      </div>

      <TitleTag className="text-xl font-bold leading-snug text-slate-950 dark:text-white">
        {clickableTitle ? (
          <Link href={`/${mcq.subjectSlug}/${mcq.slug}`} className="transition hover:text-brand-teal">
            {mcq.question}
          </Link>
        ) : (
          mcq.question
        )}
      </TitleTag>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {mcq.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              if (mode === 'quiz' && !selected) {
                setSelected(option.id);
                setOpen(true);
              }
            }}
            className={cn('rounded-2xl border px-4 py-4 text-left text-sm font-medium transition', optionState(option.id))}
          >
            {option.text}
          </button>
        ))}
      </div>

      {reveal ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex w-full items-center justify-between bg-slate-50 px-4 py-3 text-left text-sm font-semibold dark:bg-slate-900/80"
          >
            Explanation
            <ChevronDown className={cn('h-4 w-4 transition', open ? 'rotate-180' : '')} />
          </button>
          {open ? (
            <div className="space-y-4 px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
              <p>{mcq.explanation}</p>
              {mcq.sourceUrl ? (
                <Link href={mcq.sourceUrl} target="_blank" className="inline-flex items-center gap-2 font-semibold text-brand-teal">
                  Source Link <ExternalLink className="h-4 w-4" />
                </Link>
              ) : null}
              {mcq.imageUrl ? (
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
                  <Image src={mcq.imageUrl} alt={mcq.question} width={1200} height={800} className="h-auto w-full object-cover" />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
