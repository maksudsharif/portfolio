import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
let smoother: ScrollSmoother | undefined

document.querySelectorAll<HTMLAnchorElement>('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => link.closest('details')?.removeAttribute('open'))
})

if (!reducedMotion.matches) {
  document.documentElement.classList.add('gsap-enhanced')

  smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.15,
    smoothTouch: 0.08,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
  })

  const revealDefaults = {
    autoAlpha: 0,
    duration: 0.85,
    ease: 'power3.out',
    y: 38,
  } as const

  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

  heroTimeline
    .from('.site-header', { autoAlpha: 0, duration: 0.55, y: -18 })
    .from('.hero-copy > *', { autoAlpha: 0, duration: 0.82, stagger: 0.09, y: 30 }, '-=0.2')
    .from(
      '.platform-visual',
      { autoAlpha: 0, duration: 1, rotateY: -3, transformOrigin: 'left center', x: 46 },
      '-=0.75',
    )
    .from(
      '.flow-lines span',
      { duration: 0.5, scaleY: 0, stagger: 0.08, transformOrigin: 'top' },
      '-=0.45',
    )
    .from('.service-grid article', { autoAlpha: 0, duration: 0.5, stagger: 0.06, y: 12 }, '-=0.3')
    .from('.trusted-strip > *', { autoAlpha: 0, duration: 0.6, stagger: 0.08, y: 14 }, '-=0.2')

  gsap.to('.status-dot, .live-indicator, .pulse-dot', {
    duration: 1.15,
    ease: 'sine.inOut',
    opacity: 0.45,
    repeat: -1,
    scale: 1.5,
    stagger: 0.18,
    yoyo: true,
  })

  gsap.utils.toArray<HTMLElement>('.section-heading').forEach((heading) => {
    gsap.from(heading.children, {
      ...revealDefaults,
      stagger: 0.12,
      scrollTrigger: {
        trigger: heading,
        start: 'top 82%',
        once: true,
      },
    })
  })

  const capabilityCards = gsap.utils.toArray<HTMLElement>('.capability-card')

  gsap.from(capabilityCards, {
    ...revealDefaults,
    onComplete: () => gsap.set(capabilityCards, { clearProps: 'transform' }),
    scale: 0.985,
    stagger: 0.12,
    scrollTrigger: {
      trigger: '.capability-grid',
      start: 'top 82%',
      once: true,
    },
  })

  gsap.from('.proof-copy > *', {
    ...revealDefaults,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.proof-copy',
      start: 'top 82%',
      once: true,
    },
  })

  gsap.from('.proof-grid article', {
    autoAlpha: 0,
    duration: 0.75,
    ease: 'power3.out',
    scale: 0.94,
    stagger: 0.1,
    y: 24,
    scrollTrigger: {
      trigger: '.proof-grid',
      start: 'top 84%',
      once: true,
    },
  })

  gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
    gsap.from(item, {
      ...revealDefaults,
      scrollTrigger: {
        trigger: item,
        start: 'top 84%',
        once: true,
      },
    })
  })

  gsap.from('.stack-intro > *', {
    ...revealDefaults,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.stack-intro',
      start: 'top 80%',
      once: true,
    },
  })

  gsap.utils.toArray<HTMLElement>('.stack-groups article').forEach((group) => {
    gsap.from(group, {
      autoAlpha: 0,
      duration: 0.72,
      ease: 'power3.out',
      x: 34,
      scrollTrigger: {
        trigger: group,
        start: 'top 86%',
        once: true,
      },
    })
  })

  gsap.from('.about-panel > *', {
    ...revealDefaults,
    stagger: 0.09,
    scrollTrigger: {
      trigger: '.about-panel',
      start: 'top 80%',
      once: true,
    },
  })

  gsap.from('.about blockquote', {
    autoAlpha: 0,
    duration: 0.9,
    ease: 'power3.out',
    rotate: 1.5,
    scale: 0.96,
    x: 40,
    scrollTrigger: {
      trigger: '.about blockquote',
      start: 'top 84%',
      once: true,
    },
  })

  gsap.from('.contact-inner > *', {
    autoAlpha: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.1,
    y: 34,
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 72%',
      once: true,
    },
  })

  gsap.from('.footer-layout > *, .footer-bottom > *', {
    autoAlpha: 0,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.08,
    y: 22,
    scrollTrigger: {
      trigger: '.site-footer',
      start: 'top 92%',
      once: true,
    },
  })

  gsap.to('.hero-grid', {
    ease: 'none',
    yPercent: 16,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })

  gsap.to('.hero-glow-one', {
    ease: 'none',
    x: 54,
    y: 90,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  })

  gsap.to('.platform-visual', {
    ease: 'none',
    y: -42,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.1,
    },
  })

  gsap.to('.contact-grid', {
    ease: 'none',
    yPercent: 18,
    scrollTrigger: {
      trigger: '.contact',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  })
}

document.addEventListener('click', (event) => {
  const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
  const hash = anchor?.getAttribute('href')

  if (!anchor || !hash || hash === '#') return

  const target = document.querySelector<HTMLElement>(hash)
  if (!target || !smoother || reducedMotion.matches) return

  event.preventDefault()

  const navHeight = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
  )
  const destination = Math.max(0, smoother.offset(target, 'top top') - navHeight - 18)

  smoother.scrollTo(destination, true)
  window.history.pushState(null, '', hash)

  if (anchor.classList.contains('skip-link')) {
    gsap.delayedCall(0.9, () => target.focus({ preventScroll: true }))
  }
})

if (smoother && window.location.hash) {
  const initialTarget = document.querySelector<HTMLElement>(window.location.hash)

  if (initialTarget) {
    requestAnimationFrame(() => {
      const navHeight = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      )
      smoother?.scrollTo(
        Math.max(0, smoother.offset(initialTarget, 'top top') - navHeight - 18),
        false,
      )
    })
  }
}

window.addEventListener('load', () => ScrollTrigger.refresh())
document.fonts.ready.then(() => ScrollTrigger.refresh())
