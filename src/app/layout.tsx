
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  referrer: 'no-referrer',
  title: 'Docfolio | See the full picture of your health with Whole Body MRI',
  description:
    'Proactive health memberships combining Whole Body MRI, advanced blood biomarker testing, and ongoing clinical guidance—designed to help you track your health year over year.',
  icons: {
    icon: 'https://cdn.prod.website-files.com/653836f64e8770bb2190b74d/6542a006079131cc1c3974e0_prenuvo-favicon-small.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="referrer" content="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}

        {/* Core Scripts */}
        <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=653836f64e8770bb2190b74d" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/js/splide.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/lenis@1.2.3/dist/lenis.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
