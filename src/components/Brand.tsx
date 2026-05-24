import { Link } from 'react-router-dom'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  linkToHome?: boolean
  className?: string
}

const sizeClass: Record<NonNullable<Props['size']>, string> = {
  sm: 'text-[15px]',
  md: 'text-[22px]',
  lg: 'text-[32px]',
  xl: 'text-[48px]',
  hero: 'text-[clamp(56px,7vw,96px)]',
}

// NTI SVG art is 250×59 with the wordmark filling ~88% of its height.
// To match the cap-height of "TE4" we render NTI at ~1.18× the type size,
// then nudge it up 1px since SVGs sit on their geometric (not optical) baseline.
const ntiHeight: Record<NonNullable<Props['size']>, string> = {
  sm: 'h-[18px]',
  md: 'h-[26px]',
  lg: 'h-[38px]',
  xl: 'h-[56px]',
  hero: 'h-[clamp(64px,8vw,112px)]',
}

/**
 * TE4 wordmark + small NTI logo.
 * "TE4" is the primary brand mark for this site; NTI sits as a small
 * lockup beside it indicating the umbrella school.
 */
export function Brand({ size = 'md', linkToHome = true, className = '' }: Props) {
  const content = (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <span
        className={`font-sans font-black uppercase leading-none tracking-[-0.04em] ${sizeClass[size]} inline-flex items-center`}
        aria-label="TE4"
      >
        <span className="text-fg">TE</span>
        <span className="text-accent">4</span>
      </span>
      <img
        src="/nti-logo.svg"
        alt="NTI Gymnasiet"
        width={250}
        height={59}
        draggable={false}
        style={{ filter: 'invert(1) brightness(1.1)', marginTop: '-1px' }}
        className={`${ntiHeight[size]} w-auto opacity-95 hidden sm:block`}
      />
    </span>
  )

  if (!linkToHome) return content

  return (
    <Link to="/" className="inline-flex items-baseline">
      {content}
    </Link>
  )
}
