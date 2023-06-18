import Pagination, { PAGE_TYPE } from '@/components/Pagination'
import BlogCardList from '@/features/blogs/BlogCardList'
// import { getPageData } from './page.data'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { getTotalPage } from '@/utils/blogs/getTotalPage'

export default async function TopPage() {
  // const { blogs, totalPage } = await getPageData()
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
    limit: true,
  })
  const totalPage = getTotalPage(totalCount)

  return (
    <>
      <BlogCardList blogs={blogs} />
      {/* <Pagination
        currentPageType={PAGE_TYPE.ROOT}
        currentPage={1}
        totalPage={totalPage}
      /> */}
    </>
  )
}
