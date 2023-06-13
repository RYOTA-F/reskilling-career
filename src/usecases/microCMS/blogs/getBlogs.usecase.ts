import { MicroCmsClientBlog } from '@/clients/microCms/blogs.client'
import { perseBlogBody } from '@/libs/cheerio'
export class MicroCmsBlogUsecase {
  private readonly client: MicroCmsClientBlog

  constructor() {
    this.client = new MicroCmsClientBlog()
  }

  /** ブログ一覧取得 */
  getBlogs = async () => {
    const res = await this.client.getBlogs()

    return {
      blogs: res.contents,
      totalCount: res.totalCount,
    }
  }

  /** IDを指定しブログを一件取得 */
  getBlogByID = async (id: string) => {
    const res = await this.client.getBlogByID(id)
    const { body, tableOfContents } = await perseBlogBody(res.body)

    return { blog: res, body, tableOfContents }
  }
}
