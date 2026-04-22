import Link from 'next/link';
import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const plans = [
  { title: 'Free', price: 'PKR 0', popular: false, features: ['Basic MCQ access', 'Study mode', 'Limited mock tests'] },
  { title: 'Pro Monthly', price: 'PKR 500', popular: true, features: ['Full MCQ access', 'All mock tests', 'Leaderboard & analytics'] },
  { title: 'Pro Yearly', price: 'PKR 5000', popular: false, features: ['Everything in Pro', 'Best yearly value', 'Priority updates'] }
];

export function PricingSection() {
  return (
    <section className="container-shell py-16">
      <SectionHeading eyebrow="Plans" title="Pricing" />
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.title} className={`card relative p-6 ${plan.popular ? 'border-brand-teal ring-2 ring-brand-teal/20' : ''}`}>
            {plan.popular ? <span className="badge absolute right-5 top-5 bg-brand-gold text-slate-950">Most Popular</span> : null}
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{plan.title}</h3>
            <p className="mt-3 text-3xl font-bold text-brand-teal">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3"><Check className="h-4 w-4 text-brand-teal" />{feature}</li>
              ))}
            </ul>
            <Link href="/pricing" className={`mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold ${plan.popular ? 'bg-brand-teal text-white' : 'border border-slate-200 dark:border-slate-700'}`}>
              Choose Plan
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
