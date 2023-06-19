import Link from 'next/link'
import { TPageType } from '@/types/pageType.types'
import { getPagePath } from './getPagePath'

export interface IPaginationItem {
  currentPageType: TPageType
  pageNumber: number
  isCurrentPage?: boolean
  slug?: string
}

export default function PaginationItem({
  currentPageType,
  pageNumber,
  isCurrentPage,
  slug,
}: IPaginationItem) {
  const pagePath = getPagePath(currentPageType, pageNumber, slug)

  return (
    <div
      className="h-9 w-9 leading-9 text-center text-gray-text-t1 transition-all bg-gray-bg-t1 bg-gray-pagination hover:bg-blue-main hover:text-white rounded"
      style={isCurrentPage ? { background: '#709dd8' } : {}}
    >
      {isCurrentPage ? (
        <span className="block text-white">{pageNumber}</span>
      ) : (
        <Link href={pagePath} className="block text-white cursor-pointer">
          {pageNumber}
        </Link>
      )}
    </div>
  )
}
