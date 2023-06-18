import Pagination, { PAGE_TYPE } from '@/components/Pagination'
import BlogCardList from '@/features/blogs/BlogCardList'
// import { getPageData } from './getData'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { getPageOffset } from '@/utils/blogs/getPageOffset'
import { getTotalPage } from '@/utils/blogs/getTotalPage'
import { generateStaticParams } from './generateStaticParams'

export interface IPagesPageContext {
  params: {
    pageId: string
  }
}

export default async function PagesPage(context: IPagesPageContext) {
  const { pageId } = context.params
  // const { blogs, totalPage } = await getPageData(Number(pageId))
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    offset: getPageOffset(pageId),
  })
  const totalPage = getTotalPage(totalCount)

  return (
    <>
      <BlogCardList blogs={blogs} />
      <Pagination
        currentPageType={PAGE_TYPE.PAGES}
        currentPage={Number(pageId)}
        totalPage={totalPage}
      />
    </>
  )
}

export { generateStaticParams }
