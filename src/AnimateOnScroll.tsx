import { useScrollAnimation } from './useScrollAnimation'

type Animation = 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'stagger'

const animationClasses: Record<Animation, { hidden: string; visible: string }> = {
  'fade-up': { hidden: 'scroll-hidden', visible: 'scroll-visible' },
  'fade-left': { hidden: 'scroll-hidden-left', visible: 'scroll-visible-left' },
  'fade-right': { hidden: 'scroll-hidden-right', visible: 'scroll-visible-right' },
  'scale': { hidden: 'scroll-hidden-scale', visible: 'scroll-visible-scale' },
  'stagger': { hidden: 'stagger-children', visible: 'stagger-children stagger-visible' },
}

interface Props {
  animation?: Animation
  delay?: number
  className?: string
  children: React.ReactNode
}

export default function AnimateOnScroll({ animation = 'fade-up', delay = 0, className = '', children }: Props) {
  const { ref, isVisible } = useScrollAnimation()
  const classes = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={`${isVisible ? classes.visible : classes.hidden} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
