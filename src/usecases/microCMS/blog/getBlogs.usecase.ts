import { MicroCmsClientBlog } from '@/clients/microCms/blogs.client'

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
}
