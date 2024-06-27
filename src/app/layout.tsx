import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'

import { CookieModal } from '@/components/cookie-modal'
import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import { cookies } from 'next/headers'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Find My Uro',
  description: 'Find My Uro',
}

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieConsent = cookies().get('cookie_consent')

  return (
    <html lang="en">
      <body className={cn('flex flex-col h-dvh', roboto.className)}>
        <Header />
        <div className="flex-1 py-4 w-full">{children}</div>
        {!cookieConsent && <CookieModal />}
        <Footer />
      </body>
    </html>
  )
}
