// shared/components/FloatingNav.jsx
// Floating navigation bar that appears on scroll

import { useState, useEffect } from 'react'
import { Link, useLocation }    from 'react-router-dom'

const NAV_ITEMS = [
  { path: '/',          label: 'Home',       short: '⌂' },
  { path: '/about',     label: 'About',      short: '~' },
  { path: '/work',      label: 'Experience', short: '#' },
  { path: '/education', label: 'Education',  short: '∑' },
  { path: '/projects',  label: 'Projects',   short: '◈' },
  { path: '/skills',    label: 'Skills',     short: '⌘' },
]

export default function FloatingNav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrolled
          ? 'py-2 nav-blur shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
          : 'py-4 bg-transparent border-transparent'
        }
      `}
    >
      <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
        {/* Logo mark */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center transition-all duration-200 group-hover:bg-accent/20 group-hover:border-accent/50 group-hover:shadow-glow-sm">
            <span className="font-mono text-[10px] text-accent font-bold">A</span>
          </span>
          <span className="font-mono text-[11px] text-ink-muted group-hover:text-accent transition-colors hidden sm:inline">
            aulia.dev
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map(item => {
            const active = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-3 py-1.5 rounded-lg font-mono text-[11px] tracking-wide
                  transition-all duration-200
                  ${active
                    ? 'text-accent'
                    : 'text-ink-muted hover:text-ink-secondary'
                  }
                `}
              >
                {/* Active indicator */}
                {active && (
                  <span className="absolute inset-0 rounded-lg bg-accent/8 border border-accent/15" />
                )}
                <span className="relative hidden sm:inline">{item.label}</span>
                <span className="relative sm:hidden">{item.short}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
