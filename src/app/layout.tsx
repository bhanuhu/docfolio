import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Docfolio | See the full picture of your health with Whole Body MRI',
  description:
    'Proactive health memberships combining Whole Body MRI, advanced blood biomarker testing, and ongoing clinical guidance—designed to help you track your health year over year.',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090a0c] text-white min-h-screen selection:bg-[#7ce788]/20 selection:text-[#7ce788]">
        {children}
      </body>
    </html>
  );
}
