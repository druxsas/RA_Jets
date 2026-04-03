import { Plane } from 'lucide-react'
import AnimateOnScroll from '../AnimateOnScroll'
import { useParallax } from '../useScrollAnimation'
import { STATS } from '../data/stats'

export default function AboutSection() {
  const parallaxRef = useParallax()

  return (
    <section id="about" className="relative z-10 py-12 md:py-section-y bg-white shadow-section-top overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <AnimateOnScroll animation="stagger">
            <p className="text-label-tag mb-3 text-gold">
              ABOUT US
            </p>
            <h2 className="text-display-h2-mobile md:text-display-h2 mb-4 md:mb-6 text-navy">
              Redefining Private Aviation
            </h2>
            <p className="text-gray-600 text-body-large mb-4">
              Founded with a singular vision — to make private jet travel accessible without
              compromising on luxury. RA_Jets bridges the gap between exclusivity and
              attainability, offering a seamless charter experience tailored to professionals,
              entrepreneurs, and families who value their time.
            </p>
            <p className="text-gray-600 text-body-large mb-8">
              From our curated fleet of world-class aircraft to our white-glove concierge
              service, every detail is designed to elevate your journey. We don't just fly you
              there — we transform the way you travel.
            </p>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 text-label-tag hover:opacity-80 text-gold"
            >
              View our fleet
              <Plane size={16} />
            </a>
          </AnimateOnScroll>

          {/* About image */}
          <AnimateOnScroll animation="fade-right" className="relative">
            <div ref={parallaxRef} className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/about-jet.png"
                alt="Private jet flying over mountains and clouds"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10 accent-block-navy" />
          </AnimateOnScroll>
        </div>

        {/* Stats Row */}
        <AnimateOnScroll animation="stagger" className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-stats-value text-navy">
                {stat.value}
              </p>
              <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
