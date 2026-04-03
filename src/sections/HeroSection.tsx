import { useRef, useEffect, useCallback } from 'react'

const VIDEO_URL = '/video/hero.mp4?v=2'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVisibility = useCallback((entries: IntersectionObserverEntry[]) => {
    const video = videoRef.current
    if (!video) return
    if (entries[0].isIntersecting) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(handleVisibility, { threshold: 0.25 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [handleVisibility])

  return (
    <div className="relative h-screen z-[6] clip-inset">
      <section id="home" className="fixed top-0 left-0 right-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full object-cover will-change-transform entrance-video hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Gradient overlay: gray top to transparent bottom */}
        <div className="absolute inset-0 pointer-events-none overlay-gradient-top" />
        {/* Dark overlay behind content for text legibility */}
        <div className="absolute inset-0 pointer-events-none overlay-dark-hero" />

        <div className="relative h-full flex flex-col">
          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center pt-0 md:pt-20 px-4">
            <div className="liquid-glass-light rounded-x-large px-6 py-8 sm:px-10 sm:py-12 md:px-hero-card-x md:py-hero-card-y text-center max-w-lg md:max-w-none">
              <p className="text-label-tag mb-3 sm:mb-4 entrance-label text-white">
                EXCLUSIVE CHARTER
              </p>
              <h1>
                <span className="block text-display-h1-mobile sm:text-display-h2 md:text-display-h1 entrance-heading-1 text-white text-shadow-hero">
                  Fly Beyond
                </span>
                <span className="block text-display-h1-mobile sm:text-display-h2 md:text-display-h1 entrance-heading-2 text-white text-shadow-hero">
                  Limits
                </span>
              </h1>
              <p className="text-body-base sm:text-body-large md:text-body-large-20 mb-5 sm:mb-6 max-w-2xl mx-auto mt-4 sm:mt-6 entrance-subtitle text-white/75">
                Where every mile becomes a first-class experience.
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4 entrance-buttons">
                <a
                  href="#about"
                  className="btn-ghost px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-label-button sm:text-body-base text-white border border-white/30 hover:border-white/60 hover:bg-white/10 whitespace-nowrap"
                >
                  Explore Fleet
                </a>
                <a href="#experience" className="btn-primary text-label-button sm:text-body-base whitespace-nowrap">
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
