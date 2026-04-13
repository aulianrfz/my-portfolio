// features/projects/components/ProjectCardDetail.jsx

export default function ProjectCardDetail({ project, isOpen }) {
  return (
    <div
      className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ maxHeight: isOpen ? '800px' : '0px' }}
    >
      <div className="px-5 pb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent mb-5" />

        {/* Role + type */}
        <div className="flex items-center gap-2.5 mb-4 flex-wrap">
          <span className="font-mono text-[10px] text-accent tracking-[0.05em]">
            {project.role}
          </span>
          <span className="text-surface-border text-[10px]">/</span>
          <span className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.12em]">
            {project.type}
          </span>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-[10px] text-ink-secondary bg-surface border border-surface-border px-2.5 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p className="text-[12px] text-ink-secondary leading-relaxed mb-5">
          {project.summary}
        </p>

        <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent mb-5" />

        <DetailBlock label="Key Contributions" items={project.highlights} icon="›" />
        <DetailBlock label="Impact"            items={project.impact}     icon="✦" />

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 font-mono text-[10px] text-accent hover:text-accent/60 transition-colors tracking-[0.05em]"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  )
}

function DetailBlock({ label, items, icon }) {
  return (
    <div className="mb-5">
      <p className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.2em] mb-3">
        {label}
      </p>
      <ul className="list-none p-0 m-0 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[11px] text-ink-secondary leading-relaxed">
            <span className="text-accent shrink-0 text-[9px] mt-0.5">{icon}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}