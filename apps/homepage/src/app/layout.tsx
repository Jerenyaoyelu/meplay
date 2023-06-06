import './globals.css'
import { Inter } from 'next/font/google'
import { routes } from './routes';
import { PageCarousel } from '@/components/Carousel';
import { Nav } from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meplay',
  description: 'Play around with Jeren',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' h-screen relative'}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
