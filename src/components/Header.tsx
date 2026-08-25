import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#tech', label: 'Технологии' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#about', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
]

function Logo({ light = true }: { light?: boolean }) {
  const stroke = light ? '#F4F2EC' : '#121613'
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label="Future 3D Construction — на главную">
      <svg width="34" height="34" viewBox="0 0 48 48" fill="none" className="shrink-0">
        <path d="M12 24L24 13L36 24" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21V35H32V21" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 35V27H27V35" stroke="#8A9B78" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={`font-heading leading-tight ${light ? 'text-sand' : 'text-ink-950'}`}>
        <span className="block text-[15px] font-extrabold tracking-tight">FUTURE</span>
        <span className="block text-[9px] font-semibold tracking-[0.22em] text-sage-400">3D CONSTRUCTION</span>
      </span>
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close mobile menu on Escape for keyboard users.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium ${
        scrolled || open ? 'bg-ink-950/80 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sand/80 transition-colors duration-200 hover:text-sand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacts" className="btn-dark hidden lg:inline-flex">
          Связаться с нами
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-sand transition-colors hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 ease-premium lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <nav
            className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 sm:px-8"
            aria-label="Мобильная навигация"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-sand/90 transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacts" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Связаться с нами
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
