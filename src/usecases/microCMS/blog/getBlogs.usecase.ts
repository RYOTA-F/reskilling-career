import { MicroCmsClientBlog } from '@/clients/microCms/blogs.client'

export const getBlogs = async () => {
  const client = new MicroCmsClientBlog()
  const res = await client.getBlogs()

  return {
    blogs: res.contents,
    totalCount: res.totalCount,
  }
}
