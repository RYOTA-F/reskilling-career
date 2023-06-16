import { IBlog } from '@/types/microCMS/microCmsBlog.types'
import { ICategory } from '@/types/microCMS/microCmsCategory.types'
import { convertSitemapBlogsData } from './convertSitemapBlogsData'
import { convertSitemapParentCategoriesData } from './convertSitemapParentCategoriesData'
import { convertSitemapChildrenCategoriesData } from './convertSitemapChildrenCategoriesData'

/**
 * サイトマップ情報を取得
 */
export const createSitemapData = (blogs: IBlog[], categories: ICategory[]) => {
  // 必要な投稿情報に加工
  const sitemapBlogs = convertSitemapBlogsData(blogs)
  // 親カテゴリを分離
  const parentCategories = convertSitemapParentCategoriesData(categories)
  // 子カテゴリを分離
  const childrenCategories = convertSitemapChildrenCategoriesData(categories)

  // 子カテゴリに紐づく投稿一覧を格納
  childrenCategories.forEach((v) => {
    v.blogs = sitemapBlogs.filter((blog) => blog.category === v.id)
  })

  // 親カテゴリに紐づく子カテゴリ一覧を取得
  parentCategories.forEach((v) => {
    v.children = childrenCategories.filter(
      (category) => category.parent === v.id
    )
  })

  return parentCategories
}
