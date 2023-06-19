import { MicroCmsCategoryUsecase } from '@/usecases/microCMS/categories/usecaseCategories.usecase'

export async function generateStaticParams() {
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase()

  const categories = await microCmsCategoryUsecase.getCategories()

  return categories.map((category) => ({
    slug: category.id,
  }))
}
