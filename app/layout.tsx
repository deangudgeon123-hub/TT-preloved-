import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TT Preloved | Premium Preloved Finds',
  description: 'High-end preloved pieces, carefully selected.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
