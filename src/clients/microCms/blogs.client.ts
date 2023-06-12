import { IBlog, IBlogsApiResponse } from '@/types/microCMS/microCmsBlog.types'
import { API_HEADER } from './clientMicroCms.const'
import { apiEndpoint } from './clientMictoCms.endpoint'

export class MicroCmsClientBlog {
  /** ブログ一覧取得 */
  getBlogs = async (): Promise<IBlogsApiResponse> => {
    const res = await fetch(apiEndpoint('blogs'), API_HEADER)
    return await res.json()
  }

  /** ブログ一件取得 */
  getBlogByID = async (id: string): Promise<IBlog> => {
    const res = await fetch(apiEndpoint(`blogs/${id}`), API_HEADER)
    return await res.json()
  }
}
