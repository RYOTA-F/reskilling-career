import { TagSvg } from '@/components/Elements/Svg'
import { COLOR } from '@/const/color.const'
import TagItem from '@/features/tags/TagItem'
import { ITag } from '@/types/microCMS/microCmsTag.types'

const SVG_SIZE = 16 as const

export interface ITagList {
  tags: ITag[]
}

export default function TagList({ tags }: ITagList) {
  return (
    <ul className="flex items-center">
      <div className="mr-2 mb-1">
        <TagSvg
          height={SVG_SIZE}
          width={SVG_SIZE}
          color={COLOR.GRAY_SCALE.GRAY.TEXT_1}
        />
      </div>
      {tags.map((v) => (
        <li key={v.id} className="[&:not(:first-of-type)]:ml-2">
          <TagItem tag={v} />
        </li>
      ))}
    </ul>
  )
}
