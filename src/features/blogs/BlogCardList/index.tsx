import BlogCard from '@/features/blogs/BlogCard'
import { IBlog } from '@/types/microCMS/microCmsBlog.types'

interface IBlogCardList {
  blogs: IBlog[]
}

export default function BlogCardList({ blogs }: IBlogCardList) {
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
