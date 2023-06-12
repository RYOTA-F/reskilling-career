import { IBlogsApiResponse } from '@/types/microCMS/microCmsBlog.types'
import { API_HEADER } from './clientMicroCms.const'
import { apiEndpoint } from './clientMictoCms.endpoint'

export class MicroCmsClientBlog {
  /** ブログ一覧取得 */
  getBlogs = async (): Promise<IBlogsApiResponse> => {
    return await (await fetch(apiEndpoint('blogs'), API_HEADER)).json()
  }
}