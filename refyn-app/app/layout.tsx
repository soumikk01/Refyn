import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Refyn — AI Code Reviewer & Bug Explainer',
  description:
    'Refyn uses advanced AI to review your code, explain bugs in plain English, and suggest fixes in real time. Catch issues before they ship.',
  keywords: ['AI code review', 'bug explainer', 'code analysis', 'developer tools', 'AI debugging'],
  authors: [{ name: 'Refyn' }],
  openGraph: {
    title: 'Refyn — AI Code Reviewer & Bug Explainer',
    description: 'Review smarter. Debug faster. Ship with confidence.',
    type: 'website',
    siteName: 'Refyn',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refyn — AI Code Reviewer & Bug Explainer',
    description: 'Review smarter. Debug faster. Ship with confidence.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* P22 Mackinac W01 Book — display serif (Boomerang-style hero headline) */}
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/9d4d074c9335825a23cce178ee03b498?family=P22+Mackinac+W01+Book"
        />
        {/* Inter + JetBrains Mono — UI sans + code mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
