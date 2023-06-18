import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { getTotalPage } from '@/utils/blogs/getTotalPage'

export async function generateStaticParams() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { totalCount } = await microCmsBlogUsecase.getAllBlogs()

  const totalPage = getTotalPage(totalCount)
  const pages = [...new Array(totalPage)].map((_, i) => i + 1).splice(1)

  return pages.map((page) => ({
    pageId: String(page),
  }))
}
