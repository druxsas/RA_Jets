import { useState, useRef, useEffect, useCallback } from 'react'
import Navbar from './Navbar'
import AnimateOnScroll from './AnimateOnScroll'
import { useParallax } from './useScrollAnimation'
import {
  Globe,
  Clock,
  Utensils,
  Shield,
  Leaf,
  Phone,
  Plane,
  Users,
  MapPin,
  Mail,
  ChevronUp,
  ChevronDown,
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Advantages', href: 'advantages' },
  { label: 'FAQ', href: 'faq' },
]

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {/* Desktop: static title + content */}
      <h4 className="hidden md:block text-sm font-semibold text-white uppercase tracking-wider mb-4">
        {title}
      </h4>
      <div className="hidden md:block">{children}</div>

      {/* Mobile: accordion */}
      <button
        className="md:hidden w-full flex items-center justify-between py-3 border-t border-gray-700 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold text-white uppercase tracking-wider">{title}</span>
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

const VIDEO_URL = '/video/hero.mp4?v=2'

const STATS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '200+', label: 'Destinations' },
  { value: '50+', label: 'Aircraft Fleet' },
  { value: '5,000+', label: 'Flights Completed' },
]

const RATES = [
  {
    tier: 'Light',
    description: 'Ideal for short trips and small groups',
    capacity: '4–6 passengers',
    price: '$4,500',
    unit: '/flight hour',
    features: [
      'Range up to 2,000 nm',
      'Complimentary refreshments',
      'Wi-Fi connectivity',
      'Luggage: 6 standard bags',
      'Dedicated flight attendant',
    ],
    highlighted: false,
  },
  {
    tier: 'Midsize',
    description: 'The perfect balance of comfort and range',
    capacity: '7–9 passengers',
    price: '$7,200',
    unit: '/flight hour',
    features: [
      'Range up to 3,500 nm',
      'Full catering service',
      'Satellite phone & Wi-Fi',
      'Luggage: 10 standard bags',
      'Stand-up cabin height',
    ],
    highlighted: true,
  },
  {
    tier: 'Heavy',
    description: 'Ultimate luxury for long-range travel',
    capacity: '10–16 passengers',
    price: '$12,800',
    unit: '/flight hour',
    features: [
      'Range up to 6,500 nm',
      'Gourmet dining experience',
      'Full entertainment suite',
      'Master suite & shower',
      'Dedicated crew of three',
    ],
    highlighted: false,
  },
]

const BENEFITS = [
  {
    icon: Globe,
    title: 'Global Coverage',
    description:
      'Access over 5,000 airports worldwide, including private terminals unavailable to commercial airlines.',
  },
  {
    icon: Phone,
    title: '24/7 Concierge',
    description:
      'Your personal aviation advisor is always one call away — from booking to landing.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Depart on your time. Change plans with as little as 4 hours notice at no extra charge.',
  },
  {
    icon: Utensils,
    title: 'Premium Catering',
    description:
      'Curated menus from world-class chefs, tailored to your dietary preferences and occasion.',
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description:
      'Private terminals, confidential manifests, and vetted crew ensure total discretion.',
  },
  {
    icon: Leaf,
    title: 'Carbon Offset',
    description:
      'Every flight is 100% carbon offset through verified environmental programs.',
  },
]

const FAQS = [
  {
    question: 'How far in advance do I need to book?',
    answer:
      'We recommend booking at least 48 hours in advance for domestic flights and 72 hours for international routes. However, we specialize in last-minute arrangements and can often accommodate requests with as little as 6 hours notice.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations made 24 hours or more before departure receive a full refund. Cancellations within 24 hours are subject to a 25% fee. We understand plans change — our concierge team will always work to find the best solution for you.',
  },
  {
    question: 'Are pets allowed on board?',
    answer:
      'Absolutely. Your pets travel in the cabin with you — no cargo hold, no restrictions on breed or size. We provide pet-friendly amenities including water bowls, blankets, and treats upon request.',
  },
  {
    question: 'What about luggage and oversized items?',
    answer:
      'Luggage capacity varies by aircraft class. Light jets accommodate up to 6 bags, midsize up to 10, and heavy jets offer virtually unlimited storage. Golf clubs, skis, and other sports equipment are always welcome.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on aircraft type, flight duration, and route. We provide transparent all-inclusive quotes with no hidden fees — fuel, crew, landing fees, and catering are included in your rate.',
  },
  {
    question: 'What safety standards do you maintain?',
    answer:
      'All aircraft in our fleet meet or exceed FAA and EASA standards. Our pilots have a minimum of 5,000 flight hours, and every aircraft undergoes rigorous maintenance checks. We hold ARG/US Platinum and Wyvern Wingman safety ratings.',
  },
]

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const footerRef = useRef<HTMLElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useParallax()

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
      {/* Fixed Navigation */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
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
            <div className="liquid-glass-light rounded-3xl px-6 py-8 sm:px-10 sm:py-12 md:px-16 md:py-14 text-center max-w-lg md:max-w-none">
              <p className="text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4 entrance-label text-white">
                EXCLUSIVE CHARTER
              </p>
              <h1>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tighter entrance-heading-1 text-white text-shadow-hero">
                  Fly Beyond
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tighter entrance-heading-2 text-white text-shadow-hero">
                  Limits
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 max-w-2xl mx-auto mt-4 sm:mt-6 entrance-subtitle color-white-muted">
                Where every mile becomes a first-class experience.
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4 entrance-buttons">
                <a
                  href="#about"
                  className="btn-ghost px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base text-white border border-white/30 hover:border-white/60 hover:bg-white/10 whitespace-nowrap"
                >
                  Explore Fleet
                </a>
                <a href="#experience" className="btn-primary text-sm sm:text-base whitespace-nowrap">
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>{/* end hero clip wrapper */}

      {/* ===== STORY SECTION ===== */}
      <section id="about" className="relative z-10 py-12 md:py-24 bg-white shadow-section-top overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text */}
            <AnimateOnScroll animation="fade-left">
              <p className="text-sm font-semibold tracking-wider mb-3 color-gold">
                ABOUT US
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 md:mb-6 color-navy">
                Redefining Private Aviation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Founded with a singular vision — to make private jet travel accessible without
                compromising on luxury. RA_Jets bridges the gap between exclusivity and
                attainability, offering a seamless charter experience tailored to professionals,
                entrepreneurs, and families who value their time.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From our curated fleet of world-class aircraft to our white-glove concierge
                service, every detail is designed to elevate your journey. We don't just fly you
                there — we transform the way you travel.
              </p>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 color-gold"
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
                <p className="text-3xl md:text-4xl font-bold tracking-tight color-navy">
                  {stat.value}
                </p>
                <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== RATES SECTION ===== */}
      <section id="experience" className="relative z-10 py-12 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-10 md:mb-16">
            <p className="text-sm font-semibold tracking-wider mb-3 color-gold">
              EXPERIENCE
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 md:mb-4 color-navy">
              Choose Your Experience
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
                  {rate.tier === 'Light' && <Plane size={24} className={rate.highlighted ? 'text-gray-300' : 'text-gray-400'} />}
                  {rate.tier === 'Midsize' && <Users size={24} className={rate.highlighted ? 'text-gray-300' : 'text-gray-400'} />}
                  {rate.tier === 'Heavy' && <Globe size={24} className={rate.highlighted ? 'text-gray-300' : 'text-gray-400'} />}
                  <h3 className="text-xl font-semibold">{rate.tier}</h3>
                </div>
                <p className={`text-sm mb-1 ${rate.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {rate.capacity}
                </p>
                <p className={`mb-6 ${rate.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>
                  {rate.description}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{rate.price}</span>
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

      {/* ===== BENEFITS SECTION ===== */}
      <section id="advantages" className="relative z-10 py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-10 md:mb-16">
            <p className="text-sm font-semibold tracking-wider mb-3 color-gold">
              ADVANTAGES
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 md:mb-4 color-navy">
              The Difference Is in the Details
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
                  <h3 className="text-lg font-semibold mb-2 color-navy">
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

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="relative z-10 py-12 md:py-24 bg-gray-50 shadow-section-bottom">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-10 md:mb-16">
            <p className="text-sm font-semibold tracking-wider mb-3 color-gold">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 md:mb-4 color-navy">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
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

      {/* Spacer for fixed footer (desktop only) */}
      <div ref={spacerRef} className="hidden md:block relative z-10 pointer-events-none" />

      {/* ===== FOOTER ===== */}
      <footer ref={footerRef} className="relative md:fixed md:bottom-0 md:left-0 md:right-0 z-[5] entrance-footer bg-navy overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <span className="flex items-center gap-1.5">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 2L28 8V18C28 24 22.5 29 16 30C9.5 29 4 24 4 18V8L16 2Z"
                      fill="white"
                    />
                    <path
                      d="M16 4L26 9V18C26 23 21.5 27.5 16 28.5C10.5 27.5 6 23 6 18V9L16 4Z"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M16 8L11.5 17H14V20H18V17H20.5L16 8Z"
                      fill="#1B2A4A"
                    />
                    <line x1="16" y1="20" x2="16" y2="23" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="flex items-baseline gap-0">
                    <span className="text-xl font-bold tracking-tight text-white">RA</span>
                    <span className="text-xs font-medium tracking-widest uppercase color-gold ml-0.5">Jets</span>
                  </span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium private aviation, made accessible. Your journey begins the moment you
                contact us.
              </p>
            </div>

            {/* Quick Links */}
            <FooterSection title="Quick Links">
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
            </FooterSection>

            {/* Contact */}
            <FooterSection title="Contact">
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
            </FooterSection>

            {/* Hours */}
            <FooterSection title="Availability">
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Clock size={14} />
                  24/7 Charter Desk
                </li>
                <li>Concierge: Mon–Sun</li>
                <li>Operations: 365 days/year</li>
              </ul>
            </FooterSection>
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

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center liquid-glass transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={22} className="color-navy" />
      </button>
    </div>
  )
}
