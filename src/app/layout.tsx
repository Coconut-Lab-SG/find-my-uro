import { cn } from '@/app/_lib/utils'
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'

import { CookieModal } from '@/app/_components/cookie-modal'
import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import { cookies } from 'next/headers'
import NextTopLoader from 'nextjs-toploader'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Toaster } from './_components/ui/toaster'
import { envVars } from './_lib/constants/env-vars'
import './_styles/common.css'
import './_styles/globals.css'

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
      <GoogleAnalytics gaId={envVars.GOOGLE_ANALYTICS_ID!} />
      <GoogleTagManager gtmId={envVars.GOOGLE_TAG_MANAGER_ID!} />
      <body className={cn('flex flex-col h-dvh', roboto.className)}>
        {/* Progress Bar for server side load */}
        <NextTopLoader />

        <Header />
        <div className="flex-1 py-4 w-full">{children}</div>
        {!cookieConsent && <CookieModal />}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
