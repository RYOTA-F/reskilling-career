import Link from 'next/link'
import { PAGE } from '@/const/page.const'
import { ITag } from '@/types/microCMS/microCmsTag.types'

export interface ITagItem {
  tag: ITag
}

export default function TagItem({ tag }: ITagItem) {
  return (
    <div className="inline-block cursor-pointer overflow-hidden bg-gray-footer border-transparent rounded-md border-[1px] box-border transition duration-400 text-[14px] sp:text-[10px] hover:bg-white hover:border-gray-footer">
      <Link
        href={`${PAGE.TAG}${tag.id}`}
        className="block py-1 px-2 text-white hover:text-gray-footer"
      >
        {tag.name}
      </Link>
    </div>
  )
}
