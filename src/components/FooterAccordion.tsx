import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FooterAccordionProps {
  title: string
  children: React.ReactNode
}

export default function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* Desktop: static title + content */}
      <h4 className="hidden md:block text-label-tag text-white mb-4">
        {title}
      </h4>
      <div className="hidden md:block">{children}</div>

      {/* Mobile: accordion */}
      <button
        className="md:hidden w-full flex items-center justify-between py-3 border-t border-gray-700 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-label-tag text-white">{title}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-500 ease-in-out ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`md:hidden overflow-hidden faq-panel ${open ? 'is-open' : ''}`}>
        <div className="pt-3 pb-1">{children}</div>
      </div>
    </div>
  )
}
