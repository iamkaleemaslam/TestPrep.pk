const plans = [
  { title: 'Free', price: 'PKR 0', features: ['Basic MCQs', 'Study mode', 'Limited tests'] },
  { title: 'Pro Monthly', price: 'PKR 500', features: ['All MCQs', 'All tests', 'Dashboard insights'], popular: true },
  { title: 'Pro Yearly', price: 'PKR 5000', features: ['Everything in Pro', 'Best annual deal', 'Priority support'] }
];

export default function PricingPage() {
  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Pricing</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Affordable plans built for serious exam preparation.</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.title} className={`card p-7 ${plan.popular ? 'border-brand-teal ring-2 ring-brand-teal/20' : ''}`}>
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{plan.title}</h2>
            <p className="mt-3 text-4xl font-bold text-brand-teal">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {plan.features.map((feature) => <li key={feature}>• {feature}</li>)}
            </ul>
            <button className="mt-8 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}
