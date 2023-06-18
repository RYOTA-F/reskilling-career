import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'

export const getPageData = async (slug: string) => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()

  const { blog, persedBody, tableOfContents } =
    await microCmsBlogUsecase.getBlogByID(slug)

  return { blog, tableOfContents, persedBody }
}
