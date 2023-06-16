import { IBlog, IBlogsApiResponse } from '@/types/microCMS/microCmsBlog.types'
import { API_HEADER } from './settings/clientMicroCms.const'
import { apiEndpoint } from './settings/clientMictoCms.endpoint'

export class MicroCmsClientBlog {
  /**
   * ブログ全件取得
   */
  getAllBlogs = async (): Promise<IBlogsApiResponse> => {
    const res = await fetch(apiEndpoint('blogs?limit=9999'), API_HEADER)
    return await res.json()
  }

  /**
   * ブログ一覧取得
   */
  getBlogs = async (query: string): Promise<IBlogsApiResponse> => {
    const res = await fetch(apiEndpoint(`blogs${query}`), API_HEADER)
    return await res.json()
  }

  /**
   * ブログ一件取得
   */
  getBlogByID = async (id: string): Promise<IBlog> => {
    const res = await fetch(apiEndpoint(`blogs/${id}`), API_HEADER)
    return await res.json()
  }
}
