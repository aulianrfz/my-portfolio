// components/SkillBadge.jsx
import { LEVEL_META } from '../utils/skillsUtils'

const levelClasses = {
  proficient: 'border-accent/25 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/40 hover:shadow-glow-sm',
  familiar:   'border-surface-border text-ink-soft bg-surface-card hover:border-accent/15 hover:text-ink-primary',
  basic:      'border-surface-border text-ink-muted bg-surface hover:border-surface-border/80 hover:text-ink-secondary',
}

export default function SkillBadge({ name, level }) {
  const meta = LEVEL_META[level]

  return (
    <span
      title={meta.label}
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
        font-mono text-[12px] border
        transition-all duration-200 cursor-default select-none
        hover:-translate-y-0.5
        ${levelClasses[level]}
      `}
    >
      {name}
      <span className={`w-1 h-1 rounded-full flex-shrink-0
        ${level === 'proficient' ? 'bg-accent'
          : level === 'familiar'   ? 'bg-ink-muted'
          : 'bg-surface-border'}`}
      />
    </span>
  )
}
