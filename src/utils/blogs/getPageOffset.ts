import { MAX_BLOG_COUNT } from '@/usecases/microCMS/blogs/usecaseBlogs.const'

/**
 * 一覧のオフセット量を取得
 */
export const getPageOffset = (id: string) => {
  return parseInt(id) * MAX_BLOG_COUNT - MAX_BLOG_COUNT
}
