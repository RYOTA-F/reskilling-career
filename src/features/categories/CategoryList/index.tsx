import { FolderSvg } from '@/components/Elements/Svg'
import { COLOR } from '@/const/color.const'
import CategoryItem from '@/features/categories/CategoryItem'
import { ICategory } from '@/types/microCMS/microCmsCategory.types'

export interface ICategoryList {
  categories: ICategory[]
}

export default function CategoryList({ categories }: ICategoryList) {
  const SVG_SIZE = 16 as const

  return (
    <ul className="flex items-center">
      <div className="mr-2 mb-1">
        <FolderSvg
          height={SVG_SIZE}
          width={SVG_SIZE}
          color={COLOR.BLUE_GROUP.MAIN}
          fill={COLOR.BLUE_GROUP.MAIN}
        />
      </div>
      {categories.map((v) => (
        <li key={v.id} className="[&:not(:first-of-type)]:ml-2">
          <CategoryItem category={v} />
        </li>
      ))}
    </ul>
  )
}
