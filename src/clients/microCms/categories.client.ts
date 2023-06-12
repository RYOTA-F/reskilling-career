import { ICategoryApiResponse } from '@/types/microCMS/microCmsCategory.types'
import { API_HEADER } from './clientMicroCms.const'
import { apiEndpoint } from './clientMictoCms.endpoint'

export class MicroCmsClientCategory {
  /** カテゴリ一覧取得 */
  getCategories = async (): Promise<ICategoryApiResponse> => {
    return await (await fetch(apiEndpoint('categories'), API_HEADER)).json()
  }
}
