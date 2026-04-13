import { PROFILE_DATA } from "../../about/hooks/useAbout";
import { useReveal } from "../hooks/useReveal";

export default function FooterCTA() {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      className={`py-24 px-10 md:px-16 xl:px-24 border-t border-surface-border/50 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl">
        <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-4">
          let's connect
        </p>
        <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-ink-primary leading-tight mb-4 tracking-tight">
          Open to new opportunities.
        </h2>
        <p className="text-ink-secondary text-[14px] leading-relaxed max-w-md mb-8">
          Currently open for full-time roles, freelance projects, or just a good
          conversation about tech.
        </p>
        <a
          href={`mailto:${PROFILE_DATA.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent font-mono text-[12px] hover:bg-accent/[0.06] hover:border-accent/50 transition-all duration-200"
        >
          {PROFILE_DATA.email} ↗
        </a>
      </div>
    </section>
  );
}