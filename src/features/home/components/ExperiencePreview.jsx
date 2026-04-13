import { Link } from "react-router-dom";
import { EXPERIENCES } from "../../working-experience/utils/workingExperienceUtils";

export default function ExperiencePreview() {
  return (
    <div id="experience">
      {/* Marquee heading */}
      <div className="py-6 overflow-hidden border-b border-surface-border/40">
        <div
          className="flex whitespace-nowrap w-max gap-16"
          style={{ animation: "marquee 18s linear infinite" }}
        >
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="font-display font-extrabold text-[80px] md:text-[120px] leading-none tracking-tighter select-none text-shimmer opacity-20"
            >
              Experience
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-10 md:px-16 xl:px-24 pt-8 pb-16 max-w-screen-2xl mx-auto">
        {/* Timeline horizontal */}
        <div className="relative mb-14">
          <div className="absolute top-[22px] left-0 right-0 h-px bg-surface-border" />
          <div className="flex gap-0 pb-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="relative flex flex-col items-start flex-1 px-6 group"
              >
                <div className="w-5 h-5 rounded-full border-2 border-accent bg-surface z-10 mb-6 mt-[12px] group-hover:bg-accent transition-colors duration-200" />
                <span className="font-mono text-[13px] text-ink-muted mb-2">
                  {exp.period}
                </span>
                <span className="font-display font-bold text-[17px] text-ink-primary leading-snug mb-1.5">
                  {exp.company}
                </span>
                <span className="font-mono text-[14px] text-accent/80">
                  {exp.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent font-mono text-[12px] hover:bg-accent hover:text-surface hover:border-accent transition-all duration-200"
        >
          See Works →
        </Link>
      </div>
    </div>
  );
}