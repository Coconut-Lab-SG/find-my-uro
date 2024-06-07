import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

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
  return (
    <html lang="en">
      <body className={cn('flex flex-col h-dvh', inter.className)}>
        {children}
      </body>
    </html>
  )
}
