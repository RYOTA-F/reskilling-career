import { ITag, ITagApiResponse } from '@/types/microCMS/microCmsTag.types'
import { API_HEADER } from './clientMicroCms.const'
import { apiEndpoint } from './clientMictoCms.endpoint'

export class MicroCmsClientTag {
  /**
   * タグ一覧取得
   */
  getTags = async (): Promise<ITagApiResponse> => {
    const res = await fetch(apiEndpoint('tags'), API_HEADER)
    return await res.json()
  }

  /**
   * タグ一件取得
   */
  getTagByID = async (id: string): Promise<ITag> => {
    const res = await fetch(apiEndpoint(`tags/${id}`), API_HEADER)
    return await res.json()
  }
}
