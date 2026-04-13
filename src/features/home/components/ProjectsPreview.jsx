import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../projects/utils/projectsUtils";
import { Section } from "./Section";
import FlipTitle from "./FlipTitle";

export default function ProjectsPreview() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const N = PROJECTS.length;
  const SCROLL_PER_CARD = 500;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (!scrolled) setScrolled(true);
      const raw = el.scrollTop / SCROLL_PER_CARD;
      setProgress(Math.max(0, Math.min(N - 1, raw)));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrolled, N]);

  return (
    <Section id="projects">
      <FlipTitle />

      {/* 3D Gallery */}
      <div
        style={{ height: "520px", overflow: "hidden", position: "relative", borderRadius: "20px" }}
        className="bg-surface-card border border-surface-border"
      >
        <div
          ref={scrollRef}
          style={{ width: "100%", height: "100%", overflowY: "scroll", scrollbarWidth: "none" }}
        >
          <div style={{ height: `${N * SCROLL_PER_CARD + 520}px` }}>
            <div
              style={{
                position: "sticky",
                top: 0,
                height: "520px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: "1200px",
              }}
            >
              {/* Cards */}
              <div style={{ position: "relative", width: "100%", height: "420px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {PROJECTS.map((p, i) => {
                  const offset = i - progress;
                  const absOff = Math.abs(offset);
                  const isFront = absOff < 0.5;
                  const rotateY = Math.max(-75, Math.min(75, offset * 38));
                  const tx = Math.max(-480, Math.min(480, offset * 220));
                  const tz = isFront ? 60 : -absOff * 80;
                  const scale = isFront ? 1.06 : 1 - Math.max(0, Math.min(1, absOff - 0.3)) * 0.28;
                  const opacity = Math.max(0.12, Math.min(1, 1 - absOff * 0.35));
                  const zIndex = Math.round(100 - absOff * 10);

                  return (
                    <div
                      key={p.id}
                      style={{
                        position: "absolute",
                        width: "300px",
                        height: "380px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotateY}deg) scale(${scale})`,
                        opacity,
                        zIndex,
                        transition: "box-shadow 0.3s",
                        boxShadow: isFront
                          ? "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(125,249,195,0.15)"
                          : "0 8px 30px rgba(0,0,0,0.5)",
                        willChange: "transform",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={p.image ?? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"}
                        alt={p.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        loading="lazy"
                      />

                      {/* Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0, left: 0, right: 0,
                          padding: "32px 20px 20px",
                          background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)",
                        }}
                      >
                        <p style={{ fontFamily: "monospace", fontSize: "10px", color: "#7DF9C3", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "4px" }}>
                          {p.type}
                        </p>
                        <p style={{ fontSize: "16px", fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>
                          {p.title}
                        </p>
                        <p style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                          {p.tech?.slice(0, 3).join(" · ")}
                        </p>
                      </div>

                      <Link to={`/projects/${p.id}`} style={{ position: "absolute", inset: 0 }} aria-label={p.title} />
                    </div>
                  );
                })}
              </div>

              {/* Hint */}
              <div
                style={{
                  position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
                  fontFamily: "monospace", fontSize: "10px", color: "rgba(125,249,195,0.35)",
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  pointerEvents: "none", opacity: scrolled ? 0 : 1, transition: "opacity 0.5s", whiteSpace: "nowrap",
                }}
              >
                scroll to explore ↓
              </div>

              {/* Progress dots */}
              <div style={{ position: "absolute", bottom: "20px", right: "20px", display: "flex", gap: "6px", alignItems: "center" }}>
                {PROJECTS.map((_, i) => {
                  const active = Math.round(progress) === i;
                  return (
                    <div
                      key={i}
                      style={{
                        width: active ? "20px" : "6px",
                        height: "6px",
                        borderRadius: "99px",
                        background: active ? "#7DF9C3" : "rgba(125,249,195,0.2)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View all */}
      <div className="mt-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent font-mono text-[12px] hover:bg-accent hover:text-surface hover:border-accent transition-all duration-200"
        >
          View all projects →
        </Link>
      </div>
    </Section>
  );
}