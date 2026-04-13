import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PROFILE_DATA, TYPEWRITER_TEXTS } from "../../about/hooks/useAbout";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const cur = TYPEWRITER_TEXTS[textIndex];
    const t = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(cur.slice(0, charIndex + 1));
          setCharIndex((p) => p + 1);
          if (charIndex + 1 === cur.length)
            setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setDisplayText(cur.slice(0, charIndex - 1));
          setCharIndex((p) => p - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTextIndex((p) => (p + 1) % TYPEWRITER_TEXTS.length);
          }
        }
      },
      isDeleting ? 60 : 100,
    );
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="min-h-screen flex items-center px-10 md:px-16 xl:px-24 relative overflow-hidden mesh-bg">
      {/* glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[100px] animate-glow-pulse" />
        <div
          className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-accent/[0.03] blur-[80px] animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(125,249,195,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(125,249,195,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div
        className={`relative w-full max-w-5xl transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-start gap-10">
          {/* ── Kiri: teks + CTA ── */}
          <div className="flex-1">
            <div className="mb-10">
              <p className="font-display font-extrabold text-[56px] md:text-[72px] xl:text-[84px] text-ink-secondary leading-[1.05] tracking-tight">
                Hi, I'm
              </p>
              <h1
                id="profile-name"
                className="font-display font-extrabold text-[56px] md:text-[72px] xl:text-[84px] text-shimmer leading-[1.05] tracking-tight mb-6"
              >
                {PROFILE_DATA.name}
              </h1>
              <div className="flex items-center min-h-[52px]">
                <span className="font-display font-bold text-[32px] md:text-[42px] text-shimmer tracking-tight">
                  {displayText}
                </span>
                <span className="typewriter-cursor" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-accent/30 text-accent font-mono text-[12px] hover:bg-accent hover:text-surface hover:border-accent transition-all duration-200"
              >
                Full Profile →
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-surface-border text-ink-secondary font-mono text-[12px] hover:bg-surface-card hover:border-accent/30 hover:text-ink-primary transition-all duration-200"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* ── Kanan: stats ── */}
          <div className="flex flex-col gap-4 w-64 shrink-0 pt-16 ml-auto">
            {PROFILE_DATA.highlights.slice(0, 2).map((h, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface-card border border-surface-border"
              >
                <p className="font-display font-extrabold text-[42px] text-accent leading-none mb-3">
                  {h.value}
                </p>
                <p className="font-mono text-[11px] text-ink-muted leading-snug tracking-wide">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-[-80px] left-0 flex flex-col items-start gap-1 opacity-30">
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">
            scroll
          </span>
          <span className="text-ink-muted text-sm animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}