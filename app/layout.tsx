import Header from '@/components/Header';
import MouseGlow from '@/components/MouseGlow';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Tejjus Bhat | Data Scientist',
    template: '%s | Tejjus Bhat',
  },
  icons: {
    icon: '/favicon.ico',
  },
  description: 'Portfolio of Tejjus Bhat, MSc Data Science and AI student at Newcastle University with experience in ML, LLM applications, and data analytics.',
  openGraph: {
    title: 'Tejjus Bhat | Data Scientist',
    description: 'Portfolio of Tejjus Bhat, MSc Data Science and AI student at Newcastle University with experience in ML, LLM applications, and data analytics.',
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <MouseGlow />
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
