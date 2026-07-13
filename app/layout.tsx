import type { Metadata } from 'next'
import { IBM_Plex_Mono, Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.blutekombucha.com.ar'),
  title: 'BLÜTE Kombucha | Patagonia Argentina',
  description: 'Kombucha de fermentación natural elaborada en Neuquén, Patagonia. Sabores únicos del sur argentino.',
  openGraph: {
    title: 'BLÜTE Kombucha | Patagonia Argentina',
    description: 'Kombucha de fermentación natural elaborada en Neuquén, Patagonia.',
    url: 'https://www.blutekombucha.com.ar',
    siteName: 'BLÜTE Kombucha',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLÜTE Kombucha | Patagonia Argentina',
    description: 'Kombucha de fermentación natural elaborada en Neuquén, Patagonia.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      <GoogleAnalytics gaId="G-FVYRGWHYNX" />
    </html>
  )
}