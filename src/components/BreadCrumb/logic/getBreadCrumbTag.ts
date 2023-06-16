import { PAGE } from '@/const/page.const'
import { MicroCmsTagUsecase } from '@/usecases/microCMS/tags/usecaseTags.usecase'
import { IBreadCrumb } from '@/types/microCMS/microCmsBlog.types'

export const getBreadCrumbTag = async (
  pathname: string
): Promise<IBreadCrumb> => {
  const slug = pathname.replace(PAGE.TAG, '')
  const microCmsTagUsecase = new MicroCmsTagUsecase()
  const { tag } = await microCmsTagUsecase.getTagByID(slug)

  return {
    categoryParentId: null,
    categoryParentName: null,
    categoryChildId: null,
    categoryChildName: null,
    currentName: tag.name,
  }
}
