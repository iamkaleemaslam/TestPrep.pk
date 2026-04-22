import './globals.css';
import type { Metadata } from 'next';
import { AppProvider } from '@/contexts/app-context';

export const metadata: Metadata = {
  title: 'Expansion.pk',
  description: 'MCQ exam preparation platform for Pakistani job tests.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
