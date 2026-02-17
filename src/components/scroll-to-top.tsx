import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'

/**
 * ScrollToTop component that scrolls the window to the top
 * whenever the route changes. This ensures that each page
 * navigation starts from the beginning of the page.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
