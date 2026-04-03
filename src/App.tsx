import { useState, useRef, useEffect } from 'react'
import Navbar from './Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import BenefitsSection from './sections/BenefitsSection'
import FaqSection from './sections/FaqSection'
import FooterSection from './sections/FooterSection'
import BackToTopButton from './components/BackToTopButton'

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const footerRef = useRef<HTMLElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)

  // Spacer height matches footer so it peeks through when scrolled to bottom
  useEffect(() => {
    const sync = () => {
      if (footerRef.current && spacerRef.current) {
        spacerRef.current.style.height = `${footerRef.current.offsetHeight}px`
      }
    }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  // Show back-to-top button after scrolling past hero
  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <BenefitsSection />
      <FaqSection />

      {/* Spacer for fixed footer (desktop only) */}
      <div ref={spacerRef} className="hidden md:block relative z-10 pointer-events-none" />

      <FooterSection ref={footerRef} />
      <BackToTopButton visible={showBackToTop} />
    </div>
  )
}
