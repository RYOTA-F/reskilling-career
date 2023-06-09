import BlogCardList from '@/features/blogs/BlogCardList'

export default async function TopPage() {
  // @ts-expect-error Server Component
  return <BlogCardList />
}
