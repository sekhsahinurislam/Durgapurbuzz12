import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'DURGAPUR BUZZ | Your City. Your News.', description: 'Durgapur and Paschim Bardhaman latest news, updates and local stories.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="bn"><body>{children}</body></html>; }
