import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { MicroCmsCategoryUsecase } from '@/usecases/microCMS/categories/usecaseCategories.usecase'
import { createSitemapData } from '@/utils/sitemaps/createSitemapData'

export const getSitemap = async () => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase()

  const { blogs } = await microCmsBlogUsecase.getAllBlogs()
  const categories = await microCmsCategoryUsecase.getCategories()

  return createSitemapData(blogs, categories)
}
