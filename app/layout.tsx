import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Bubbles Pet Profissional',
  description: 'Cosmética Pet Profissional de alta performance.',
  other: {
    'preconnect': ['https://images.unsplash.com', 'https://www.bubbles.com.br'],
    'dns-prefetch': ['https://images.unsplash.com', 'https://www.bubbles.com.br'],
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={poppins.variable} suppressHydrationWarning>
      <body className="font-poppins antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
