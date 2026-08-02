import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harry Bosco Denis | CS Student & Software Developer',
  description:
    'Portfolio of Harry Bosco Denis — Computer Science student at the University of Cincinnati specializing in AI/ML, Android development, and full-stack systems.',
  keywords: [
    'Harry Bosco Denis',
    'Computer Science',
    'University of Cincinnati',
    'Software Engineer',
    'Python',
    'TensorFlow',
    'FastAPI',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
