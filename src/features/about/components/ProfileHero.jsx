import { getInitials } from "../utils/aboutUtils";

export default function ProfileHero({ profile, displayText, isVisible }) {
  return (
    <div
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-5 mb-8">
        <div className="relative flex-shrink-0 group">
          <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110" />
          <div className="relative w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <span className="relative font-display font-extrabold text-2xl text-accent">
              {getInitials(profile.name)}
            </span>
          </div>
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-[2.5px] border-surface shadow-glow-sm" />
        </div>

        <div>
          {/* ← tambahkan id ini */}
          <h1
            id="profile-name"
            className="font-display font-extrabold text-[28px] text-shimmer leading-tight tracking-tight"
          >
            {profile.name}
          </h1>
          <p className="text-ink-secondary text-sm mt-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
            <span>{profile.location}</span>
          </p>
        </div>
      </div>

      {/* Typewriter */}
      <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-2">
        currently
      </p>
      <div className="flex items-center min-h-[44px] mb-6">
        <span className="font-display font-bold text-[26px] text-shimmer tracking-tight">
          {displayText}
        </span>
        <span className="typewriter-cursor" />
      </div>

      {/* Bio */}
      <p className="text-ink-secondary text-[15px] leading-[1.8] max-w-[540px] mb-8">
        {profile.bio
          .split(/(Flutter|Laravel|fintech|banking)/gi)
          .map((chunk, i) =>
            ["flutter", "laravel", "fintech", "banking"].includes(
              chunk.toLowerCase(),
            ) ? (
              <span
                key={i}
                className="text-ink-soft font-medium border-b border-accent/20 pb-px"
              >
                {chunk}
              </span>
            ) : (
              chunk
            ),
          )}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {profile.tags.map((tag) => (
          <span
            key={tag}
            className={`
              px-3 py-1 rounded-full font-mono text-[11px] border
              transition-all duration-200 cursor-default
              hover:-translate-y-0.5 hover:shadow-glow-sm
              ${
                profile.accentTags.includes(tag)
                  ? "border-accent/25 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/40"
                  : "border-surface-border text-ink-secondary bg-surface-card hover:border-accent/15 hover:text-ink-soft"
              }
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
