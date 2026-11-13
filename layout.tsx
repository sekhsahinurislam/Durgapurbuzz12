import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: { default: 'DURGAPUR BUZZ | Your City. Your News.', template: '%s | DURGAPUR BUZZ' },
  description: 'Durgapur and Paschim Bardhaman latest news, updates and local stories.',
  applicationName: 'DURGAPUR BUZZ',
  icons: { icon: '/icon.svg' },
  openGraph: { title: 'DURGAPUR BUZZ', description: 'Your City. Your News. Your Voice.', type: 'website' },
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="bn"><body>{children}</body></html>; }
