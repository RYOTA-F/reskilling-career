import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { getPageOffset } from '@/utils/blogs/getPageOffset'
import { getTotalPage } from '@/utils/blogs/getTotalPage'

export const getPageData = async (pageId: number) => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    offset: getPageOffset(String(pageId)),
  })
  const totalPage = getTotalPage(totalCount)

  return {
    blogs,
    totalPage,
  }
}
