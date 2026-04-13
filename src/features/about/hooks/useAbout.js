import { useState, useEffect } from 'react'

export const PROFILE_DATA = {
  name: 'Your Name',
  location: 'Bandung, Indonesia',
  email: 'aulianurulf25@gmail.com',
  github: 'github.com/aulianurulf',
  linkedin: 'linkedin.com/in/aulianurulf',
  bio: `I'm a software developer experienced in both mobile and web development, with a strong foundation in Flutter and Laravel. I've worked across fintech, banking, event management, and marketplace — building applications that are functional, scalable, and user-friendly. What drives me most is turning real problems into working solutions.`,
  highlights: [
    { label: 'Working Experience',  value: '2+' },
    { label: 'Projects Completed',  value: '9+' },
    { label: 'National Award',      value: '🏆 1st' },
  ],
  tags: ['Flutter', 'Dart', 'Laravel', 'Kotlin', 'Java', 'PHP', 'MySQL', 'PostgreSQL', 'REST API'],
  accentTags: ['Flutter', 'Laravel'],
}

export const TYPEWRITER_TEXTS = [
  'Mobile Developer.',
  'Flutter Enthusiast.',
  'Full-Stack Builder.',
  'Problem Solver.',
]

export function useAbout() {
  const [displayText, setDisplayText] = useState('')
  const [textIndex,   setTextIndex]   = useState(0)
  const [charIndex,   setCharIndex]   = useState(0)
  const [isDeleting,  setIsDeleting]  = useState(false)
  const [isVisible,   setIsVisible]   = useState(false)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setIsVisible(true), 100)
    const t2 = setTimeout(() => setStartTyping(true), 800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    if (!startTyping) return

    const cur = TYPEWRITER_TEXTS[textIndex]

    const t = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(cur.slice(0, charIndex + 1))
        setCharIndex(p => p + 1)
        if (charIndex + 1 === cur.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayText(cur.slice(0, charIndex - 1))
        setCharIndex(p => p - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex(p => (p + 1) % TYPEWRITER_TEXTS.length)
        }
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(t)
  }, [charIndex, isDeleting, textIndex, startTyping])

  return { profile: PROFILE_DATA, displayText, isVisible }
}