// components/SkillsLegend.jsx
const LEVELS = [
  { key: 'proficient', label: 'Proficient', dot: 'bg-accent' },
  { key: 'familiar',   label: 'Familiar',   dot: 'bg-ink-muted' },
  { key: 'basic',      label: 'Basic',      dot: 'bg-surface-border' },
]

export default function SkillsLegend({ isVisible }) {
  return (
    <div className={`flex items-center gap-5 mb-5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {LEVELS.map(({ key, label, dot }) => (
        <div key={key} className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">{label}</span>
        </div>
      ))}
    </div>
  )
}
