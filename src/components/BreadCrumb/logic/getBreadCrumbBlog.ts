import { PAGE } from '@/const/page.const'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { IBreadCrumb } from '@/types/microCMS/microCmsBlog.types'

export const getBreadCrumbBlog = async (
  pathname: string
): Promise<IBreadCrumb> => {
  const slug = pathname.replace(PAGE.ARTICLES, '')
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blog } = await microCmsBlogUsecase.getBlogByID(slug)

  return {
    categoryParentId: null,
    categoryParentName: null,
    categoryChildId: null,
    categoryChildName: null,
    currentName: blog.title,
  }
}
