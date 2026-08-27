import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const calSans = localFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'INDUTELSA — Soluciones de Automatización Industrial',
  description:
    'Proporcionamos las mejores soluciones en automatización industrial. Industria 4.0, IoT y plataforma iSoft.',
  icons: {
    icon: '/images/indutelsa-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={calSans.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={calSans.className}>{children}</body>
    </html>
  );
}
