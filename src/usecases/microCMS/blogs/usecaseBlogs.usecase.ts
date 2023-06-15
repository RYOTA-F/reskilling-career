import { MicroCmsClientBlog } from '@/clients/microCms/blogs.client'
import { perseBlogBody } from '@/libs/cheerio/perseBlogBody'
import { MAX_BLOG_COUNT } from './usecaseBlogs.const'
import { IGetBlogsParams } from './usecaseBlogs.types'

export class MicroCmsBlogUsecase {
  private readonly client: MicroCmsClientBlog

  constructor() {
    this.client = new MicroCmsClientBlog()
  }

  /**
   * ブログ記事・全件取得
   */
  getAllBlogs = async () => {
    const res = await this.client.getAllBlogs()

    return {
      blogs: res.contents,
      totalCount: res.totalCount,
    }
  }

  /**
   * ブログ記事・一覧取得
   */
  getBlogs = async (params: IGetBlogsParams) => {
    const limit = `limit=${params.limit ? MAX_BLOG_COUNT : 9999}`
    const offset = params.offset ? `&offset=${params.offset}` : ''
    const filters = params.filters ? `&filters=${params.filters}` : ''

    const res = await this.client.getBlogs(`?${limit}${offset}${filters}`)

    return {
      blogs: res.contents,
      totalCount: res.totalCount,
    }
  }

  /**
   * ブログ記事・IDを指定し一件取得
   */
  getBlogByID = async (id: string) => {
    const res = await this.client.getBlogByID(id)
    const { persedBody, tableOfContents } = await perseBlogBody(res.body)

    return { blog: res, persedBody, tableOfContents }
  }
}
