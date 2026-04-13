import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EDUCATION } from "../../education/utils/educationUtils";

const DUMMY_IMAGES = [
  "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
];

export default function EducationPreview() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div id="education" ref={sectionRef} className="px-10 md:px-16 xl:px-24 py-24 max-w-screen-2xl mx-auto">

      {/* ── Judul floating, tidak sejajar siapapun ── */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="mb-10"
      >
        <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.25em] mb-2">
          academic.background
        </p>
        <h2 className="font-display font-extrabold text-[64px] md:text-[96px] leading-none tracking-tighter text-shimmer">
          Education
        </h2>
      </div>

      {/* ── Foto + Accordion sejajar ── */}
      <div className="flex gap-10 items-start">

        {/* Foto */}
        <div
          className="w-56 shrink-0 sticky top-28"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
          }}
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-surface-border bg-surface-card"
            style={{ aspectRatio: "3/4" }}
          >
            {EDUCATION.map((edu, i) => (
              <img
                key={i}
                src={edu.image ?? DUMMY_IMAGES[i % DUMMY_IMAGES.length]}
                alt={edu.institution}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: activeIndex === i ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              />
            ))}

            {/* gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(6,6,9,0.9) 0%, transparent 55%)",
              }}
            />

            {/* caption dalam foto */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
              <p className="font-mono text-[9px] text-accent/70 uppercase tracking-[0.2em] mb-1">
                {EDUCATION[activeIndex]?.period}
              </p>
              <p className="font-display font-bold text-[13px] text-white leading-snug">
                {EDUCATION[activeIndex]?.institution}
              </p>
            </div>
          </div>

          {/* CTA di bawah foto */}
          <div className="mt-4">
            <Link
              to="/education"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-accent/30 text-accent font-mono text-[11px] hover:bg-accent hover:text-surface hover:border-accent transition-all duration-200"
            >
              View all →
            </Link>
          </div>
        </div>

        {/* Accordion */}
        <div className="flex-1 flex flex-col">
          <div className="h-px bg-surface-border/60" />

          {EDUCATION.map((edu, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={edu.id ?? i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
                }}
              >
                <button
                  onClick={() => setActiveIndex(i)}
                  className="w-full flex items-center gap-6 py-7 text-left group"
                >
                  <span className="font-mono text-[12px] text-ink-muted/50 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display font-bold text-[18px] leading-tight tracking-tight transition-colors duration-200"
                      style={{ color: isOpen ? "#7DF9C3" : "var(--color-ink-primary, #fff)" }}
                    >
                      {edu.institution}
                    </p>
                    <p className="font-mono text-[11px] text-ink-muted mt-0.5">
                      {edu.degree}
                    </p>
                  </div>

                  <span className="font-mono text-[11px] text-ink-muted shrink-0 hidden md:block">
                    {edu.period}
                  </span>

                  <span
                    className="shrink-0 w-7 h-7 rounded-full border border-surface-border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "rgba(125,249,195,0.4)" : undefined,
                      background: isOpen ? "rgba(125,249,195,0.08)" : undefined,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <span
                      className="font-mono text-[16px] leading-none"
                      style={{ color: isOpen ? "#7DF9C3" : "var(--color-ink-muted)" }}
                    >
                      +
                    </span>
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div className="pl-12 pb-7 flex flex-col gap-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-accent/20 bg-accent/5 self-start">
                      <span className="font-display font-bold text-[18px] text-accent leading-none">
                        {edu.gpa}
                      </span>
                      <span className="font-mono text-[9px] text-ink-muted uppercase tracking-widest">
                        GPA
                      </span>
                    </div>

                    <div>
                      <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-3">
                        Relevant Courses
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.slice(0, 6).map((c, ci) => (
                          <span
                            key={c}
                            style={{
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen ? "translateY(0)" : "translateY(6px)",
                              transition: `opacity 0.3s ease ${ci * 0.04}s, transform 0.3s ease ${ci * 0.04}s`,
                            }}
                            className="px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 font-mono text-[10px] text-accent/80"
                          >
                            {c}
                          </span>
                        ))}
                        {edu.courses.length > 6 && (
                          <span className="px-3 py-1.5 rounded-full border border-surface-border font-mono text-[10px] text-ink-muted">
                            +{edu.courses.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {edu.achievements?.length > 0 && (
                      <div>
                        <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-3">
                          Achievements
                        </p>
                        <ul className="flex flex-col gap-2">
                          {edu.achievements.slice(0, 2).map((a, ai) => (
                            <li key={ai} className="flex items-start gap-2 font-mono text-[11px] text-ink-secondary">
                              <span className="text-accent mt-0.5">↳</span>
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-px bg-surface-border/60" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}