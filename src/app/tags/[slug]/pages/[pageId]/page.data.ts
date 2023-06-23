import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { MicroCmsTagUsecase } from '@/usecases/microCMS/tags/usecaseTags.usecase'
import { getTotalPage } from '@/utils/blogs/getTotalPage'

export async function getPageData(slug: string, offset: string) {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const microCmsTagUsecase = new MicroCmsTagUsecase()

  const { tag } = await microCmsTagUsecase.getTagByID(slug)
  const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    filters: `tags[contains]${slug}`,
  })
  const totalPage = getTotalPage(totalCount)

  return {
    tag,
    blogs,
    totalPage,
  }
}
