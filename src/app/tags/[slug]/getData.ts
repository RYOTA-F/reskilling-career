import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { MicroCmsTagUsecase } from '@/usecases/microCMS/tags/usecaseTags.usecase'

export const getPageData = async (slug: string) => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const microCmsTagUsecase = new MicroCmsTagUsecase()

  const { tag } = await microCmsTagUsecase.getTagByID(slug)
  const { blogs } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    filters: `tags[contains]${slug}`,
  })

  return {
    tag,
    blogs,
  }
}
