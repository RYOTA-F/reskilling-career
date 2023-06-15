import Image from 'next/image'
import TimeSvg from '@/components/Elements/Svg/collections/TimeSvg'
import TableOfContents from '@/components/TableOfContents'
import CategoryList from '@/features/categories/CategoryList'
import TagList from '@/features/tags/TagList'
import { IBlog, ITableOfContents } from '@/types/microCMS/microCmsBlog.types'
import { formatDate } from '@/libs/dayjs/formatDate'
import { BLOG_DETAIL, IMAGE, TIME_ICON_SIZE } from './const'

interface IBlogDetailHeader {
  blog: IBlog
  tableOfContents: ITableOfContents[]
}

export default function BlogDetailHeader({
  blog,
  tableOfContents,
}: IBlogDetailHeader) {
  if (!blog) return null

  return (
    <section className="px-10 tb:px-0 text-gray-text-t4">
      <h1 className="text-gray-text-t3 text-[24px] font-bold sp:text-[5vw]">
        {blog.title}
      </h1>

      <div className="flex flex-wrap items-center mt-5">
        <div className="mr-5">
          <CategoryList categories={[blog.categories[0]]} />
        </div>
        <div className="mr-8">
          <TagList tags={blog.tags} />
        </div>
        <div className="flex items-center mb-2">
          <TimeSvg height={TIME_ICON_SIZE} width={TIME_ICON_SIZE} />
          <time
            dateTime={
              blog.oldPublishedAt
                ? formatDate(blog.oldPublishedAt)
                : formatDate(blog.publishedAt)
            }
            className="ml-1 text-gray-text-t1 text-[16px]"
          >
            {blog.oldPublishedAt
              ? formatDate(blog.oldPublishedAt)
              : formatDate(blog.publishedAt)}
          </time>
        </div>
      </div>

      <figure className="mt-5 rounded overflow-hidden shadow-lg">
        <Image
          src={blog.image.url}
          alt={blog.title}
          width={IMAGE.WIDTH}
          height={IMAGE.HEIGHT}
          className="w-[100%] h-[auto]"
        />
      </figure>
      <div className="mt-8">
        <p>{BLOG_DETAIL.WELCOME_MESSAGE}</p>
        <p className="mt-3">{BLOG_DETAIL.THANKS_MESSAGE}</p>
        <p className="mt-3 whitespace-pre-wrap leading-[2.2]">
          {blog.description}
        </p>
      </div>

      {tableOfContents.length && (
        <div className="w-[90%] sp:w-full mt-8 mx-auto">
          <TableOfContents tableOfContents={tableOfContents} />
        </div>
      )}
    </section>
  )
}
