import cheerio from 'cheerio'
import hljs from 'highlight.js'
import { IBlog, ITableOfContents } from '@/types/microCMS/microCmsBlog.types'
import { getBlogCardDom } from '@/utils/blogCard/getBlogCardDom'
import { getBlogCardDatas } from './getBlogCardDatas'

/**
 * 投稿本文をパース
 */
export const perseBlogBody = async (contents: IBlog['body']) => {
  const $ = cheerio.load(contents, { _useHtmlParser2: true })

  // コードブロックをパース
  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text())
    $(element).html(result.value)
    $(element).addClass('hljs')
  })

  // ブログカード情報を取得
  const blogCardDatas = await getBlogCardDatas($.html())
  // ブログカードにパース
  $('a').each((i, element) => {
    $(element).replaceWith(getBlogCardDom(blogCardDatas[i]))
  })

  // 目次を取得
  const tableOfContents: ITableOfContents[] = $('h2, h3')
    .toArray()
    .map((element: cheerio.Element) => ({
      // @ts-ignore
      id: element.attribs.id,
      // @ts-ignore
      text: element.children[0].data,
      // @ts-ignore
      type: element.name,
    }))

  return { persedBody: $.html(), tableOfContents }
}
