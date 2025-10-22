import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getSiteSettings } from '@/lib/data'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  
  return {
    title: settings?.metadata.full_name ? `${settings.metadata.full_name} - Portfolio` : 'Portfolio',
    description: settings?.metadata.tagline || 'Personal Portfolio Website',
    keywords: ['portfolio', 'software engineer', 'web developer', 'flutter', 'ai', 'projects'],
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <ThemeProvider initialDarkMode={settings?.metadata.dark_mode_enabled}>
          <Navigation settings={settings} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer settings={settings} />
          <CosmicBadge bucketSlug={bucketSlug} />
        </ThemeProvider>
      </body>
    </html>
  )
}