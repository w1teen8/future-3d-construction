import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { MessageCircle, PencilRuler, Printer, Home } from 'lucide-react'
import { gsap, prefersReducedMotion } from '../lib/motion'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Консультація',
    description: 'Обговорюємо ваш проєкт і побажання.',
  },
  {
    icon: PencilRuler,
    title: 'Проєктування',
    description: 'Створюємо 3D-модель вашого майбутнього будинку.',
  },
  {
    icon: Printer,
    title: '3D-друк',
    description: 'Друкуємо будинок на будівельному принтері.',
  },
  {
    icon: Home,
    title: 'Готовий будинок',
    description: 'Ви отримуєте якісний і сучасний будинок.',
  },
]

export default function Process() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.process-heading > *', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.process-heading', start: 'top 85%' },
      })

      gsap.from('.process-step', {
        opacity: 0,
        y: 28,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.process-track', start: 'top 80%' },
      })

      gsap.from('.process-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.1,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.process-track', start: 'top 75%' },
      })

      gsap.from('.process-line-mobile', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1.1,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.process-track-mobile', start: 'top 80%' },
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="about" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="pointer-events-none absolute right-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-sage-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-5 sm:px-8 lg:px-10">
        <div className="process-heading max-w-xl">
          <p className="eyebrow">Як ми працюємо</p>
          <h2 className="mt-4 text-display-md font-heading font-extrabold text-sand">Від ідеї до будинку</h2>
        </div>

        {/* Desktop / tablet: horizontal timeline */}
        <div className="process-track relative mt-20 hidden lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="process-line pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 h-px bg-white/15" />
          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="process-step relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-950 font-heading text-sm font-bold text-sand">
                {i + 1}
              </span>
              <span className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sage-400">
                <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-sand">{title}</h3>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-sand/55">{description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="process-track-mobile relative mt-16 space-y-10 lg:hidden">
          <div className="process-line-mobile pointer-events-none absolute left-6 top-2 bottom-2 w-px bg-white/15" />
          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="process-step relative flex items-start gap-5 pl-0">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink-950 font-heading text-sm font-bold text-sand">
                {i + 1}
              </span>
              <div className="pt-1">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sage-400">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-sand">{title}</h3>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-sand/55">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
