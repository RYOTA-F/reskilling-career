import { MicroCmsCategoryUsecase } from '@/usecases/microCMS/categories/usecaseCategories.usecase'

export const getGlobalMenu = async () => {
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase()
  return await microCmsCategoryUsecase.getGlobalMenu()
}
