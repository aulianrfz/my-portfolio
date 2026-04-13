// components/ExperienceTimeline.jsx
import ExperienceCard from './ExperienceCard'

export default function ExperienceTimeline({ experiences, openId, onToggle }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[23px] top-7 bottom-7 w-[2px] rounded-full bg-gradient-to-b from-accent/30 via-surface-border/80 to-transparent" />

      <div className="flex flex-col">
        {experiences.length === 0 ? (
          <div className="p-8 rounded-2xl bg-surface-card border border-surface-border text-ink-secondary text-center">
            No working experience data found.
          </div>
        ) : (
          experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              isOpen={openId === exp.id}
              onToggle={onToggle}
            />
          ))
        )}
      </div>
    </div>
  )
}
