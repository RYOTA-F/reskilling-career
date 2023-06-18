import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'

export async function generateStaticParams() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const res = await microCmsBlogUsecase.getAllBlogs()

  return res.blogs.map((blog) => ({
    slug: blog.id,
  }))
}
