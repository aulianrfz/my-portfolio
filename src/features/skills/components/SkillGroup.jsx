// components/SkillGroup.jsx
import SkillBadge from './SkillBadge'
import { useScrollReveal } from '../../../shared/hooks/useScrollReveal'

export default function SkillGroup({ group, index }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 })
  const delay = `${index * 80}ms`

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`
        relative p-5 rounded-2xl bg-surface-card border border-surface-border
        transition-all duration-700 group overflow-hidden
        hover-glow
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      {/* Hover glow top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/20 transition-all duration-500" />

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-base leading-none">{group.icon}</span>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">{group.label}</p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {group.items.map(item => (
          <SkillBadge key={item.name} name={item.name} level={item.level} />
        ))}
      </div>
    </div>
  )
}
