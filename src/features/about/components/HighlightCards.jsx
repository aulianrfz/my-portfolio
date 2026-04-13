export default function HighlightCards({ highlights, isVisible }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {highlights.map((item, index) => (
        <div
          key={index}
          style={{ transitionDelay: `${index * 80 + 200}ms` }}
          className={`
            relative p-4 rounded-2xl bg-surface-card border border-surface-border
            hover-glow cursor-default group overflow-hidden
            transition-all duration-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          {/* Hover shimmer */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(125,249,195,0.06) 0%, transparent 70%)',
            }}
          />
          <p className="relative font-display font-extrabold text-[26px] text-accent leading-none
                        group-hover:scale-105 transition-transform duration-300 origin-left stat-number">
            {item.value}
          </p>
          <p className="relative text-ink-muted text-[11px] mt-2 leading-snug font-mono tracking-wide">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}
