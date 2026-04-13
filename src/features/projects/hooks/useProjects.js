// features/projects/hooks/useProjects.js

import { useState, useEffect } from 'react'
import { PROJECTS }            from '../utils/projectsUtils'

export const TYPES = [
  'All',
  'Professional',
  'Personal Project (Technical Test)',
  'Group Project',
]

export function useProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter]       = useState('All')

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.type === filter)

  return {
    projects: filtered,
    isVisible,
    filter,
    setFilter,
    types: TYPES,
  }
}