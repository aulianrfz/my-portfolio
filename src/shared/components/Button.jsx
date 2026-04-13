// shared/components/Button.jsx

const variants = {
  primary: `
    relative bg-accent text-surface font-semibold overflow-hidden
    before:absolute before:inset-0 before:bg-white/0 before:transition-all before:duration-300
    hover:before:bg-white/10
    shadow-glow-sm hover:shadow-glow-md
    active:scale-[0.97]
  `,
  outline: `
    border border-accent/40 text-accent
    hover:bg-accent/8 hover:border-accent/70
    hover:shadow-glow-sm
    active:scale-[0.97]
  `,
  ghost: `
    text-ink-secondary
    hover:text-ink-primary hover:bg-surface-border/50
    active:scale-[0.97]
  `,
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-base rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-body font-medium
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}
