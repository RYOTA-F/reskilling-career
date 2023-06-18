import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { getTotalPage } from '@/utils/blogs/getTotalPage'

export const getPageData = async () => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()

  const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
    limit: true,
  })
  const totalPage = getTotalPage(totalCount)

  return {
    blogs,
    totalPage,
  }
}
