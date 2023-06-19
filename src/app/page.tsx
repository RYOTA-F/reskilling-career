import Pagination, { PAGE_TYPE } from '@/components/Pagination'
import BlogCardList from '@/features/blogs/BlogCardList'
import { getPageData } from './page.data'

export default async function TopPage() {
  const { blogs, totalPage } = await getPageData()

  return (
    <>
      <BlogCardList blogs={blogs} />
      <Pagination
        currentPageType={PAGE_TYPE.ROOT}
        currentPage={1}
        totalPage={totalPage}
      />
    </>
  )
}
