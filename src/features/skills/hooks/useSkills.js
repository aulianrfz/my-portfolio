// hooks/useSkills.js

import { useState, useEffect } from 'react'
import { SKILL_GROUPS } from '../utils/skillsUtils'

export function useSkills() {
  const [isVisible,     setIsVisible]     = useState(false)
  const [activeFilter,  setActiveFilter]  = useState('all') // 'all' | group id

  // Fade-in saat mount — pola sama dengan useAbout & useWorkingExperience
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Grup yang ditampilkan sesuai filter
  const visibleGroups =
    activeFilter === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter(g => g.id === activeFilter)

  // Daftar filter tab (all + tiap grup)
  const filterTabs = [
    { id: 'all', label: 'All' },
    ...SKILL_GROUPS.map(g => ({ id: g.id, label: g.label, icon: g.icon })),
  ]

  return {
    isVisible,
    visibleGroups,
    filterTabs,
    activeFilter,
    setActiveFilter,
  }
}
