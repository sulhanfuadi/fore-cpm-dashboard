import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fore CPM',
  description: 'Executive dashboard prototype for Fore Coffee using a CPM approach.',
  icons: {
    icon: '/fore-logo.png',
    shortcut: '/fore-logo.png',
    apple: '/fore-logo.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
