'use client';

import { usePathname } from 'next/navigation';
import { Header, Footer } from '@/components/layout';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPrint = pathname.startsWith('/print');

  if (isPrint) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
