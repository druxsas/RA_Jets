import { useState } from 'react'
import AnimateOnScroll from '../AnimateOnScroll'
import { FAQS } from '../data/faqs'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="faq" className="relative z-10 py-12 md:py-section-y bg-gray-50 shadow-section-bottom">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <AnimateOnScroll animation="stagger" className="text-center mb-10 md:mb-16">
          <p className="text-label-tag mb-3 text-gold">
            FAQ
          </p>
          <h2 className="text-display-h2-mobile md:text-display-h2 mb-3 md:mb-4 text-navy">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-body-large">
            Everything you need to know before your first flight.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="stagger" className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:bg-gray-50/60 hover-smooth"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <span
                    className={`relative flex-shrink-0 w-6 h-6 transition-transform duration-500 ease-in-out ${
                      isOpen ? 'rotate-[135deg]' : 'rotate-0'
                    }`}
                  >
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 rounded-full faq-icon-bar" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full faq-icon-bar" />
                  </span>
                </button>
                <div className={`overflow-hidden faq-panel ${isOpen ? 'is-open' : ''}`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
