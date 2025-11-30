'use client'

/**
 * Error Boundary Component
 *
 * LEARNING NOTE: Error Boundaries in React
 * - Catches JavaScript errors in child component tree
 * - Prevents entire app from crashing
 * - Shows fallback UI instead
 * - Great for production apps
 *
 * IMPORTANT: Must be a class component (React limitation)
 * - Error boundaries can't be functional components (yet)
 * - This is one of the few cases where class components are still needed
 *
 * What errors does it catch?
 * ✅ Rendering errors
 * ✅ Lifecycle method errors
 * ✅ Constructor errors
 * ❌ Event handlers (use try/catch instead)
 * ❌ Async code (use try/catch instead)
 * ❌ Server-side rendering errors
 */

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  /**
   * Static method called when an error is thrown
   *
   * LEARNING NOTE: getDerivedStateFromError
   * - Called during render phase
   * - Must be pure (no side effects)
   * - Returns new state to trigger re-render with fallback
   */
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    }
  }

  /**
   * Lifecycle method for error logging
   *
   * LEARNING NOTE: componentDidCatch
   * - Called after error is caught
   * - Good place for logging to error reporting service
   * - Can have side effects (unlike getDerivedStateFromError)
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // TODO: Log to error reporting service (Sentry, LogRocket, etc.)
    console.error('Error caught by boundary:', error, errorInfo)
  }

  /**
   * Reset error state
   */
  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-red-500 text-2xl">⚠️</div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Something went wrong
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The application encountered an error. This has been logged and
              we'll look into it.
            </p>

            {/* Show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
                <summary className="cursor-pointer font-semibold text-red-900 dark:text-red-100">
                  Error Details (dev only)
                </summary>
                <pre className="mt-2 text-xs text-red-800 dark:text-red-200 overflow-auto">
                  {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div className="flex gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * HOC (Higher-Order Component) to wrap any component with error boundary
 *
 * LEARNING NOTE: Higher-Order Components
 * - Function that takes a component and returns a new component
 * - Used for cross-cutting concerns (like error handling)
 * - Alternative to hooks for class components
 *
 * Usage:
 *   const SafeComponent = withErrorBoundary(MyComponent)
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    )
  }
}
