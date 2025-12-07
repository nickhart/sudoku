/**
 * Home page - Main menu
 *
 * LEARNING NOTE: Server Component by default
 * - No state needed here, just navigation
 * - Links are handled by Next.js router
 * - Fast, SEO-friendly
 */

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo/Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">Sudoku</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Challenge your logic skills
          </p>
        </div>

        {/* Menu Cards */}
        <div className="space-y-4">
          {/* New Game */}
          <MenuCard
            href="/game"
            title="New Game"
            description="Start a fresh puzzle"
            icon="🎮"
          />

          {/* Continue Game */}
          <MenuCard
            href="/game"
            title="Continue Game"
            description="Resume your last puzzle"
            icon="▶️"
            disabled
          />

          {/* Settings */}
          <MenuCard
            href="/settings"
            title="Settings"
            description="Customize your experience"
            icon="⚙️"
          />

          {/* About */}
          <MenuCard
            href="/about"
            title="How to Play"
            description="Learn the rules and strategies"
            icon="❓"
          />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>A Next.js learning project</p>
        </div>
      </div>
    </main>
  )
}

/**
 * Menu card component
 *
 * TODO: Convert to shadcn/ui Card component when ready
 */
function MenuCard({
  href,
  title,
  description,
  icon,
  disabled = false,
}: {
  href: string
  title: string
  description: string
  icon: string
  disabled?: boolean
}) {
  const baseClasses =
    'block w-full bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-2 transition-all'
  const activeClasses =
    'border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md'
  const disabledClasses =
    'border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed'

  if (disabled) {
    return (
      <div className={`${baseClasses} ${disabledClasses}`}>
        <div className="flex items-center gap-4">
          <div className="text-3xl">{icon}</div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link href={href} className={`${baseClasses} ${activeClasses}`}>
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="text-gray-400">→</div>
      </div>
    </Link>
  )
}
