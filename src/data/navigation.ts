export const NAV_ITEMS = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Advantages', href: 'advantages' },
  { label: 'FAQ', href: 'faq' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
