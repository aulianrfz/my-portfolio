// components/EducationCard.jsx
import { useScrollReveal } from '../../../shared/hooks/useScrollReveal'

export default function EducationCard({ edu, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        group relative rounded-2xl border border-surface-border bg-surface-card
        p-6 overflow-hidden
        hover-glow transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/20 transition-all duration-500" />

      {/* Left accent */}
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="font-display font-bold text-[17px] text-ink-primary leading-snug">
            {edu.institution}
          </h2>
          <p className="mt-1 text-accent text-[13px] font-medium">{edu.degree}</p>
        </div>
        <span className="shrink-0 font-mono text-[11px] text-ink-muted bg-surface px-2.5 py-1 rounded-lg border border-surface-border">
          {edu.period}
        </span>
      </div>

      {/* GPA */}
      <div className="flex items-center gap-2 mb-5">
        <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">GPA</span>
        <span className="font-mono text-[13px] text-accent font-semibold stat-number">{edu.gpa}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent ml-1" />
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent mb-4" />

      {/* Courses */}
      <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-3">Relevant Courses</p>
      <div className="flex flex-wrap gap-2">
        {edu.courses.map(c => (
          <span key={c}
            className="text-[11px] font-mono text-ink-secondary bg-surface border border-surface-border px-2.5 py-1 rounded-full hover:border-accent/20 hover:text-ink-soft hover:-translate-y-0.5 transition-all duration-150 cursor-default">
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
