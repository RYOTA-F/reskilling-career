import Pagination from '@/components/Pagination'
import BlogCardList from '@/features/blogs/BlogCardList'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'

export default async function TopPage() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()

  const { blogs } = await microCmsBlogUsecase.getBlogs({ limit: true })

  return (
    <>
      <BlogCardList blogs={blogs} />
      <Pagination />
    </>
  )
}
