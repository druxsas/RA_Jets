import { Feather, Users, Weight } from 'lucide-react'
import AnimateOnScroll from '../AnimateOnScroll'
import { RATES } from '../data/rates'

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 py-12 md:py-section-y bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <AnimateOnScroll animation="stagger" className="text-center mb-10 md:mb-16">
          <p className="text-label-tag mb-3 text-gold">
            EXPERIENCE
          </p>
          <h2 className="text-display-h2-mobile md:text-display-h2 mb-3 md:mb-4 text-navy">
            Choose Your Experience
          </h2>
          <p className="text-gray-600 text-body-large max-w-2xl mx-auto">
            Transparent, all-inclusive pricing. No hidden fees — fuel, crew, and landing charges included.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="stagger" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {RATES.map((rate) => (
            <div
              key={rate.tier}
              className={`rounded-2xl p-8 flex flex-col ${
                rate.highlighted
                  ? 'bg-navy text-white shadow-2xl scale-[1.02]'
                  : 'bg-white text-gray-900 shadow-sm border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                {rate.tier === 'Light' && <Feather size={24} className={rate.highlighted ? 'text-gray-300' : 'text-gray-400'} />}
                {rate.tier === 'Midsize' && <Users size={24} className={rate.highlighted ? 'text-gray-300' : 'text-gray-400'} />}
                {rate.tier === 'Heavy' && <Weight size={24} className={rate.highlighted ? 'text-gray-300' : 'text-gray-400'} />}
                <h3 className="text-display-h3">{rate.tier}</h3>
              </div>
              <p className={`text-sm mb-1 ${rate.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                {rate.capacity}
              </p>
              <p className={`mb-6 ${rate.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>
                {rate.description}
              </p>
              <div className="mb-6">
                <span className="text-price-large">{rate.price}</span>
                <span className={`text-sm ${rate.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                  {rate.unit}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {rate.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${rate.highlighted ? 'text-green-400' : 'text-green-600'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${rate.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`block py-3 ${
                  rate.highlighted
                    ? 'text-center rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100'
                    : 'btn-primary'
                }`}
              >
                Request Quote
              </a>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
