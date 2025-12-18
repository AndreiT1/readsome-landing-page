import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Readsome - Daily free book summaries',
  description: 'Discover key insights from the world\'s best nonfiction books. Learn faster, remember more.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-512x512.png',
  },
  openGraph: {
    title: 'Readsome - Daily free book summaries',
    description: 'Discover key insights from the world\'s best nonfiction books. Learn faster, remember more.',
    url: 'https://readsome.app',
    siteName: 'Readsome',
    images: [
      {
        url: 'https://readsome.app/logo.png', // Your logo URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Readsome - Daily free book summaries',
    description: 'Discover key insights from the world\'s best nonfiction books. Learn faster, remember more.',
    images: ['https://readsome.app/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD structured data for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Readsome',
    url: 'https://readsome.app',
    logo: 'https://readsome.app/logo-512x512.png', // Replace with your actual logo URL
    description: 'Discover key insights from the world\'s best nonfiction books. Learn faster, remember more.',
    sameAs: [
      // Add your social media profiles here
      // 'https://twitter.com/readsome',
      // 'https://facebook.com/readsome',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fa6e5e3183024068a2ce6e2d25ec59a6"}'>
        </script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}