import { IBlogCardData } from '@/types/microCMS/microCmsBlog.types'
import { getBlogCardTwitterDom } from './getBlogCardTwitterDom'
import { getBlogCardNoDataDom } from './getBlogCardNoDataDom'
import { getBlogCardDefaultDom } from './getBlogCardDefaultDom'
import { TWITTER } from './blogCard.const'

/**
 * ブログカードのDOMを取得
 */
export const getBlogCardDom = (blogCardData: IBlogCardData) => {
  // Twitterリンク
  if (
    blogCardData?.url?.includes(TWITTER.URL) &&
    !blogCardData?.url?.includes(TWITTER.CARD_LINK)
  ) {
    return getBlogCardTwitterDom(blogCardData)
  }

  // データが正常に取得できない場合
  if (!blogCardData.title && !blogCardData.description) {
    return getBlogCardNoDataDom(blogCardData)
  }

  // デフォルト
  return getBlogCardDefaultDom(blogCardData)
}
