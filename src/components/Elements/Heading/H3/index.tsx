import { ARIA_LABEL } from '../const'
import { IHeadingDefault } from '../types'

export default function H3({ children }: IHeadingDefault) {
  return (
    <h3
      className="mt-10 mb-7 py-1 px-4 text-gray-text-t4 bg-gray-list font-bold border-l-4 border-blue-main"
      aria-label={ARIA_LABEL.H3}
    >
      {children}
    </h3>
  )
}
