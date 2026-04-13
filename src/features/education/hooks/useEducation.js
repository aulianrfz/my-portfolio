// hooks/useEducation.js

import { useState, useEffect } from 'react'
import { EDUCATION } from '../utils/educationUtils'

export function useEducation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return { education: EDUCATION, isVisible }
}
