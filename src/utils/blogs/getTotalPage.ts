import { MAX_BLOG_COUNT } from '@/usecases/microCMS/blogs/usecaseBlogs.const'

/**
 * ページ数の合計を取得
 */
export const getTotalPage = (totalCount: number) => {
  return Math.ceil(totalCount / MAX_BLOG_COUNT)
}
