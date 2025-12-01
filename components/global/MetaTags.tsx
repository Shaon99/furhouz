'use client'

import { useEffect } from 'react'
import { useSettingsQuery } from '@/hooks/queries/useSettingsQuery'

export default function MetaTags() {
  const { data: settings } = useSettingsQuery()

  useEffect(() => {
    if (!settings || typeof window === 'undefined' || !document.head) return

    const addedLinks: HTMLLinkElement[] = []

    // Update favicon
    const updateFavicon = (href: string) => {
      try {
        // Remove existing favicon links safely (except ones added by this component)
        const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]')
        existingLinks.forEach(link => {
          if (link && link.parentNode && !addedLinks.includes(link as HTMLLinkElement)) {
            try {
              const parent = link.parentNode
              if (parent && parent.contains(link)) {
                parent.removeChild(link)
              }
            } catch {
             
            }
          }
        })

        // Add new favicon
        const link = document.createElement('link')
        link.rel = 'icon'
        link.type = 'image/x-icon'
        link.href = settings.favicon || href
        if (document.head) {
          document.head.appendChild(link)
          addedLinks.push(link)
        }

        // Add shortcut icon
        const shortcutLink = document.createElement('link')
        shortcutLink.rel = 'shortcut icon'
        shortcutLink.href = settings.favicon || href
        if (document.head) {
          document.head.appendChild(shortcutLink)
          addedLinks.push(shortcutLink)
        }

        // Add apple touch icon
        const appleLink = document.createElement('link')
        appleLink.rel = 'apple-touch-icon'
        appleLink.href = settings.favicon || href
        if (document.head) {
          document.head.appendChild(appleLink)
          addedLinks.push(appleLink)
        }
      } catch (error) {
        console.error('Error updating favicon:', error)
      }
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      try {
        if (!document.head) return
        
        let meta = document.querySelector(`meta[${attribute}="${name}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute(attribute, name)
          document.head.appendChild(meta)
        }
        if (meta) {
          meta.setAttribute('content', content)
        }
      } catch (error) {
        console.error(`Error updating meta tag ${name}:`, error)
      }
    }

    // Update OpenGraph image
    const updateOGImage = (url: string) => {
      updateMetaTag('og:image', url, 'property')
      updateMetaTag('og:image:url', url, 'property')
      updateMetaTag('og:image:secure_url', url, 'property')
    }

    // Update title if site_name exists
    try {
      if (settings.site_name && typeof document !== 'undefined') {
        document.title = settings.site_name
        updateMetaTag('og:title', settings.site_name, 'property')
      }

      // Update favicon
      if (settings.favicon) {
        updateFavicon('/logo.png')
      }

      // Update meta image - use favicon or logo as meta image
      const metaImage = settings.favicon || settings.logo || '/logo.png'
      updateOGImage(metaImage)
      
      // Update Twitter card image
      updateMetaTag('twitter:image', metaImage, 'name')
      updateMetaTag('twitter:card', 'summary_large_image', 'name')
    } catch (error) {
      console.error('Error updating meta tags:', error)
    }

    // Cleanup function
    return () => {
      // Cleanup is handled by React, but we can add safety checks here if needed
    }

  }, [settings])

  return null
}

