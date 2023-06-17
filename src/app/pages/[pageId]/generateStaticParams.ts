import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { getTotalPage } from '@/utils/blogs/getTotalPage'
import { getPageIds } from '@/utils/blogs/getPageIds'

export async function generateStaticParams() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { totalCount } = await microCmsBlogUsecase.getAllBlogs()

  const totalPage = getTotalPage(totalCount)
  const pageIds = getPageIds(totalPage)

  return pageIds.map((pageId) => ({
    pageId,
  }))
}
