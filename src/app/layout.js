'use client';

import { Inter } from 'next/font/google';
import Layout from '@layout/Layout';
import '@styles/tailwind.css';
import { ProviderAuth } from '@hooks/useAuth';
import useInitialState from '@hooks/useInitialState';

const inter = Inter({ subsets: ['latin'] });

/* export const metadata = {
  title: 'React Shop',
  description: '...',
}; */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ProviderAuth>
        <Layout />
        <div className="min-h-full">
            <main>
              <section className="max-w-7xl mx-auto py-6 sm:px-6">{children}</section>
            </main>
        </div>
      </ProviderAuth>
      </body>
    </html>
  );
}
