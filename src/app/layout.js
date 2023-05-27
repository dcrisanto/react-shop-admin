'use client';

import { Inter } from 'next/font/google';
import Layout from '@layout/Layout';
import '@styles/tailwind.css';

const inter = Inter({ subsets: ['latin'] });

/* export const metadata = {
  title: 'React Shop',
  description: '...',
}; */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <div className="min-h-full">
            <Layout />
            <main>
              <section className="max-w-7xl mx-auto py-6 sm:px-6">{children}</section>
            </main>
          </div>
        </>
      </body>
    </html>
  );
}
