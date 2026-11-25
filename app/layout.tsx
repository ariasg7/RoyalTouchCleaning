import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  metadataBase: new URL('https://royaltouch-cs.com'),
  title: 'Royal Touch Cleaning Services | A Cleaner Space, A Brighter Day',
  description:
    'Explore premium, eco-friendly cleaning services for homes, rentals, and offices, and request a tailored quote or book a convenient cleaning.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/img/RoyalTouchFav.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Royal Touch Cleaning Services | A Cleaner Space, A Brighter Day',
    description:
      'Explore premium, eco-friendly cleaning services for homes, rentals, and offices, and request a tailored quote or book a convenient cleaning.',
    url: 'https://royaltouch-cs.com',
    siteName: 'Royal Touch Cleaning Services',
    images: [
      {
        url: '/img/RoyalTouchCleaning_social.png',
        width: 1200,
        height: 630,
        alt: 'Royal Touch Cleaning Services — Clean Spaces, Happy Places',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Touch Cleaning Services | A Cleaner Space, A Brighter Day',
    description:
      'Explore premium, eco-friendly cleaning services for homes, rentals, and offices, and request a tailored quote or book a convenient cleaning.',
    images: ['/img/RoyalTouchCleaning_social.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}