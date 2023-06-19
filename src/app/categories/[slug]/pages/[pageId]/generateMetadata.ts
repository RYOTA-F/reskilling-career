import { Metadata } from 'next'
import { MicroCmsCategoryUsecase } from '@/usecases/microCMS/categories/usecaseCategories.usecase'
import { ICategoriesPagesPageContext } from './page'

export async function generateMetadata(
  context: ICategoriesPagesPageContext
): Promise<Metadata> {
  const { slug } = context.params
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase()

  const { category } = await microCmsCategoryUsecase.getCategoryByID(slug)

  return {
    title: `カテゴリ：${category.name}`,
    description: category.name,
  }
}
