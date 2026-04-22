import { UserPlus, BookOpen, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  { title: 'Create Account', description: 'Join free and unlock subject-wise learning with progress tracking.', icon: UserPlus },
  { title: 'Choose Subject & Exam', description: 'Filter by PPSC, FPSC, NTS, KPPSC, SPSC and your target subject.', icon: BookOpen },
  { title: 'Practice & Improve', description: 'Study explanations, take quizzes and grow with mock tests.', icon: TrendingUp }
];

export function HowItWorksSection() {
  return (
    <section className="container-shell py-16">
      <SectionHeading eyebrow="Simple Flow" title="How It Works" />
      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/20 text-slate-950">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
