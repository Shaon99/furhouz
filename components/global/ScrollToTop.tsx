'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scrolls to top on route change for better UX
 * This ensures smooth navigation without jarring scroll positions
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Scroll to top on route change instantly for better UX
    // This ensures smooth navigation without jarring scroll positions
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Use 'auto' for instant scroll on route change
    })
  }, [pathname])

  return null
}

