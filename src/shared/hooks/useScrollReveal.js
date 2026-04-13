// hooks/useScrollReveal.js
// Reusable hook for scroll-triggered animation using IntersectionObserver

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [options.threshold, options.rootMargin])

  return { ref, isVisible }
}

// Hook for staggered children animation
export function useStaggerReveal(count, baseDelay = 100) {
  const { ref, isVisible } = useScrollReveal()
  const getDelay = (index) => `${index * baseDelay}ms`
  return { ref, isVisible, getDelay }
}
