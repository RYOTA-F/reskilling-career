import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'

export async function generateStaticParams() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blogs } = await microCmsBlogUsecase.getAllBlogs()

  return blogs.map((blog) => ({
    slug: blog.id,
  }))
}
