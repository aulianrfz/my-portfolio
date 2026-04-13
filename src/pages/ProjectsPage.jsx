// pages/ProjectsPage.jsx
import { useProjects }     from '../features/projects/hooks/useProjects'
import ProjectLeftPanel    from '../features/projects/components/ProjectLeftPanel'
import ProjectCard         from '../features/projects/components/ProjectCard'

export default function ProjectsPage() {
  const { projects, isVisible, filter, setFilter, types } = useProjects()

  return (
    <div className="flex h-screen bg-surface overflow-hidden">

      {/* ── LEFT — sticky, never scrolls ─────────────────────────── */}
      <div className="w-[42%] shrink-0 h-full border-r border-surface-border">
        <ProjectLeftPanel
          count={projects.length}
          types={types}
          filter={filter}
          setFilter={setFilter}
          isVisible={isVisible}
        />
      </div>

      {/* ── RIGHT — only this scrolls ────────────────────────────── */}
      <div
        className="flex-1 h-full overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            isVisible={isVisible}
          />
        ))}
        <div className="h-24" />
      </div>

    </div>
  )
}