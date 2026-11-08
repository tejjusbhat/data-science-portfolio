import Header from '@/components/Header';
import MouseGlow from '@/components/MouseGlow';
import './globals.css';
import Footer from '@/components/Footer';
import { ArcaneBackdrop } from '@/components/Ornaments';
import { Cinzel, EB_Garamond } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL, pageMetadata } from '@/lib/seo';

const display = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700', '900'], variable: '--font-display' });
const body = EB_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({ description: DEFAULT_DESCRIPTION, path: '/' }),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
  authors: [{ name: 'Tejjus Bhat', url: SITE_URL }],
  creator: 'Tejjus Bhat',
  keywords: [
    'Tejjus Bhat', 'R&D Engineer', 'Data Scientist', 'Machine Learning Engineer', 'Kinewell',
    'Offshore Wind', 'Newcastle University', 'MSc Data Science and AI', 'LLM', 'RAG', 'Python', 'Portfolio',
  ],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a0708',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <MouseGlow />
        <ArcaneBackdrop />
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
