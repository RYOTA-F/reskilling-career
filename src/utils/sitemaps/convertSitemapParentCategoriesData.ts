import { PAGE } from '@/const/page.const'
import { ICategory } from '@/types/microCMS/microCmsCategory.types'
import { ISitemap } from '@/types/sitemap'

/**
 * サイトマップ・親カテゴリ情報を加工
 */
export const convertSitemapParentCategoriesData = (categories: ICategory[]) => {
  const filterCategories = categories.filter((v) => v.relation.isParent)

  return filterCategories.map(
    (v) =>
      ({
        id: v.id,
        name: v.name,
        url: `${PAGE.CATEGORY}${v.id}`,
        children: [],
      } as ISitemap)
  )
}
