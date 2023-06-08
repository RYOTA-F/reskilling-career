import BlogCardList from '@/features/blogs/BlogCardList'
import { getBlogs } from '@/usecases/microCMS/blog/getBlogs.usecase'

export default async function TopPage() {
  const { blogs } = await getBlogs()

  return <BlogCardList blogs={blogs} />
}
