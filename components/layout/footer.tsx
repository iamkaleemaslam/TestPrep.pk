import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

const quickLinks = ['About Us', 'Contact Us', 'Pricing', 'Past Papers', 'Mock Tests'];
const subjects = ['Pakistan Current Affairs', 'World Current Affairs', 'Geography', 'Urdu', 'View All'];
const exams = ['PPSC', 'FPSC', 'NTS', 'SPSC', 'KPPSC'];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="container-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm text-slate-600 dark:text-slate-300">Pakistan’s focused exam prep platform for PPSC, FPSC, NTS, KPPSC, SPSC and more.</p>
          <div className="mt-5 flex items-center gap-3 text-slate-500">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
            <Linkedin className="h-5 w-5" />
          </div>
        </div>
        <FooterList title="Quick Links" items={quickLinks} />
        <FooterList title="Subjects" items={subjects} />
        <FooterList title="Exams" items={exams} />
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="transition hover:text-brand-teal">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
