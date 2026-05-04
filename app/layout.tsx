import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Leonardo Santos — Full Stack Developer',
  description:
    'Portfolio de Leonardo da Silva Santos, desenvolvedor Full Stack Web e Mobile especializado em Flutter, React Native, Node.js e TypeScript.',
  keywords: ['desenvolvedor', 'full stack', 'flutter', 'react native', 'node.js', 'typescript', 'mobile', 'web'],
  authors: [{ name: 'Leonardo da Silva Santos' }],
  openGraph: {
    title: 'Leonardo Santos — Full Stack Developer',
    description: 'Portfolio de Leonardo Santos, desenvolvedor Full Stack Web e Mobile.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a4f5e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
