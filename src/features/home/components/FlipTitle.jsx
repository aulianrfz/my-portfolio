import { useEffect, useState } from "react";

const WORDS = ["Projects", "Experience"];

export default function FlipTitle() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | exit | enter

  useEffect(() => {
    const loop = setInterval(() => {
      // start exit
      setPhase("exit");

      // after exit done, swap word & start enter
      const swapTimer = setTimeout(() => {
        setIndex((p) => (p + 1) % WORDS.length);
        setPhase("enter");
      }, 400);

      // after enter done, go idle
      const idleTimer = setTimeout(() => {
        setPhase("idle");
      }, 900);

      return () => {
        clearTimeout(swapTimer);
        clearTimeout(idleTimer);
      };
    }, 2800);

    return () => clearInterval(loop);
  }, []);

  const word = WORDS[index];

  return (
    <div
      style={{
        height: "clamp(70px, 11vw, 110px)",
        overflow: "hidden",
        marginBottom: "32px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "1px" }}>
        {word.split("").map((char, ci) => {
          const delay = `${ci * 0.025}s`;
          let animation = "none";

          if (phase === "exit") {
            animation = `char-exit 0.35s cubic-bezier(0.4,0,1,1) ${delay} both`;
          } else if (phase === "enter") {
            animation = `char-enter 0.5s cubic-bezier(0.16,1,0.3,1) ${delay} both`;
          }

          return (
            <span
              key={`${index}-${ci}`}
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(64px, 10vw, 100px)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "#fff",
                display: "inline-block",
                animation,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}