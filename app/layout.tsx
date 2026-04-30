import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fore CPM Dashboard',
  description: 'Executive dashboard prototype for Fore Coffee using CPM approach.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
