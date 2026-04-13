// pages/EducationPage.jsx
import { useEducation }  from '../features/education/hooks/useEducation'
import EducationCard     from '../features/education/components/EducationCard'
import { Link }          from 'react-router-dom'

export default function EducationPage() {
  const { education, isVisible } = useEducation()

  return (
    <div className="min-h-screen mesh-bg flex items-start justify-center px-10 md:px-16 py-24 md:py-28 relative overflow-hidden">

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[90px] animate-glow-pulse" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-accent/[0.025] blur-[70px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(125,249,195,0.015) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(125,249,195,0.015) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative w-full max-w-4xl pt-4">

        {/* Section label */}
        <div className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.25em]">education</span>
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
        </div>

        {/* Heading */}
        <div className={`mb-10 transition-all duration-700 delay-75 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="font-display font-extrabold text-[32px] text-ink-primary leading-tight mb-2 tracking-tight">
            Education
          </h1>
          <p className="text-ink-secondary text-[14px] leading-relaxed">
            Academic foundation in Informatics Engineering — where curiosity met code.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} isVisible={isVisible} delay={150 + i * 100} />
          ))}
        </div>

        {/* Footer nav */}
        <div className={`mt-12 pt-8 border-t border-surface-border/50 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {[
              { to: '/about', label: '← About' },
              { to: '/work',      label: 'Experience' },
              { to: '/projects',  label: 'Projects' },
              { to: '/skills',    label: 'Skills' },
            ].map(({ to, label }) => (
              <Link key={to} to={to}
                className="font-mono text-[11px] text-ink-muted hover:text-accent transition-colors tracking-wide flex items-center gap-1 group">
                {label}
                {!label.startsWith('←') && <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-[10px]">→</span>}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
