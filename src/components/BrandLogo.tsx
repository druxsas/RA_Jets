interface BrandLogoProps {
  variant?: 'dark' | 'light'
}

export default function BrandLogo({ variant = 'dark' }: BrandLogoProps) {
  const isDark = variant === 'dark'

  return (
    <span className="flex items-center gap-1.5">
      {/* Shield mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2L28 8V18C28 24 22.5 29 16 30C9.5 29 4 24 4 18V8L16 2Z"
          fill={isDark ? 'var(--color-navy)' : 'white'}
        />
        <path
          d="M16 4L26 9V18C26 23 21.5 27.5 16 28.5C10.5 27.5 6 23 6 18V9L16 4Z"
          fill="none"
          stroke={isDark ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.3)'}
          strokeWidth="0.5"
        />
        <path
          d="M16 8L11.5 17H14V20H18V17H20.5L16 8Z"
          fill={isDark ? 'white' : 'var(--color-navy)'}
        />
        <line
          x1="16" y1="20" x2="16" y2="23"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Typography */}
      <span className="flex items-baseline gap-0">
        <span className={`text-brand-name ${isDark ? 'text-navy' : 'text-white'}`}>RA</span>
        <span className="text-brand-tagline text-gold ml-0.5">Jets</span>
      </span>
    </span>
  )
}
