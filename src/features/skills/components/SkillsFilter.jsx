// components/SkillsFilter.jsx
export default function SkillsFilter({ tabs, active, onChange, isVisible }) {
  return (
    <div
      className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`
            text-[11px] font-mono px-3.5 py-1.5 rounded-full border
            transition-all duration-200
            ${active === tab.id
              ? 'bg-accent text-surface border-accent font-semibold shadow-glow-sm'
              : 'text-ink-muted border-surface-border hover:border-accent/30 hover:text-ink-secondary hover:bg-surface-card'
            }
          `}
        >
          {tab.icon ? `${tab.icon} ${tab.label}` : tab.label}
        </button>
      ))}
    </div>
  )
}
