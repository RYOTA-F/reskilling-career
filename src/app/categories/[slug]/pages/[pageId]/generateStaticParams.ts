import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { MicroCmsCategoryUsecase } from '@/usecases/microCMS/categories/usecaseCategories.usecase'
import { getTotalPage } from '@/utils/blogs/getTotalPage'

export async function generateStaticParams() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase()

  const categories = await microCmsCategoryUsecase.getCategories()

  const paths = []

  for (const categoryData of categories) {
    const { category } = await microCmsCategoryUsecase.getCategoryByID(
      categoryData.id
    )

    const { totalCount } = await microCmsBlogUsecase.getBlogs({
      filters: `categories[contains]${category.id}`,
    })

    const totalPage = getTotalPage(totalCount)
    const pages = [...new Array(totalPage)].map((_, i) => i + 1).splice(1)

    for (const page of pages) {
      paths.push({
        slug: category.id,
        pageId: String(page),
      })
    }
  }

  return paths
}
