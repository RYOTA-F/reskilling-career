import { ICategoryRelation } from '@/types/microCMS/microCmsCategory.types'

/**
 * カテゴリの関係性を取得
 */
export const getCategoryRelation = (relation: ICategoryRelation) => {
  const isParent = relation.isParent
  const categoryParent =
    !isParent && relation.parent ? relation.parent[0] : null
  const categoryChildren =
    isParent && relation.children ? relation.children[0] : null

  return { isParent, categoryParent, categoryChildren }
}
