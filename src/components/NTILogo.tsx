import { asset } from '../lib/asset'

interface Props {
  /** Display size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Make the logo inverted (white on dark backgrounds). Default true. */
  invert?: boolean
  className?: string
}

const sizeClass: Record<NonNullable<Props['size']>, string> = {
  sm: 'h-4',
  md: 'h-6',
  lg: 'h-9',
  xl: 'h-14',
}

export function NTILogo({ size = 'md', invert = true, className = '' }: Props) {
  return (
    <img
      src={asset('/nti-logo.svg')}
      alt="NTI Gymnasiet"
      width={250}
      height={59}
      className={`${sizeClass[size]} w-auto ${invert ? '[filter:invert(1)_brightness(1.1)]' : ''} ${className}`}
      draggable={false}
    />
  )
}
