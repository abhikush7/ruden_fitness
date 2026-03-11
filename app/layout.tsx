import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Ruden Fitness | Elite Personal Training by Rudrendra Shrestha',
  description:
    "Transform your body with elite personal training from Rudrendra Shrestha — Men's Physique Athlete and certified personal trainer. Custom workout plans, nutrition coaching, and 1-on-1 sessions.",
  keywords: [
    'personal trainer',
    'fitness coach',
    'muscle building',
    'fat loss',
    'online coaching',
    'Rudrendra Shrestha',
    'Ruden Fitness',
  ],
  openGraph: {
    title: 'Ruden Fitness | Elite Personal Training',
    description: 'Transform your body with elite personal training from Rudrendra Shrestha.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
