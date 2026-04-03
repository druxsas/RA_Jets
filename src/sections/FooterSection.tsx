import { forwardRef } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { NAV_ITEMS } from '../data/navigation'
import FooterAccordion from '../components/FooterAccordion'
import BrandLogo from '../components/BrandLogo'

const FooterSection = forwardRef<HTMLElement>(function FooterSection(_, ref) {
  return (
    <footer ref={ref} className="relative md:fixed md:bottom-0 md:left-0 md:right-0 z-[5] entrance-footer bg-navy overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-footer-y">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <BrandLogo variant="light" />
            </div>
            <p className="text-gray-400 text-body-small">
              Premium private aviation, made accessible. Your journey begins the moment you
              contact us.
            </p>
          </div>

          {/* Quick Links */}
          <FooterAccordion title="Quick Links">
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={`#${item.href}`}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          {/* Contact */}
          <FooterAccordion title="Contact">
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={14} />
                +1 (800) 555-JETS
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={14} />
                charter@rajets.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} />
                Miami, FL — New York, NY
              </li>
            </ul>
          </FooterAccordion>

          {/* Hours */}
          <FooterAccordion title="Availability">
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={14} />
                24/7 Charter Desk
              </li>
              <li>Concierge: Mon–Sun</li>
              <li>Operations: 365 days/year</li>
            </ul>
          </FooterAccordion>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 md:mt-16 pt-4 md:pt-8 md:border-t md:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} RA_Jets. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default FooterSection
