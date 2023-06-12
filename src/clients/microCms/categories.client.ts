import { ICategoryApiResponse } from '@/types/microCMS/microCmsCategory.types'
import { API_HEADER } from './clientMicroCms.const'
import { apiEndpoint } from './clientMictoCms.endpoint'

export class MicroCmsClientCategory {
  /** カテゴリ一覧取得 */
  getCategories = async (): Promise<ICategoryApiResponse> => {
    const res = await fetch(apiEndpoint('categories'), API_HEADER)
    return await res.json()
  }
}
