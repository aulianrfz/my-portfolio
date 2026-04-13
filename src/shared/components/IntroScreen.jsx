import { useState, useEffect, useRef } from 'react'

const INTRO_TEXT = 'Your Name'

export default function IntroScreen({ onDone }) {
  const [displayText, setDisplayText] = useState('')
  const [charIndex,   setCharIndex]   = useState(0)
  const [phase,       setPhase]       = useState('typing')
  const [flyStyle,    setFlyStyle]    = useState({})
  const textRef = useRef(null)

  // Typewriter
  useEffect(() => {
    if (phase !== 'typing') return
    if (charIndex >= INTRO_TEXT.length) {
      setPhase('hold')
      return
    }
    const t = setTimeout(() => {
      setDisplayText(INTRO_TEXT.slice(0, charIndex + 1))
      setCharIndex(p => p + 1)
    }, 80)
    return () => clearTimeout(t)
  }, [charIndex, phase])

  // Hold lalu fly
  useEffect(() => {
    if (phase !== 'hold') return
    const t = setTimeout(() => setPhase('fly'), 1000)
    return () => clearTimeout(t)
  }, [phase])

  // Hitung posisi fly
  useEffect(() => {
    if (phase !== 'fly') return

    const target = document.getElementById('profile-name')
    const source = textRef.current
    if (!target || !source) return

    target.style.visibility = 'hidden'

    const targetRect = target.getBoundingClientRect()
    const sourceRect = source.getBoundingClientRect()

    const scale      = targetRect.width / sourceRect.width
    const sourceCX   = sourceRect.left + sourceRect.width  / 2
    const sourceCY   = sourceRect.top  + sourceRect.height / 2
    const targetCX   = targetRect.left + targetRect.width  / 2
    const targetCY   = targetRect.top  + targetRect.height / 2

    setFlyStyle({
      transform: `translate(${targetCX - sourceCX}px, ${targetCY - sourceCY}px) scale(${scale})`,
    })

    const t = setTimeout(() => {
      target.style.visibility = 'visible'
      onDone()
    }, 850)

    return () => clearTimeout(t)
  }, [phase, onDone])

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{
        // Background fade out lebih awal saat fly dimulai
        // sehingga mesh-bg halaman sudah terlihat sebelum teks landing
        backgroundColor: '#060609',
        transition: phase === 'fly'
          ? 'background-color 0.6s ease, opacity 0.1s ease 0.8s'
          : 'none',
        // Saat fly: background fade ke transparan, lalu overlay hilang total
        backgroundColor: phase === 'fly' ? 'transparent' : '#060609',
        opacity: phase === 'fly' ? 1 : 1,
        pointerEvents: 'none',
      }}
    >
      {/* Glow — fade out saat fly */}
      <div
        className="absolute w-[600px] h-[300px] rounded-full bg-accent/[0.07] blur-[100px] pointer-events-none"
        style={{
          transition: phase === 'fly'
            ? 'opacity 0.5s ease, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'none',
          opacity:   phase === 'fly' ? 0 : 1,
          transform: phase === 'fly' ? 'scale(1.5)' : 'scale(1)',
        }}
      />

      <div className="relative text-center">
        {/* Label atas */}
        <p
          className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.35em] mb-5"
          style={{
            transition: phase === 'fly' ? 'opacity 0.3s ease' : 'opacity 0.5s ease',
            opacity: phase === 'typing' ? 0 : phase === 'fly' ? 0 : 0.5,
          }}
        >
          portfolio
        </p>

        {/* Nama */}
        <h1
          ref={textRef}
          className="font-display font-extrabold text-[44px] md:text-[64px] text-shimmer tracking-tight leading-none"
          style={{
            transition: phase === 'fly'
              ? 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
              : 'none',
            transformOrigin: 'center center',
            ...(phase === 'fly' ? flyStyle : {}),
          }}
        >
          {displayText}
          <span
            className="inline-block ml-1 w-[3px] rounded-full align-middle bg-accent"
            style={{
              height: '52px',
              animation: phase === 'hold' ? 'blink 1s step-start infinite' : 'none',
              opacity: phase === 'fly' ? 0 : 1,
              transition: 'opacity 0.15s ease',
            }}
          />
        </h1>

        {/* Label bawah */}
        <p
          className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.25em] mt-5"
          style={{
            transition: phase === 'fly' ? 'opacity 0.3s ease' : 'opacity 0.5s ease 0.3s',
            opacity: phase === 'typing' ? 0 : phase === 'fly' ? 0 : 0.35,
          }}
        >
          software developer
        </p>
      </div>
    </div>
  )
}