'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock3, RotateCcw } from 'lucide-react';
import { mcqs, mockTests } from '@/lib/data/sample-data';
import { MCQ } from '@/types';

interface ResultState {
  correct: number;
  wrong: number;
  total: number;
  points: number;
}

export function MockTestRunner() {
  const [examType, setExamType] = useState('All Exams');
  const [jobTitle, setJobTitle] = useState('All Jobs');
  const [selectedTestId, setSelectedTestId] = useState(mockTests[0].id);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remaining, setRemaining] = useState(mockTests[0].durationInMinutes * 60);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [passed, setPassed] = useState<string[]>([]);
  const [showPassedPrompt, setShowPassedPrompt] = useState(false);
  const [result, setResult] = useState<ResultState | null>(null);

  const tests = useMemo(() => {
    return mockTests.filter((test) => (examType === 'All Exams' ? true : test.examType === examType)).filter((test) => (jobTitle === 'All Jobs' ? true : test.jobTitle === jobTitle));
  }, [examType, jobTitle]);

  const selectedTest = tests.find((item) => item.id === selectedTestId) || tests[0] || mockTests[0];
  const questions = selectedTest.mcqIds.map((id) => mcqs.find((mcq) => mcq.id === id)).filter(Boolean) as MCQ[];
  const current = questions[currentIndex];

  useEffect(() => {
    setSelectedTestId(tests[0]?.id || mockTests[0].id);
  }, [tests]);

  useEffect(() => {
    if (!started || result) return;
    const timer = window.setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          submitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [started, result]);

  useEffect(() => {
    if (selectedTest) {
      setRemaining(selectedTest.durationInMinutes * 60);
    }
  }, [selectedTest]);

  function startTest() {
    setStarted(true);
    setCurrentIndex(0);
    setAnswers({});
    setPassed([]);
    setShowPassedPrompt(false);
    setResult(null);
    setRemaining(selectedTest.durationInMinutes * 60);
  }

  function selectAnswer(optionId: string) {
    setAnswers((prev) => ({ ...prev, [current.id]: optionId }));
    setPassed((prev) => prev.filter((id) => id !== current.id));
  }

  function passQuestion() {
    setPassed((prev) => Array.from(new Set([...prev, current.id])));
    if (currentIndex < questions.length - 1) setCurrentIndex((prev) => prev + 1);
  }

  function submitTest() {
    if (passed.length > 0 && !showPassedPrompt) {
      setShowPassedPrompt(true);
      return;
    }

    const correct = questions.filter((item) => answers[item.id] === item.correctOptionId).length;
    const wrong = Object.keys(answers).filter((questionId) => {
      const question = questions.find((item) => item.id === questionId);
      return question && answers[questionId] !== question.correctOptionId;
    }).length;

    setResult({
      correct,
      wrong,
      total: questions.length,
      points: Number((correct - wrong * 0.25).toFixed(2))
    });
  }

  if (!started) {
    return (
      <div className="space-y-8">
        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Start Mock Test</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Choose exam type, job title and test set before starting your simulation.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <select value={examType} onChange={(e) => setExamType(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
              {['All Exams', 'PPSC', 'FPSC', 'NTS', 'SPSC', 'KPPSC'].map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
              {['All Jobs', 'Assistant', 'Inspector', 'General'].map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={selectedTestId} onChange={(e) => setSelectedTestId(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
              {tests.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </div>
          <div className="mt-8 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/50">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{selectedTest.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{selectedTest.description}</p>
            <p className="mt-4 text-sm font-semibold text-brand-teal">{questions.length} MCQs • {selectedTest.durationInMinutes} Minutes</p>
          </div>
          <button onClick={startTest} className="mt-8 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white">Start Test</button>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="space-y-8">
        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Result</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <ResultCard title="Score" value={`${result.correct}/${result.total}`} />
            <ResultCard title="Correct" value={String(result.correct)} />
            <ResultCard title="Wrong" value={String(result.wrong)} />
            <ResultCard title="Points" value={String(result.points)} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Facebook', 'Instagram', 'WhatsApp', 'Email'].map((item) => (
              <Link key={item} href={`/api/share-result?platform=${item.toLowerCase()}&test=${selectedTest.title}&score=${result.correct}-${result.total}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700">Share on {item}</Link>
            ))}
            <button onClick={startTest} className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white">Retake Test</button>
          </div>
        </div>

        <div className="space-y-5">
          {questions.map((question) => (
            <div key={question.id} className="card p-6">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{question.question}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {question.options.map((option) => {
                  const isCorrect = option.id === question.correctOptionId;
                  const isPicked = answers[question.id] === option.id;
                  return (
                    <div key={option.id} className={`rounded-2xl border px-4 py-3 text-sm ${isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30' : isPicked ? 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/30' : 'border-slate-200 dark:border-slate-700'}`}>
                      {option.text}
                    </div>
                  );
                })}
              </div>
              <details className="mt-4 rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <summary className="cursor-pointer text-sm font-semibold">Explanation</summary>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{question.explanation}</p>
                {question.sourceUrl ? <Link href={question.sourceUrl} target="_blank" className="mt-3 inline-flex text-sm font-semibold text-brand-teal">Source</Link> : null}
              </details>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <Clock3 className="h-5 w-5 text-brand-teal" />
          {Math.floor(remaining / 60).toString().padStart(2, '0')}:{(remaining % 60).toString().padStart(2, '0')}
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <span className="badge bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">Remaining {questions.length - Object.keys(answers).length}</span>
          <span className="badge bg-brand-gold/30 text-slate-900 dark:text-slate-950">Passed {passed.length}</span>
        </div>
      </div>

      {showPassedPrompt ? (
        <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-300">You have passed questions left. Review them before final submission.</p>
          <div className="flex gap-3">
            <button onClick={() => { setCurrentIndex(questions.findIndex((item) => item.id === passed[0])); setShowPassedPrompt(false); }} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700">Review Passed</button>
            <button onClick={() => { setPassed([]); setShowPassedPrompt(false); submitTest(); }} className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white">Submit Anyway</button>
          </div>
        </div>
      ) : null}

      <div className="card p-6 sm:p-8">
        <div className="mb-4 text-sm font-semibold text-brand-teal">Question {currentIndex + 1} of {questions.length}</div>
        <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{current.question}</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {current.options.map((option) => (
            <button key={option.id} onClick={() => selectAnswer(option.id)} className={`rounded-2xl border px-4 py-4 text-left text-sm font-medium transition ${answers[current.id] === option.id ? 'border-brand-teal bg-brand-teal/10 text-brand-teal' : 'border-slate-200 hover:border-brand-teal dark:border-slate-700'}`}>
              {option.text}
            </button>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} disabled={currentIndex === 0} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold disabled:opacity-40 dark:border-slate-700"><ArrowLeft className="h-4 w-4" />Previous</button>
          <button onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))} disabled={currentIndex === questions.length - 1} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold disabled:opacity-40 dark:border-slate-700">Next<ArrowRight className="h-4 w-4" /></button>
          <button onClick={passQuestion} className="rounded-full border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-700 dark:border-amber-700 dark:text-amber-300">Pass for End</button>
          <button onClick={submitTest} className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white">Submit Test</button>
          <button onClick={startTest} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700"><RotateCcw className="h-4 w-4" />Reset</button>
        </div>
      </div>
    </div>
  );
}

function ResultCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
      <p className="text-sm text-slate-600 dark:text-slate-300">{title}</p>
      <p className="mt-2 text-2xl font-bold text-brand-teal">{value}</p>
    </div>
  );
}
