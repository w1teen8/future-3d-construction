import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import EmailForm from './EmailForm'
import CtaThumb from './illustrations/CtaThumb'
import { gsap, prefersReducedMotion } from '../lib/motion'

export default function CTA() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from(root.current, {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%' },
      })
    },
    { scope: root },
  )

  return (
    <section className="bg-ink-950 px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
      <div
        ref={root}
        className="mx-auto flex max-w-container flex-col gap-8 rounded-[28px] border border-white/10 bg-ink-800 p-6 shadow-elevated sm:p-10 lg:flex-row lg:items-center lg:gap-12"
      >
        <div className="h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-48 lg:h-40 lg:w-40">
          <CtaThumb />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-heading font-extrabold text-sand sm:text-3xl">
            Хотите узнать больше о технологии 3D-печати?
          </h2>
        </div>

        <div className="w-full lg:w-[420px]">
          <EmailForm />
        </div>
      </div>
    </section>
  )
}
