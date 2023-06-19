/**
 * ページIDを取得
 */
export const getPageIds = (totalPage: number) => {
  if (totalPage <= 0) return []

  const pageCount = totalPage - 1
  const pageNumbers = [...new Array(pageCount)].map((_, i) => i + 2)

  return pageNumbers
}
