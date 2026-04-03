import AnimateOnScroll from '../AnimateOnScroll'
import { BENEFITS } from '../data/benefits'

export default function BenefitsSection() {
  return (
    <section id="advantages" className="relative z-10 py-12 md:py-section-y bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <AnimateOnScroll animation="stagger" className="text-center mb-10 md:mb-16">
          <p className="text-label-tag mb-3 text-gold">
            ADVANTAGES
          </p>
          <h2 className="text-display-h2-mobile md:text-display-h2 mb-3 md:mb-4 text-navy">
            The Difference Is in the Details
          </h2>
          <p className="text-gray-600 text-body-large max-w-2xl mx-auto">
            Every aspect of your journey is curated to deliver an unmatched experience.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl bg-gray-50 hover:shadow-md hover-smooth"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-navy">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-heading-card mb-2 text-navy">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
