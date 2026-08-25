import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Standard scroll-triggered fade/rise-in used across sections. */
export const revealFrom = (
  targets: gsap.TweenTarget,
  vars?: gsap.TweenVars,
): gsap.core.Tween =>
  gsap.from(targets, {
    opacity: 0,
    y: 28,
    duration: 0.7,
    ease: 'power2.out',
    ...vars,
  })

export { gsap, ScrollTrigger }
