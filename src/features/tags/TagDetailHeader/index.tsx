import { H1 } from '@/components/Elements/Heading'
import { ITag } from '@/types/microCMS/microCmsTag.types'
import { TAG_DETAIL_HEADER } from './const'

interface TagDetailHeader {
  tag: ITag
}

export default function TagDetailHeader({ tag }: TagDetailHeader) {
  return (
    <div>
      <H1>
        {tag.name}
        <span className="ml-5 text-gray-text-t1 text-base font-bold">
          {TAG_DETAIL_HEADER.TITLE_LABEL.BEFORE}
          {TAG_DETAIL_HEADER.TITLE_LABEL.TEXT}
          {TAG_DETAIL_HEADER.TITLE_LABEL.AFTER}
        </span>
      </H1>
    </div>
  )
}
