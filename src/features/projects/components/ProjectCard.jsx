// features/projects/components/ProjectCard.jsx
import { useNavigate }      from 'react-router-dom'
import { useScrollReveal }  from '../../../shared/hooks/useScrollReveal'

export default function ProjectCard({ project, index, isVisible }) {
  const navigate      = useNavigate()
  const { ref, isVisible: scrollVisible } = useScrollReveal({ threshold: 0.05 })
  const displayIndex  = `(${String(index + 1).padStart(2, '0')})`
  const visible       = isVisible && scrollVisible

  return (
    <article
      ref={ref}
      className={`
        border-b border-surface-border
        transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
      style={{ transitionDelay: `${200 + index * 50}ms` }}
    >
      <button
        onClick={() => navigate(`/projects/${project.id}`)}
        className="w-full text-left bg-transparent border-none p-0 cursor-pointer group block"
      >
        {/* Full-bleed image */}
        <div
          className="relative w-full overflow-hidden bg-surface-card"
          style={{ aspectRatio: '16/9' }}
        >
          {/*
            ── ADD YOUR IMAGE HERE ──────────────────────────────────────
            Replace placeholder with:
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            ─────────────────────────────────────────────────────────────
          */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted/30">
              {displayIndex}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Award badge */}
          {project.isAward && (
            <span className="absolute top-3.5 left-4 font-mono text-[9px] text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full tracking-[0.1em] uppercase">
              🏆 Award
            </span>
          )}
        </div>

        {/* Label bar — name left, index right (Palmer-style) */}
        <div className="flex items-center justify-between px-5 py-4 gap-4">
          <span className="font-display font-semibold text-[14px] text-ink-primary tracking-[-0.01em] leading-none group-hover:text-accent transition-colors duration-200">
            {project.title}
          </span>
          <span className="font-mono text-[11px] text-ink-muted tracking-[0.05em] shrink-0">
            {displayIndex}
          </span>
        </div>
      </button>
    </article>
  )
}