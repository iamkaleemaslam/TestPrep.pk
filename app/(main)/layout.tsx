import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(4,159,130,0.08),transparent_35%)]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
