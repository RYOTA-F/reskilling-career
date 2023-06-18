import Pagination, { PAGE_TYPE } from '@/components/Pagination'
import BlogCardList from '@/features/blogs/BlogCardList'
import { getPageData } from './getData'

export interface IPagesPageContext {
  params: {
    pageId: string
  }
}

export default async function PagesPage(context: IPagesPageContext) {
  const { pageId } = context.params
  const { blogs, totalPage } = await getPageData(Number(pageId))

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
