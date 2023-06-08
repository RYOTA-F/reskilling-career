import { IBlog } from './microCmsBlog.types'

export interface ITag {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  blogs: IBlog[]
}

export interface ITagApiResponse {
  contents: ITag[]
  totalCount: number
  offset: number
  limit: number
}
