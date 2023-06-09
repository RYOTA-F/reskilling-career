import PaginationItem from '@/components/PaginationItem'
import { TPageType } from '@/types/pageType.types'

interface IPagination {
  currentPageType: TPageType
  currentPage: number
  totalPage: number
  slug?: string
}

export default function Pagination({
  currentPageType,
  currentPage,
  totalPage,
  slug,
}: IPagination) {
  const pages = [...new Array(totalPage)].map((_, i) => i)

  return (
    <section className="flex justify-center mt-10">
      {pages.map((v) => (
        <div key={v} className="m-1">
          <PaginationItem
            currentPageType={currentPageType}
            pageNumber={v + 1}
            isCurrentPage={currentPage === v + 1}
            slug={slug}
          />
        </div>
      ))}
    </section>
  )
}

export * from '@/types/pageType.types'
