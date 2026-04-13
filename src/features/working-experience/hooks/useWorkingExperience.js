// hooks/useWorkingExperience.js

import { useState, useEffect } from 'react'
import { EXPERIENCES } from '../utils/workingExperienceUtils'

export function useWorkingExperience() {
  const [isVisible,    setIsVisible]    = useState(false)
  const [openId,       setOpenId]       = useState(null)   // id card yang sedang di-expand

  // Debug: cek apakah data ada
  console.log('EXPERIENCES data:', EXPERIENCES)

  // Fade-in saat halaman mount
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  function toggleDetail(id) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return {
    experiences: EXPERIENCES,
    isVisible,
    openId,
    toggleDetail,
  }
}
