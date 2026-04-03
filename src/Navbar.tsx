import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function BrandLogo() {
  return (
    <span className="flex items-center gap-1.5">
      {/* Monogram mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shield shape */}
        <path
          d="M16 2L28 8V18C28 24 22.5 29 16 30C9.5 29 4 24 4 18V8L16 2Z"
          fill="#1B2A4A"
        />
        {/* Inner highlight */}
        <path
          d="M16 4L26 9V18C26 23 21.5 27.5 16 28.5C10.5 27.5 6 23 6 18V9L16 4Z"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.5"
        />
        {/* Minimal jet — vertical / ascending */}
        <path
          d="M16 8L11.5 17H14V20H18V17H20.5L16 8Z"
          fill="white"
        />
        {/* Gold accent line — exhaust trail */}
        <line x1="16" y1="20" x2="16" y2="23" stroke="#B9924F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {/* Typography */}
      <span className="flex items-baseline gap-0">
        <span className="text-xl font-bold tracking-tight color-navy">RA</span>
        <span className="text-xs font-medium tracking-widest uppercase color-gold ml-0.5">Jets</span>
      </span>
    </span>
  )
}

const NAV_ITEMS = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Advantages', href: 'advantages' },
  { label: 'FAQ', href: 'faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* SVG Filters for glass refraction distortion */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-refract" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" result="preblur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.015 0.012" numOctaves={2} seed={42} result="noise" />
            <feGaussianBlur in="noise" stdDeviation="3" result="smooth" />
            <feDisplacementMap in="preblur" in2="smooth" scale={8} xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feColorMatrix in="displaced" type="saturate" values="1.3" />
          </filter>
        </defs>
      </svg>

    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 entrance-navbar">
      <div className="liquid-glass mx-auto max-w-7xl rounded-full px-8 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="relative z-10">
          <BrandLogo />
        </a>

        {/* Desktop Menu */}
        <ul className="relative z-10 hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={`#${item.href}`}
                className="text-sm text-gray-800 hover:text-gray-600 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="relative z-10 md:hidden text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="liquid-glass-dropdown md:hidden mx-auto max-w-7xl mt-2 rounded-2xl p-3">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  className="block px-4 py-2.5 text-sm text-gray-800 hover:text-gray-600 rounded-xl hover:bg-white/40 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
    </>
  )
}
