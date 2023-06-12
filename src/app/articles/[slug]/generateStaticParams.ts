import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/getBlogs.usecase'

export async function generateStaticParams() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const res = await microCmsBlogUsecase.getBlogs()

  return res.blogs.map((blog) => ({
    slug: blog.id,
  }))
}
