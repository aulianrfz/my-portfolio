// pages/AboutPage.jsx
import { useAbout }   from '../features/about/hooks/useAbout'
import ProfileHero    from '../features/about/components/ProfileHero'
import HighlightCards from '../features/about/components/HighlightCards'
import ContactLinks   from '../features/about/components/ContactLinks'
import Button         from '../shared/components/Button'
import { Link }       from 'react-router-dom'

export default function AboutPage() {
  const { profile, displayText, isVisible } = useAbout()

  return (
    <div className="min-h-screen mesh-bg flex items-center justify-center px-10 md:px-16 py-24 md:py-32 relative overflow-hidden">

      {/* Animated glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[100px] animate-glow-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent/[0.03] blur-[80px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/[0.025] blur-[60px] animate-glow-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(125,249,195,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(125,249,195,0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative w-full max-w-4xl">

        {/* Section label */}
        <div
          style={{ transitionDelay: '0ms' }}
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.25em]">about.me</span>
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
        </div>

        <ProfileHero profile={profile} displayText={displayText} isVisible={isVisible} />

        {/* Divider */}
        <div className={`my-8 accent-line transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

        <HighlightCards highlights={profile.highlights} isVisible={isVisible} />

        <div className="my-8" />

        <ContactLinks profile={profile} isVisible={isVisible} />

        <div className="my-8" />

        <div
          style={{ transitionDelay: '600ms' }}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button variant="outline" size="lg">
            Download Resume <span className="text-base ml-1">↓</span>
          </Button>
        </div>

        {/* Footer nav */}
        <div
          style={{ transitionDelay: '800ms' }}
          className={`mt-14 pt-8 border-t border-surface-border/50 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {[
              { to: '/',          label: '← Home' },
              { to: '/work',      label: 'Work Experience' },
              { to: '/education', label: 'Education' },
              { to: '/projects',  label: 'Projects' },
              { to: '/skills',    label: 'Skills' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-mono text-[11px] text-ink-muted hover:text-accent transition-colors tracking-wide flex items-center gap-1 group"
              >
                {label}
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 text-[10px]">→</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
