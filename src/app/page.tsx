/**
 * Home page
 *
 * LEARNING NOTE: Server vs Client Components
 * - By default, components in App Router are SERVER components
 * - They render on the server, send HTML to client
 * - Benefits: Better performance, SEO, smaller JS bundle
 * - Use 'use client' directive when you need:
 *   - State (useState, useReducer)
 *   - Effects (useEffect)
 *   - Event handlers (onClick, etc)
 *   - Browser APIs (localStorage, window)
 */

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Sudoku Learning Project
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome! 👋</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This is a learning project for Next.js and TypeScript best practices.
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold">Status:</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>✅ Monorepo structure set up</li>
              <li>✅ Core package with skeleton functions created</li>
              <li>✅ Next.js app initialized</li>
              <li>⏳ Game logic to be implemented</li>
              <li>⏳ UI components to be created</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Next Steps:
          </h3>
          <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-1">
            <li>Implement core game functions in <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">packages/sudoku-core/src/game/</code></li>
            <li>Create React Context for game state</li>
            <li>Build UI components (Board, Cell, etc.)</li>
            <li>Add game controls (New Game, Hints, etc.)</li>
            <li>Implement persistence with localStorage</li>
          </ol>
        </div>

        {/* TODO: Add Board component here once created */}
        {/* TODO: Add GameControls component here once created */}
      </div>
    </main>
  )
}
