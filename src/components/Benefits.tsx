import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Clock, Leaf, PiggyBank, ShieldCheck } from 'lucide-react'
import { gsap, prefersReducedMotion } from '../lib/motion'

const ITEMS = [
  {
    icon: Clock,
    title: 'Быстрота',
    description: 'Строим дома в 2–3 раза быстрее традиционных методов.',
  },
  {
    icon: Leaf,
    title: 'Экологичность',
    description: 'Используем безопасные материалы и сокращаем строительные отходы.',
  },
  {
    icon: PiggyBank,
    title: 'Экономия',
    description: 'Снижаем затраты на строительство до 30%.',
  },
  {
    icon: ShieldCheck,
    title: 'Надёжность',
    description: 'Дома прочные, долговечные и устойчивы к внешним факторам.',
  },
]

export default function Benefits() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.benefit-heading > *', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.benefit-heading', start: 'top 85%' },
      })

      gsap.from('.benefit-card', {
        opacity: 0,
        y: 32,
        scale: 0.96,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.benefit-grid', start: 'top 85%' },
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="benefits" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-10">
        <div className="benefit-heading grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-10">
          <div>
            <p className="eyebrow">Преимущества</p>
            <h2 className="mt-4 text-display-md font-heading font-extrabold text-ink-950">
              Почему 3D-печать лучше традиционного строительства?
            </h2>
          </div>
        </div>

        <div className="benefit-grid mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, description }) => (
            // GSAP tweens opacity/y/scale on this outer node on scroll-in; the hover
            // elevation lives on the inner node so its CSS transition never competes
            // with GSAP's inline-style updates on the same element.
            <div key={title} className="benefit-card rounded-2xl">
              <div className="card-hover rounded-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-950/5 text-ink-950">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-ink-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
