'use client'

import { useEffect } from 'react'

/**
 * Suppresses hydration warnings for browser extension attributes
 * that are added to the body tag after React hydration.
 * 
 * This is a known issue with browser extensions (like Grammarly, password managers, etc.)
 * that modify the DOM after React has hydrated.
 */
export default function SuppressHydrationWarning() {
  useEffect(() => {
    // Suppress hydration warnings for browser extension attributes
    // These are added by extensions after React hydrates and are safe to ignore
    const originalError = console.error
    console.error = (...args: unknown[]) => {
      const message = args[0]?.toString() || ''

      // Suppress hydration mismatch warnings for browser extension attributes
      if (
        typeof message === 'string' &&
        (message.includes('hydration') || message.includes('Hydration')) &&
        (message.includes('data-new-gr-c-s-check-loaded') ||
          message.includes('data-gr-ext-installed') ||
          message.includes('cz-shortcut-listen') ||
          message.includes('browser extension'))
      ) {
        // Silently ignore these warnings
        return
      }

      // Call original console.error for other messages
      originalError.apply(console, args)
    }

    return () => {
      console.error = originalError
    }
  }, [])

  return null
}

