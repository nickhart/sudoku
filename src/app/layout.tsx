import type { Metadata } from 'next'
import './globals.css'

/**
 * Root layout component
 *
 * LEARNING NOTE: Layouts in Next.js App Router
 * - layout.tsx is the root wrapper for all pages
 * - Persists across navigation (doesn't re-render)
 * - Perfect for:
 *   - Global styles
 *   - Context providers
 *   - Common UI elements (nav, footer)
 */

export const metadata: Metadata = {
  title: 'Sudoku - Next.js Learning Project',
  description: 'A platform-agnostic Sudoku game built with Next.js and React',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* TODO: Add GameProvider context here once created */}
        {/* TODO: Add ErrorBoundary here once created */}
        {children}
      </body>
    </html>
  )
}
