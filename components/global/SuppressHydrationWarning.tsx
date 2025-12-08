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
    const originalError = console.error
    const originalWarn = console.warn
    
    const shouldSuppress = (message: string): boolean => {
      const lowerMessage = message.toLowerCase()
      return (
        (lowerMessage.includes('hydration') || lowerMessage.includes('hydrat')) &&
        (
          lowerMessage.includes('data-new-gr-c-s-check-loaded') ||
          lowerMessage.includes('data-gr-ext-installed') ||
          lowerMessage.includes('cz-shortcut-listen') ||
          lowerMessage.includes('browser extension') ||
          lowerMessage.includes('server rendered html') ||
          lowerMessage.includes('client properties') ||
          lowerMessage.includes('didn\'t match')
        )
      )
    }
    
    console.error = (...args: unknown[]) => {
      const message = args[0]?.toString() || ''
      if (shouldSuppress(message)) {
        return
      }
      originalError.apply(console, args)
    }
    
    console.warn = (...args: unknown[]) => {
      const message = args[0]?.toString() || ''
      if (shouldSuppress(message)) {
        return
      }
      originalWarn.apply(console, args)
    }

    return () => {
      console.error = originalError
      console.warn = originalWarn
    }
  }, [])

  return null
}

