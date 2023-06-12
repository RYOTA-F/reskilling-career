import BlogCardList from '@/features/blogs/BlogCardList'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/getBlogs.usecase'

export default async function TopPage() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blogs } = await microCmsBlogUsecase.getBlogs()

  return <BlogCardList blogs={blogs} />
}
