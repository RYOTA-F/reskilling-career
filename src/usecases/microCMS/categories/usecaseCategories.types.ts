import type {
  IBlog,
  IBreadCrumb,
  ISeo,
} from '@/types/microCMS/microCmsBlog.types'
import { ICategory } from '@/types/microCMS/microCmsCategory.types'
import { IGlobalMenu } from '@/types/globalMenu.types'

export interface IGetCategoriesResponse {
  categories: ICategory[]
}
export interface IGetCategoryByIdParams {
  id: string
  limit?: boolean
  offset?: number
}

export interface IGetCategoryByIdResponse {
  category: ICategory
  blogs: IBlog[]
  totalPage: number
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseCategory {
  getCategories: () => Promise<IGetCategoriesResponse>
  getCategoryById: (
    params: IGetCategoryByIdParams
  ) => Promise<IGetCategoryByIdResponse>
  getGlobalMenu: () => Promise<IGlobalMenu[]>
}
