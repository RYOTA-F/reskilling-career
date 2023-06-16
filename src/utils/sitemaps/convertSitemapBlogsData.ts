import { PAGE } from '@/const/page.const'
import { IBlog } from '@/types/microCMS/microCmsBlog.types'

/**
 * サイトマップ・投稿情報を加工
 */
export const convertSitemapBlogsData = (blogs: IBlog[]) => {
  return blogs.map((v) => ({
    title: v.title,
    url: `${PAGE.ARTICLES}${v.id}`,
    category: v.categories[0].id,
  }))
}
