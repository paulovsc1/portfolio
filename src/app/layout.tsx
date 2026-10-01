import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Paulo Victor | Desenvolvedor Front-End',
  description:
    'Portfólio pessoal de Paulo Victor da Silva Carlos. Desenvolvedor Front-End especializado em React, Next.js, TypeScript e Micro Frontends.',
  keywords: [
    'Paulo Victor',
    'Desenvolvedor Front-End',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Micro Frontends',
    'Portfólio',
  ],
  icons: {
    icon: '/logo-p-v-transparente.svg',
    shortcut: '/logo-p-v-transparente.svg',
    apple: '/logo-p-v-transparente.svg',
  },
  openGraph: {
    title: 'Paulo Victor | Desenvolvedor Front-End',
    description:
      'Desenvolvedor Front-End focado em interfaces modernas, responsivas e funcionais com React, Next.js e TypeScript.',
    url: 'https://paulovictor.dev',
    siteName: 'Paulo Victor Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-p-v-transparente.svg" />
      </head>
      <body className="antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-text)]">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
