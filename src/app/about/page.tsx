/**
 * About page - Information and help
 *
 * LEARNING NOTE: Static content page
 * - Can be a Server Component (no 'use client' needed)
 * - Great for SEO
 * - Fast initial load
 */

import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            ← Back to Menu
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">About Sudoku</h1>

        <div className="space-y-6">
          {/* What is Sudoku */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">What is Sudoku?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Sudoku is a logic-based number puzzle. The objective is to fill a
              9×9 grid with digits so that each column, each row, and each of
              the nine 3×3 subgrids (also called &quot;boxes&quot;,
              &quot;blocks&quot;, or &quot;regions&quot;) contains all of the
              digits from 1 to 9.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The puzzle setter provides a partially completed grid, which for a
              well-posed puzzle has a single solution.
            </p>
          </section>

          {/* How to Play */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">How to Play</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Select an empty cell</li>
              <li>Choose a number from 1-9</li>
              <li>Each row must contain the numbers 1-9 without repetition</li>
              <li>
                Each column must contain the numbers 1-9 without repetition
              </li>
              <li>
                Each 3×3 box must contain the numbers 1-9 without repetition
              </li>
              <li>Continue until the entire grid is filled correctly</li>
            </ol>
          </section>

          {/* Tips and Strategies */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">
              Tips &amp; Strategies
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Start with the obvious:</strong> Fill in cells where
                only one number is possible
              </li>
              <li>
                <strong>Use pencil marks:</strong> Note possible candidates in
                each cell
              </li>
              <li>
                <strong>Scan rows and columns:</strong> Look for missing numbers
                in each row/column/box
              </li>
              <li>
                <strong>Look for patterns:</strong> Hidden singles, naked pairs,
                and other advanced techniques
              </li>
              <li>
                <strong>Don&apos;t guess:</strong> Pure Sudoku puzzles are
                solvable through logic alone
              </li>
            </ul>
          </section>

          {/* Difficulty Levels */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Difficulty Levels</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-green-600 dark:text-green-400">
                  Easy
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  More clues (~45), suitable for beginners. Can be solved using
                  basic scanning techniques.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-blue-600 dark:text-blue-400">
                  Medium
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Moderate clues (~35), requires some logical deduction and
                  pattern recognition.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-orange-600 dark:text-orange-400">
                  Hard
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fewer clues (~28), needs advanced techniques like naked pairs
                  and pointing pairs.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-red-600 dark:text-red-400">
                  Expert
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Minimal clues (~22), requires expert-level strategies and deep
                  logical thinking.
                </p>
              </div>
            </div>
          </section>

          {/* Keyboard Shortcuts */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Keyboard Shortcuts</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  1-9
                </kbd>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Enter number
                </span>
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  0
                </kbd>{' '}
                or{' '}
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  Del
                </kbd>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Clear cell
                </span>
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  Arrow keys
                </kbd>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Navigate
                </span>
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  Shift + 1-9
                </kbd>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Toggle note
                </span>
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  Ctrl/Cmd + Z
                </kbd>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Undo
                </span>
              </div>
              <div>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  Ctrl/Cmd + Y
                </kbd>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Redo
                </span>
              </div>
            </div>
          </section>

          {/* About This App */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">About This App</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              This is a learning project built with Next.js 14+, TypeScript, and
              Tailwind CSS. The goal is to demonstrate best practices in modern
              web development while building a fun and functional Sudoku game.
            </p>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>Tech Stack:</strong> Next.js, React, TypeScript,
                Tailwind CSS, shadcn/ui
              </p>
              <p>
                <strong>Architecture:</strong> Monorepo with shared core logic
              </p>
              <p>
                <strong>Focus:</strong> Clean code, type safety, and
                maintainability
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
