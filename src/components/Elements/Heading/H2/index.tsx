import { ARIA_LABEL } from '../const'
import { IHeadingDefault } from '../types'

export default function H2({ children }: IHeadingDefault) {
  return (
    <h2
      className="my-[48px] py-4 px-6 text-white bg-blue-main relative text-xl font-bold"
      aria-label={ARIA_LABEL.H2}
    >
      <div className="absolute w-full -top-1 left-0 border-t-2 border-blue-main content-['']" />
      {children}
      <div className="absolute w-full -bottom-1 left-0 border-t-2 border-blue-main content-['']" />
    </h2>
  )
}
