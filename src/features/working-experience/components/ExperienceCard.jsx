// components/ExperienceCard.jsx
import { useScrollReveal } from '../../../shared/hooks/useScrollReveal'

export default function ExperienceCard({ exp, index, isOpen, onToggle }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  const delay = `${index * 120}ms`

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`flex gap-0 pb-10 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 w-12 flex flex-col items-center pt-6">
        <div className={`
          relative w-[18px] h-[18px] rounded-full border-[3px] z-10 flex-shrink-0
          transition-all duration-500
          ${exp.isCurrent
            ? 'bg-accent border-accent shadow-glow-sm'
            : 'bg-surface border-surface-border'
          }
        `}>
          {exp.isCurrent && (
            <span className="absolute inset-[-6px] rounded-full border border-accent/20 animate-ping" style={{ animationDuration: '2s' }} />
          )}
        </div>
      </div>

      {/* Card */}
      <div className={`
        flex-1 ml-4 bg-surface-card border rounded-2xl
        text-ink-primary overflow-hidden
        transition-all duration-400 group
        hover-glow
        ${isOpen ? 'border-accent/30 shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(125,249,195,0.12)]' : 'border-surface-border'}
      `}>
        <div className="p-6 md:p-7 relative">

          {/* Left accent line */}
          <div className={`
            absolute left-0 top-4 bottom-4 w-[3px] rounded-full
            transition-all duration-500
            ${exp.isCurrent ? 'bg-gradient-to-b from-accent to-accent/20' : 'bg-surface-border'}
          `} />

          {/* Top row */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
            <h2 className="font-display font-extrabold text-[20px] text-ink-primary leading-tight">
              {exp.company}
            </h2>
            {exp.isCurrent ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide border border-accent/30 text-accent bg-accent/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
                {exp.period}
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide border border-surface-border text-ink-muted bg-surface">
                {exp.period}
              </span>
            )}
          </div>

          <p className="font-mono text-[11px] text-ink-muted tracking-wide mb-0.5">📍 {exp.location}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted mb-5">{exp.role}</p>

          <div className="h-px bg-surface-border mb-5" />

          <p className="text-ink-secondary text-[14px] leading-[1.8] mb-6">{exp.summary}</p>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {exp.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 group/item">
                <span className="mt-[5px] w-[5px] h-[5px] rounded-full bg-accent/50 flex-shrink-0 group-hover/item:bg-accent transition-colors" />
                <span className="text-ink-secondary text-[13px] leading-snug">{h}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {exp.tags.map(tag => (
              <span key={tag}
                className="px-2.5 py-1 rounded-full font-mono text-[11px] border border-surface-border text-ink-secondary bg-surface hover:border-accent/25 hover:text-accent/80 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                {tag}
              </span>
            ))}
          </div>

          {/* Toggle detail */}
          <button
            onClick={() => onToggle(exp.id)}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent/60 hover:text-accent transition-colors duration-200 group/btn"
          >
            <span>{isOpen ? 'Hide details' : 'View details'}</span>
            <span className={`inline-block transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>↓</span>
          </button>

          {/* Detail panel */}
          <div className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ maxHeight: isOpen ? '600px' : '0px' }}>
            <div className="mt-5 pt-5 border-t border-surface-border">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">Key responsibilities</p>
              <ul className="flex flex-col gap-2.5">
                {exp.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-ink-primary leading-[1.6]">
                    <span className="mt-[6px] w-[4px] h-[4px] rounded-full bg-accent/40 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
