import { PAGE } from '@/const/page.const'
import { ICategory } from '@/types/microCMS/microCmsCategory.types'
import { IProcessingChildrenCategories } from '@/types/sitemap'

/**
 * サイトマップ・子カテゴリ情報を加工
 */
export const convertSitemapChildrenCategoriesData = (
  categories: ICategory[]
) => {
  const filterCategories = categories.filter((v) => !v.relation.isParent)

  return filterCategories.map(
    (v) =>
      ({
        id: v.id,
        name: v.name,
        url: `${PAGE.CATEGORY}${v.id}`,
        parent: v.relation.parent[0].id,
        blogs: [],
      } as IProcessingChildrenCategories)
  )
}
