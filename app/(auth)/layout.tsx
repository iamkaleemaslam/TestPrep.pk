export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(4,159,130,0.12),transparent_35%)] p-4">
      {children}
    </div>
  );
}
