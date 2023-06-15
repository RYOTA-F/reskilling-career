import { ARIA_LABEL } from '../const'
import { IHeadingDefault } from '../types'

export default function H1({ children }: IHeadingDefault) {
  return (
    <h1
      className="pl-4 text-gray-text-t3 text-[24px] font-bold relative"
      aria-label={ARIA_LABEL.H1}
    >
      {children}
      <div className="absolute content-[''] w-full -bottom-[10px] left-0 h-[2px] bg-gradient-to-r from-blue-main" />
    </h1>
  )
}
