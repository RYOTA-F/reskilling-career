import Pagination from '@/components/Pagination'
import BlogCardList from '@/features/blogs/BlogCardList'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { getPageOffset } from '@/utils/blogs/getPageOffset'
import { generateStaticParams } from './generateStaticParams'

export interface IPagesPageContext {
  params: {
    pageId: string
  }
}

export default async function PagesPage(context: IPagesPageContext) {
  const { pageId } = context.params
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blogs } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    offset: getPageOffset(pageId),
  })

  return (
    <>
      <BlogCardList blogs={blogs} />
      <Pagination />
    </>
  )
}

export { generateStaticParams }
