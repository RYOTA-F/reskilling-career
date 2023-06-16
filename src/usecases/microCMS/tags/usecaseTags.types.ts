import { IBlog, IBreadCrumb, ISeo } from '@/types/microCMS/microCmsBlog.types'
import { ITag } from '@/types/microCMS/microCmsTag.types'

export interface IGetTagsResponse {
  tags: ITag[]
}

export interface IGetTagByIdParams {
  id: string
  limit?: boolean
  offset?: number
}

export interface IGetTagByIdResponse {
  tag: ITag
  blogs: IBlog[]
  totalPage: number
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseTag {
  getTags: () => Promise<IGetTagsResponse>
  getTagById: (params: IGetTagByIdParams) => Promise<IGetTagByIdResponse>
}
