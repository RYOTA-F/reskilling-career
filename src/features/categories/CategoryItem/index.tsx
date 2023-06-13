import Link from 'next/link'
import { PAGE } from '@/const/page.const'
import { ICategory } from '@/types/microCMS/microCmsCategory.types'

interface ICategoryItemParent {
  id: string
  name: string
}

export interface ICategoryItem {
  category: ICategory | ICategoryItemParent
}

export default function CategoryItem({ category }: ICategoryItem) {
  return (
    <div className="inline-block cursor-pointer overflow-hidden bg-blue-main border-transparent rounded-md border-[1px] box-border transition duration-400 text-[14px] sp:text-[10px] hover:bg-white hover:border-blue-main">
      <Link
        href={`${PAGE.CATEGORY}${category.id}`}
        className="block py-1 px-2 text-white hover:text-blue-main"
      >
        {category.name}
      </Link>
    </div>
  )
}
