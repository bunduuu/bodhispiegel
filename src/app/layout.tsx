import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bodhi Spiegel | Content & Media Strategist',
  description:
    'Portfolio of Bodhi Spiegel, a content and media strategist focused on YouTube growth, storytelling, editing, and audience retention.',
  openGraph: {
    title: 'Bodhi Spiegel | Content & Media Strategist',
    description:
      'Stories built for retention. YouTube growth, editing systems, and digital storytelling.',
    type: 'website',
    url: 'https://bodhispiegel.com',
    siteName: 'Bodhi Spiegel Portfolio',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
