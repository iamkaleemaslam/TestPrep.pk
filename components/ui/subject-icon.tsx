import { Atom, Calculator, Flag, Globe2, Laptop2, Languages, Map, MoonStar } from 'lucide-react';

const icons = {
  Globe2,
  Flag,
  MoonStar,
  Atom,
  Laptop2,
  Languages,
  Calculator,
  Map
};

export function SubjectIcon({ icon, className = 'h-5 w-5' }: { icon: string; className?: string }) {
  const Icon = icons[icon as keyof typeof icons] || Globe2;
  return <Icon className={className} />;
}
