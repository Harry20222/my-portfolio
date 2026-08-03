import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harry Bosco Denis | Personal Website',
  description:
    'Personal Website of Harry Bosco Denis — Computer Science Student & Software Developer at the University of Cincinnati.',
  keywords: [
    'Harry Bosco Denis',
    'Computer Science',
    'University of Cincinnati',
    'Software Engineer',
    'Python',
    'TensorFlow',
    'React',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#2f2f2f] antialiased">
        {children}
      </body>
    </html>
  );
}
