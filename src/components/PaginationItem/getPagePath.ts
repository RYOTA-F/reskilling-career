import { PAGE_TYPE, TPageType } from '@/types/pageType.types'

export const getPagePath = (currentPageType: TPageType, pageNumber: number) => {
  switch (true) {
    case currentPageType === PAGE_TYPE.PAGES && pageNumber === 1:
      return PAGE_TYPE.ROOT
    case currentPageType === PAGE_TYPE.ROOT:
    case currentPageType === PAGE_TYPE.PAGES:
      return `${PAGE_TYPE.PAGES}${pageNumber}`
    default:
      return PAGE_TYPE.ROOT
  }
}
