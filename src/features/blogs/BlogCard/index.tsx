import Image from 'next/image'
import Link from 'next/link'
import { PAGE } from '@/const/page.const'
import { IBlog } from '@/types/microCMS/microCmsBlog.types'

export type IBlogCard = Pick<IBlog, 'title' | 'image'> & {
  id: string
}

export default function BlogCard({ title, id, image }: IBlogCard) {
  return (
    <div className="hover:opacity-70">
      <Link href={`${PAGE.ARTICLES}${id}`}>
        <div className="rounded-md overflow-hidden shadow-lg">
          <Image
            src={image.url}
            alt={title}
            width={image.width}
            height={image.height}
            className="duration-300 hover:scale-105"
          />
        </div>
      </Link>
    </div>
  )
}
