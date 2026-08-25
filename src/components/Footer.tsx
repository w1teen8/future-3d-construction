import { Phone, Mail, MapPin, Send, Instagram, Youtube } from 'lucide-react'

const NAV_LINKS = [
  { href: '#tech', label: 'Технології' },
  { href: '#benefits', label: 'Переваги' },
  { href: '#about', label: 'Про компанію' },
  { href: '#contacts', label: 'Контакти' },
]

const SOCIALS = [
  { icon: Send, label: 'Telegram', href: 'https://t.me' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer id="contacts" className="bg-ink-950 pb-10 pt-4">
      <div className="mx-auto max-w-container border-t border-white/10 px-5 pt-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
                <path d="M12 24L24 13L36 24" stroke="#F4F2EC" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 21V35H32V21" stroke="#F4F2EC" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 35V27H27V35" stroke="#8A9B78" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-heading leading-tight text-sand">
                <span className="block text-sm font-extrabold tracking-tight">FUTURE</span>
                <span className="block text-[9px] font-semibold tracking-[0.22em] text-sage-400">3D CONSTRUCTION</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/50">
              Будуємо будинки майбутнього за допомогою 3D-друку — швидко, надійно та доступно.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-sand">Навігація</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-sand/55 transition-colors hover:text-sand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-sand">Контакти</h3>
            <ul className="mt-4 space-y-3 text-sm text-sand/55">
              <li>
                <a href="tel:+380631234567" className="flex items-center gap-2.5 transition-colors hover:text-sand">
                  <Phone className="h-4 w-4 shrink-0 text-sage-400" aria-hidden="true" />
                  +380 (63) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@future3d.ua" className="flex items-center gap-2.5 transition-colors hover:text-sand">
                  <Mail className="h-4 w-4 shrink-0 text-sage-400" aria-hidden="true" />
                  info@future3d.ua
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-sage-400" aria-hidden="true" />
                Україна, Київ
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-sand">Ми в соцмережах</h3>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sand/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-400/50 hover:text-sage-400"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-sand/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Future 3D Construction</p>
          <p>Усі права захищені</p>
        </div>
      </div>
    </footer>
  )
}
