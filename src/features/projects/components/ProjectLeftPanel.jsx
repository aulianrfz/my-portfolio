// features/projects/components/ProjectLeftPanel.jsx
import { Link } from 'react-router-dom'

const FILTER_LABELS = {
  'All':                                  'All',
  'Professional':                         'Professional',
  'Personal Project (Technical Test)':    'Personal',
  'Group Project':                        'Academic',
}

export default function ProjectLeftPanel({ count, types, filter, setFilter, isVisible }) {
  return (
    <div className="relative flex flex-col justify-between h-full px-10 py-10 overflow-hidden select-none">

      {/* ── TOP: label + filters ─────────────────────────────────── */}
      <div
        className={`flex flex-col gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.25em]">
          project.experience
        </span>
        <div className="flex flex-wrap gap-2">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`
                text-[11px] font-mono px-3.5 py-1.5 rounded-full border
                transition-all duration-200
                ${filter === t
                  ? 'bg-accent text-surface border-accent font-semibold shadow-glow-sm'
                  : 'text-ink-muted border-surface-border hover:border-accent/30 hover:text-ink-secondary hover:bg-surface-card'
                }
              `}
            >
              {FILTER_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      {/* ── BOTTOM: big display title + footer nav ────────────────── */}
      <div
        className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <h1
          className="font-display font-extrabold text-ink-primary leading-[0.9] tracking-[-0.04em] m-0"
          style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
        >
          All<br />Works
        </h1>
        <p className="font-mono text-ink-muted mt-3 tracking-[0.05em] text-[13px]">
          ({String(count).padStart(2, '0')})
        </p>

        {/* Footer nav */}
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-8">
          {[
            { to: '/',          label: '← About'   },
            { to: '/work',      label: 'Experience' },
            { to: '/education', label: 'Education'  },
            { to: '/skills',    label: 'Skills'     },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-mono text-[10px] text-ink-muted hover:text-accent transition-colors tracking-wide flex items-center gap-1 group"
            >
              {label}
              {!label.startsWith('←') && (
                <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-[10px]">→</span>
              )}
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}