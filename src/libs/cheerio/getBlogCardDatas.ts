import cheerio from 'cheerio'
import { IBlog, IBlogCardData } from '@/types/microCMS/microCmsBlog.types'

/**
 * ブログカード情報を取得
 */
export const getBlogCardDatas = async (contents: IBlog['body']) => {
  const $ = cheerio.load(contents, { _useHtmlParser2: true })

  const convertLinks = $('a')
    .toArray()
    .map((data) => {
      // urlをhttps://~形式に
      const url =
        // @ts-ignore
        data.attribs.href.indexOf('http') === -1 &&
        process.env.NEXT_PUBLIC_DOMEIN
          ? // @ts-ignore
            `${process.env.NEXT_PUBLIC_DOMEIN}${data.attribs.href}` // eslint-disable-line
          : // @ts-ignore
            data.attribs.href
      return { url: url }
    })

  const temps = await Promise.all(
    convertLinks.map(async (link) => {
      const metas = await fetch(link.url as string)
        .then((res) => res.text())
        .then((text) => {
          const $ = cheerio.load(text)
          const metas = $('meta').toArray()
          const metaData: IBlogCardData = {
            url: link.url,
            title: '',
            description: '',
            image: '',
            site: '',
          }
          for (let i = 0; i < metas.length; i++) {
            // タイトル
            if (
              // @ts-ignore
              metas[i].attribs?.property === 'og:title' ||
              // @ts-ignore
              metas[i].attribs?.name === 'twitter:title'
            )
              // @ts-ignore
              metaData.title = metas[i].attribs.content
            // 説明
            // @ts-ignore
            if (metas[i].attribs?.property === 'og:description')
              // @ts-ignore
              metaData.description = metas[i].attribs.content
            // 画像
            if (
              // @ts-ignore
              metas[i].attribs?.property === 'og:image' ||
              // @ts-ignore
              metas[i].attribs?.name === 'twitter:image'
            )
              // @ts-ignore
              metaData.image = metas[i].attribs.content
            // サイト名
            // @ts-ignore
            if (metas[i].attribs?.property === 'og:site_name')
              // @ts-ignore
              metaData.site = metas[i].attribs.content
          }
          return metaData
        })
        .catch((e) => {
          return e as Error
        })
      return metas
    })
  )

  return temps.filter((temp) => temp !== undefined) as IBlogCardData[]
}
