import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'BuildifyCode | Premium Software Development Agency',
  description:
    'Premium software development agency specializing in web apps, mobile solutions, and AI-powered innovation with luxury design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
