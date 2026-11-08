import Header from '@/components/Header';
import MouseGlow from '@/components/MouseGlow';
import './globals.css';
import Footer from '@/components/Footer';
import { ArcaneBackdrop } from '@/components/Ornaments';
import { Cinzel, EB_Garamond } from 'next/font/google';

const display = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700', '900'], variable: '--font-display' });
const body = EB_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-body' });

export const metadata = {
  title: {
    default: 'Tejjus Bhat | R&D Engineer & Data Scientist',
    template: '%s | Tejjus Bhat',
  },
  icons: {
    icon: '/favicon.ico',
  },
  description: 'Portfolio of Tejjus Bhat, R&D Engineer at Kinewell and Newcastle University MSc Data Science & AI graduate building full-stack AI software.',
  openGraph: {
    title: 'Tejjus Bhat | R&D Engineer & Data Scientist',
    description: 'Portfolio of Tejjus Bhat, R&D Engineer at Kinewell and Newcastle University MSc Data Science & AI graduate building full-stack AI software.',
    url: 'https://tejjusbhat.com',
    siteName: 'Tejjus Bhat Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
