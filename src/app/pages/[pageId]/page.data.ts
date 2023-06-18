import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { getPageOffset } from '@/utils/blogs/getPageOffset'
import { getTotalPage } from '@/utils/blogs/getTotalPage'

export const getPageData = async (slug: string) => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()

  const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    offset: getPageOffset(slug),
  })
  const totalPage = getTotalPage(totalCount)

  return {
    blogs,
    totalPage,
  }
}
