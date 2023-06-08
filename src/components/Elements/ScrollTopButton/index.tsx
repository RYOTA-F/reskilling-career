'use client'

import { useState, useCallback, useEffect } from 'react'
import { ChevronRightSvg } from '@/components/Elements/Svg'

export interface IScrollTopButton {
  forceView?: boolean
}

export default function ScrollTopButton({ forceView }: IScrollTopButton) {
  const [isView, setIsView] = useState(false)
  const TOP_POSITION = 0 as const

  const onClickScrollTop = () => {
    window.scrollTo({
      top: TOP_POSITION,
      behavior: 'smooth',
    })
  }

  const onChangeScrollHightHandelr = useCallback(() => {
    const scrollY = window.scrollY
    const height = window.outerHeight
    setIsView(scrollY > height)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onChangeScrollHightHandelr)
    return () =>
      window.removeEventListener('scroll', onChangeScrollHightHandelr)
  }, [onChangeScrollHightHandelr])

  return (
    <>
      {(isView || forceView) && (
        <button
          onClick={onClickScrollTop}
          className="h-[50px] w-[50px] pl-3 rounded-full text-center border-2 border-blue-main opacity-75 transform z-100 cursor-pointer fixed bottom-3 right-3 -rotate-90 bg-gray-list"
        >
          <ChevronRightSvg height={20} width={20} />
        </button>
      )}
    </>
  )
}
