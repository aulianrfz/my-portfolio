// pages/ProjectDetailPage.jsx
import { useEffect, useState }  from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { PROJECTS }             from '../features/projects/utils/projectsUtils'

export default function ProjectDetailPage() {
  const { id }          = useParams()
  const navigate        = useNavigate()
  const [visible, setVisible] = useState(false)

  const project = PROJECTS.find(p => p.id === Number(id))

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [id])

  // Not found
  if (!project) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-ink-muted text-[13px]">Project not found.</p>
        <Link to="/projects" className="font-mono text-[11px] text-accent hover:opacity-70 transition-opacity">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  const displayIndex = `(${String(PROJECTS.indexOf(project) + 1).padStart(2, '0')})`

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden">

      {/* ── Glow orbs (consistent with other pages) ──────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[90px] animate-glow-pulse" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-accent/[0.025] blur-[70px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* ── Back button ───────────────────────────────────────────── */}
      <div
        className={`sticky top-0 z-10 px-8 py-5 border-b border-surface-border bg-surface/80 backdrop-blur-sm flex items-center justify-between transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          onClick={() => navigate('/projects')}
          className="font-mono text-[11px] text-ink-muted hover:text-accent transition-colors flex items-center gap-2 group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Back to Projects
        </button>
        <span className="font-mono text-[10px] text-ink-muted tracking-[0.15em]">
          {displayIndex}
        </span>
      </div>

      <div className="relative max-w-3xl mx-auto px-8 py-14">

        {/* ── Header ───────────────────────────────────────────────── */}
        <div
          className={`mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {/* Badges */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            {project.isAward && (
              <span className="font-mono text-[9px] text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full tracking-[0.1em] uppercase">
                🏆 Award
              </span>
            )}
            <span className="font-mono text-[9px] text-ink-muted bg-surface-card border border-surface-border px-2.5 py-1 rounded-full tracking-[0.12em] uppercase">
              {project.type}
            </span>
          </div>

          {/* Big title */}
          <h1
            className="font-display font-extrabold text-ink-primary leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            {project.title}
          </h1>

          {/* Meta grid — like reference */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 py-6 border-t border-b border-surface-border">
            <MetaRow label="Role"       value={project.role} />
            <MetaRow label="Type"       value={project.type} />
            <MetaRow label="Stack"      value={project.tech.join(', ')} />
          </div>
        </div>

        {/* ── Image placeholder ─────────────────────────────────────── */}
        <div
          className={`w-full rounded-xl overflow-hidden mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ aspectRatio: '16/9', background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.08)' }}
        >
          {/*
            ── ADD YOUR IMAGE HERE ──────────────────────────────────────
            Replace with:
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            ─────────────────────────────────────────────────────────────
          */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted/30">
              project image
            </span>
          </div>
        </div>

        {/* ── Summary ───────────────────────────────────────────────── */}
        <Section
          visible={visible}
          delay={150}
          label="Overview"
        >
          <p className="text-ink-secondary text-[14px] leading-relaxed">
            {project.summary}
          </p>
        </Section>

        {/* ── Key Contributions ─────────────────────────────────────── */}
        <Section
          visible={visible}
          delay={200}
          label="Key Contributions"
        >
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] text-ink-secondary leading-relaxed">
                <span className="text-accent shrink-0 mt-0.5 text-[11px]">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Impact ────────────────────────────────────────────────── */}
        <Section
          visible={visible}
          delay={250}
          label="Impact"
        >
          <ul className="space-y-3">
            {project.impact.map((im, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] text-ink-secondary leading-relaxed">
                <span className="text-accent shrink-0 mt-0.5 text-[11px]">✦</span>
                <span>{im}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── GitHub link ───────────────────────────────────────────── */}
        {project.githubUrl && (
          <div
            className={`mt-10 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-accent border border-accent/25 hover:bg-accent/[0.06] px-5 py-2.5 rounded-full transition-all duration-200"
            >
              View on GitHub →
            </a>
          </div>
        )}

        {/* ── Footer nav ────────────────────────────────────────────── */}
        <ProjectFooterNav projects={PROJECTS} currentId={project.id} />

      </div>
    </div>
  )
}

/* ── Helper components ──────────────────────────────────────────────────────── */

function MetaRow({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.2em]">
        {label}
      </span>
      <span className="text-ink-primary text-[13px] font-medium">
        {value}
      </span>
    </div>
  )
}

function Section({ children, label, visible, delay }) {
  return (
    <div
      className={`mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-4">
        {label}
      </p>
      {children}
    </div>
  )
}

function ProjectFooterNav({ projects, currentId }) {
  const currentIndex = projects.findIndex(p => p.id === currentId)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  return (
    <div className="mt-16 pt-8 border-t border-surface-border flex items-center justify-between gap-4">
      <div>
        {prev && (
          <Link
            to={`/projects/${prev.id}`}
            className="group flex flex-col gap-1"
          >
            <span className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.15em] group-hover:text-accent transition-colors">
              ← Previous
            </span>
            <span className="text-ink-secondary text-[12px] group-hover:text-ink-primary transition-colors line-clamp-1">
              {prev.title}
            </span>
          </Link>
        )}
      </div>
      <Link
        to="/projects"
        className="font-mono text-[10px] text-ink-muted hover:text-accent transition-colors shrink-0"
      >
        All Projects
      </Link>
      <div className="text-right">
        {next && (
          <Link
            to={`/projects/${next.id}`}
            className="group flex flex-col gap-1 items-end"
          >
            <span className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.15em] group-hover:text-accent transition-colors">
              Next →
            </span>
            <span className="text-ink-secondary text-[12px] group-hover:text-ink-primary transition-colors line-clamp-1">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}