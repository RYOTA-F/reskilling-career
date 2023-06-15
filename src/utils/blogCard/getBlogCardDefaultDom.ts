import { IBlogCardData } from '@/types/microCMS/microCmsBlog.types'
import { CLASS_NAME, NO_IMAGE_PATH } from './blogCard.const'

/**
 * デフォルトのDomを取得
 */
export const getBlogCardDefaultDom = (blogCardData: IBlogCardData) => {
  const image =
    blogCardData.image && blogCardData.image.charAt(0) !== '/'
      ? blogCardData.image
      : NO_IMAGE_PATH
  const title = `${blogCardData.title || ''}`
  const description = `${blogCardData.description || ''}`
  const site = `${blogCardData.site || ''}`

  return `
    <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME.BASE}">
      <img src="${image}" class="${CLASS_NAME.BASE}__img" />
      <span class="${CLASS_NAME.BASE}__content">
        <span class="${CLASS_NAME.BASE}__title">${title}</span>
        <span class="${CLASS_NAME.BASE}__description">${description}</span>
      </span>
      <span class="${CLASS_NAME.BASE}__site">${site}</span>
    </a>
  `
}
