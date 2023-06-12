import { ReactNode } from 'react'
import Link from 'next/link'

export const ARIA_LABEL = {
  LINK_BUTTON: 'linkButton',
}

export interface ILinkButton {
  href: string
  children: ReactNode
}

export default function LinkButton({ href, children }: ILinkButton) {
  return (
    <Link
      href={href}
      className="box-border rounded-full border border-transparent bg-blue-sub py-2 px-5 font-bold text-white duration-300 hover:border-blue-sub hover:bg-white hover:text-blue-sub"
      aria-label={ARIA_LABEL.LINK_BUTTON}
    >
      {children}
    </Link>
  )
}
