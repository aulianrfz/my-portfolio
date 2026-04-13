import { useReveal } from "../hooks/useReveal";

export function Section({ id, children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 px-10 md:px-16 xl:px-24 relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ label, title, subtitle, to }) {
  // avoid circular dep — import Link inline if needed
  return (
    <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
      <div>
        <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-2">
          {label}
        </p>
        <h2 className="font-display font-extrabold text-[28px] md:text-[34px] text-ink-primary leading-tight tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-ink-secondary text-[13px] mt-2 max-w-md leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {to && (
        <a
          href={to}
          className="font-mono text-[11px] text-ink-muted hover:text-accent transition-colors flex items-center gap-1 group shrink-0"
        >
          View all{" "}
          <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
            →
          </span>
        </a>
      )}
    </div>
  );
}