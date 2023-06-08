/* Const */
import { COLOR } from '@/const/color'
/* Types */
import { ISvgDefaultProps } from '../types'

export const TIME_SVG_ARIA_LABEL = 'timeSvg' as const

export default function TimeSvg({
  width = 40,
  height = 40,
  color = COLOR.GRAY_SCALE.GRAY.TEXT_3,
}: ISvgDefaultProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={TIME_SVG_ARIA_LABEL}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
