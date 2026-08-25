import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Boxes } from 'lucide-react'
import EmailForm from './EmailForm'
import HeroIllustration from './illustrations/HeroIllustration'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/motion'

export default function Hero() {
  const root = useRef<HTMLElement>(null)
  const imageWrap = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-line', {
        opacity: 0,
        y: 36,
        duration: 0.9,
        stagger: 0.12,
      })
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from('.hero-form', { opacity: 0, y: 20, duration: 0.7 }, '-=0.45')
        .from(
          '.hero-image',
          { opacity: 0, scale: 0.96, duration: 1 },
          '-=0.7',
        )
        .from(
          '.hero-badge',
          { opacity: 0, y: 16, scale: 0.92, duration: 0.6 },
          '-=0.4',
        )

      // Subtle parallax drift of the illustration as the page scrolls.
      gsap.to(imageWrap.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })

      return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      id="tech"
      className="relative overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-sage-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-container gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-10">
        <div>
          <h1 className="text-display-lg font-heading font-extrabold text-sand">
            <span className="hero-line block">Будущее</span>
            <span className="hero-line block">строительства</span>
            <span className="hero-line block text-sage-400">уже сегодня</span>
          </h1>

          <p className="hero-sub mt-6 max-w-md text-base text-sand/60 sm:text-lg">
            Мы строим дома с помощью 3D-печати — быстро, надёжно и доступно.
            Технологии, которые меняют будущее.
          </p>

          <div className="hero-form mt-8 max-w-md">
            <EmailForm />
          </div>
        </div>

        <div ref={imageWrap} className="relative">
          {/* GSAP animates this outer node's opacity/scale on mount — keep it free of
              CSS `transition` on the same properties or the two will fight and the
              element can get stuck mid-tween. Hover-zoom lives on the inner node instead. */}
          <div className="hero-image aspect-[5/4] w-full overflow-hidden rounded-[28px] border border-white/10 shadow-elevated">
            <div className="h-full w-full transition-transform duration-500 ease-premium hover:scale-[1.04]">
              <HeroIllustration />
            </div>
          </div>

          <div className="hero-badge animate-float absolute -bottom-6 right-4 flex w-64 items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/80 p-4 shadow-elevated backdrop-blur-md sm:right-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-400/15 text-sage-400">
              <Boxes className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-sand">3D-печать домов</p>
              <p className="text-xs text-sand/55">Точность. Скорость. Надёжность.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
