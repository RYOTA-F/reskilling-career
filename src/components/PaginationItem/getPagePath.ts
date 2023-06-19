import { PAGE_TYPE, TPageType } from '@/types/pageType.types'

export const getPagePath = (
  currentPageType: TPageType,
  pageNumber: number,
  slug?: string
) => {
  switch (true) {
    case currentPageType === PAGE_TYPE.PAGES && pageNumber === 1:
      return PAGE_TYPE.ROOT
    case currentPageType === PAGE_TYPE.ROOT:
    case currentPageType === PAGE_TYPE.PAGES:
      return `${PAGE_TYPE.PAGES}${pageNumber}`
    case currentPageType === PAGE_TYPE.CATEGORIES && pageNumber === 1:
      return `${PAGE_TYPE.CATEGORIES}${slug}`
    case currentPageType === PAGE_TYPE.CATEGORIES:
      return `${PAGE_TYPE.CATEGORIES}${slug}${PAGE_TYPE.PAGES}${pageNumber}`
    default:
      return PAGE_TYPE.ROOT
  }
}
