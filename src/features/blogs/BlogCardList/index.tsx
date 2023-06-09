import BlogCard from '@/features/blogs/BlogCard'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blog/getBlogs.usecase'

export default async function BlogCardList() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blogs } = await microCmsBlogUsecase.getBlogs()

  return (
    <article>
      <ul className="w-[100%] -mt-5 tb:mt-0 flex flex-wrap sp:block">
        {blogs.map((v) => (
          <li
            key={v.title}
            className="w-[50%] p-[2%] tb:p-[1%] sp:w-[95%] sp:p-0 sp:mx-auto sp:[&:not(:first-of-type)]:mt-4"
          >
            <BlogCard title={v.title} id={v.id} image={v.image} />
          </li>
        ))}
      </ul>
    </article>
  )
}
