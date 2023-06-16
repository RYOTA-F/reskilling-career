import { MicroCmsClientTag } from '@/clients/microCms/tags.client'
import { IBlogsApiResponse } from '@/types/microCMS/microCmsBlog.types'
import { ITagApiResponse } from '@/types/microCMS/microCmsTag.types'
// import { getBreadCrumbDataFromTag } from './utils/getBreadCrumb'
// import { getSeoFromTag } from './utils/getSeo'
// import { getTotalPage } from '@/utils/index'

export class MicroCmsTagUsecase {
  private readonly client: MicroCmsClientTag

  constructor() {
    this.client = new MicroCmsClientTag()
  }

  /**
   * タグ一覧取得
   */
  getTags = async () => {
    const res = await this.client.getTags()
    return res.contents
  }

  /**
   * IDを指定しタグを一件取得
   */
  getTagByID = async (id: string) => {
    const tag = await this.client.getTagByID(id)
    return { tag }
  }
}
