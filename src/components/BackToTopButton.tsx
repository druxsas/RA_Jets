import { ChevronUp } from 'lucide-react'

interface BackToTopButtonProps {
  visible: boolean
}

export default function BackToTopButton({ visible }: BackToTopButtonProps) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center liquid-glass transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp size={22} className="text-navy" />
    </button>
  )
}
