import { useEffect } from 'react'
import { trackScrollDepth } from '../utils/analytics'

const ScrollTracker = () => {
  useEffect(() => {
    let scrollDepths = [25, 50, 75, 90]
    let trackedDepths = new Set()

    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

export default ScrollTracker