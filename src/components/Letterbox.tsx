import { useEffect } from 'react'

/**
 * Cinematic letterbox bars pinned to the viewport.
 * Visible while the user is in the hero band (scrollY < ~80% of viewport),
 * then smoothly fades out so they don't slice through content below.
 */
export function Letterbox() {
  useEffect(() => {
    const top = document.getElementById('lb-top')
    const bot = document.getElementById('lb-bot')
    if (!top || !bot) return

    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      const fadeStart = vh * 0.25
      const fadeEnd = vh * 0.75
      const y = window.scrollY
      let opacity = 1
      if (y > fadeEnd) opacity = 0
      else if (y > fadeStart) opacity = 1 - (y - fadeStart) / (fadeEnd - fadeStart)
      top.style.opacity = String(opacity)
      bot.style.opacity = String(opacity)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="lb-top" aria-hidden="true" className="letterbox-bar letterbox-bar-top" />
      <div id="lb-bot" aria-hidden="true" className="letterbox-bar letterbox-bar-bot" />
    </>
  )
}
