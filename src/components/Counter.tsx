import { useEffect } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  to: number
  duration?: number
  delay?: number
  pad?: number
  suffix?: string
}

/**
 * Counter that ticks 0 → `to` once when it first enters view.
 * Fire-and-forget. Not scroll-bound.
 */
export function Counter({ to, duration = 1.6, delay = 0, pad = 0, suffix }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const v = useMotionValue(0)
  const rounded = useTransform(v, (n) => {
    const x = Math.round(n)
    return pad > 0 ? String(x).padStart(pad, '0') : String(x)
  })

  useEffect(() => {
    if (!inView) return
    const controls = animate(v, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    })
    return () => controls.stop()
  }, [inView, v, to, duration, delay])

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  )
}
