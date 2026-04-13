import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SKILL_GROUPS } from "../../skills/utils/skillsUtils";

function SkillBar({ level, visible }) {
  const width = level === "proficient" ? "90%" : level === "intermediate" ? "65%" : "40%";
  return (
    <div className="h-[2px] w-full bg-surface-border rounded-full overflow-hidden mt-1 mb-3">
      <div
        style={{
          width: visible ? width : "0%",
          transition: "width 1s cubic-bezier(0.16,1,0.3,1)",
          background:
            level === "proficient"
              ? "linear-gradient(90deg, #7DF9C3, #a8ffda)"
              : "rgba(125,249,195,0.3)",
          height: "100%",
          borderRadius: "99px",
        }}
      />
    </div>
  );
}

function SkillCard({ group, index, allVisible }) {
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (!allVisible) return;
    const t = setTimeout(() => setCardVisible(true), index * 120);
    return () => clearTimeout(t);
  }, [allVisible, index]);

  return (
    <div
      style={{
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.97)",
        transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
      className="p-6 rounded-2xl bg-surface-card border border-surface-border hover-glow group relative overflow-hidden shrink-0"
    >
      <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-center gap-2 mb-5">
        <span className="text-[20px]">{group.icon}</span>
        <p className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.18em]">
          {group.label}
        </p>
      </div>

      <div className="flex flex-col gap-0.5">
        {group.items.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between">
              <span className={`font-mono text-[11px] ${item.level === "proficient" ? "text-accent" : "text-ink-secondary"}`}>
                {item.name}
              </span>
              {item.level === "proficient" && (
                <span className="font-mono text-[9px] text-accent/50 uppercase tracking-widest">pro</span>
              )}
            </div>
            <SkillBar level={item.level} visible={cardVisible} />
          </div>
        ))}
      </div>

      <span className="absolute bottom-4 right-5 font-mono text-[10px] text-ink-muted/30 select-none">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

const PREVIEW_IDS = ["languages", "frameworks", "databases"];

export default function SkillsPreview() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const previewGroups = SKILL_GROUPS.filter((g) =>
    PREVIEW_IDS.includes(g.id)
  );
  const hiddenCount = SKILL_GROUPS.length - previewGroups.length;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div id="skills" ref={sectionRef} className="px-10 md:px-16 xl:px-24 py-24 max-w-screen-2xl mx-auto">
      <div className="flex gap-16 items-start">

        {/* ── Kiri: sticky ── */}
        <div
          className="w-56 shrink-0 sticky top-32"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.25em] mb-3">
            technical.skills
          </p>
          <h2 className="font-display font-extrabold text-[52px] leading-none tracking-tighter text-shimmer mb-4">
            Skills
          </h2>
          <p className="text-ink-secondary text-[12px] leading-relaxed mb-6">
            Technologies and tools across my stack.
          </p>

          <div className="accent-line mb-6" />

          {/* hidden count hint */}
          {hiddenCount > 0 && (
            <p className="font-mono text-[10px] text-ink-muted mb-4">
              +{hiddenCount} more categories
            </p>
          )}

          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-accent/30 text-accent font-mono text-[11px] hover:bg-accent hover:text-surface hover:border-accent transition-all duration-200"
          >
            View all →
          </Link>
        </div>

        {/* ── Kanan: scrollable 3 cards ── */}
        <div
          className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4"
          style={{
            maxHeight: "520px",
            scrollbarWidth: "thin",
          }}
        >
          {previewGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} allVisible={visible} />
          ))}

          {/* bottom fade + see more teaser */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
            }}
          >
            <Link
              to="/skills"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border border-dashed border-surface-border text-ink-muted font-mono text-[11px] hover:border-accent/30 hover:text-accent transition-all duration-200 group"
            >
              <span>+{hiddenCount} more categories</span>
              <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}