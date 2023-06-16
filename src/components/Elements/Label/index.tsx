import { ReactNode } from 'react'

export interface ILabel {
  children: ReactNode
}

export default function Label({ children }: ILabel) {
  return (
    <p className="inline-block py-3 px-4 text-gray-text-t4 bg-white border-l-8 border-blue-main font-bold shadow-md">
      {children}
    </p>
  )
}
