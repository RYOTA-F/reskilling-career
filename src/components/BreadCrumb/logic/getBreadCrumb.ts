import { PAGE } from '@/const/page.const'
import { IBreadCrumb } from '@/types/microCMS/microCmsBlog.types'
import { getBreadCrumbBlog } from './getBreadCrumbBlog'
import { getBreadCrumbTag } from './getBreadCrumbTag'

export const getBreadCrumb = async (pathname: string): Promise<IBreadCrumb> => {
  const isArticle = pathname.includes(PAGE.ARTICLES)
  const isCategory = pathname.includes(PAGE.CATEGORY)
  const isTag = pathname.includes(PAGE.TAG)

  if (isArticle) return getBreadCrumbBlog(pathname)
  if (isTag) return getBreadCrumbTag(pathname)

  return {
    categoryParentId: null,
    categoryParentName: null,
    categoryChildId: null,
    categoryChildName: null,
    currentName: 'test',
  }
}
