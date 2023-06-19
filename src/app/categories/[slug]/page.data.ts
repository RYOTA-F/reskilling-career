import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { MicroCmsCategoryUsecase } from '@/usecases/microCMS/categories/usecaseCategories.usecase'

export const getPageData = async (slug: string) => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase()

  const { category } = await microCmsCategoryUsecase.getCategoryByID(slug)
  const { blogs } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    filters: `categories[contains]${slug}`,
  })

  return {
    category,
    blogs,
  }
}
