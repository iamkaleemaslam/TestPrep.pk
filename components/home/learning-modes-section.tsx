import { BookMarked, BrainCircuit, FileStack } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const modes = [
  { title: 'Study/Quiz Mode', description: 'Instant answers, explanations and flexible practice flow.', icon: BookMarked },
  { title: 'Mock Tests', description: 'Real exam simulation with timer, pass queue and review screen.', icon: BrainCircuit },
  { title: 'Past Papers', description: 'Previous important exam questions for high-yield preparation.', icon: FileStack }
];

export function LearningModesSection() {
  return (
    <section className="container-shell py-16">
      <SectionHeading eyebrow="Flexible Prep" title="Learning Modes" />
      <div className="grid gap-6 md:grid-cols-3">
        {modes.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="card p-6">
              <Icon className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
