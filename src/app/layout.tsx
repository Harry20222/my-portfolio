import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://harryboscodenis.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Harry Bosco Denis | Software Developer & CS Student',
  description:
    'Harry Bosco Denis is a Computer Science student at the University of Cincinnati building AI, backend, and full-stack products for real-world impact.',
  keywords: [
    'Harry Bosco Denis',
    'Computer Science',
    'University of Cincinnati',
    'Software Engineer',
    'Python',
    'TensorFlow',
    'React',
    'Next.js',
    'AI',
  ],
  openGraph: {
    title: 'Harry Bosco Denis | Software Developer & CS Student',
    description:
      'Computer Science student at the University of Cincinnati building AI, backend, and full-stack products with a strong co-op focus.',
    url: siteUrl,
    siteName: 'Harry Bosco Denis',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harry Bosco Denis | Software Developer & CS Student',
    description:
      'Computer Science student at the University of Cincinnati building AI, backend, and full-stack products with a strong co-op focus.',
  },
  alternates: {
    canonical: siteUrl,
  },
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
