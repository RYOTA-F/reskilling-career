import { GROBAL_MENU } from '@/const/menu.const'
import { PAGE } from '@/const/page.const'
import { MicroCmsClientCategory } from '@/clients/microCms/categories.client'
import { IGlobalMenu } from '@/types/globalMenu.types'
import { ICategory } from '@/types/microCMS/microCmsCategory.types'

export class MicroCmsCategoryUsecase {
  private readonly client: MicroCmsClientCategory

  constructor() {
    this.client = new MicroCmsClientCategory()
  }

  /** グローバルメニュー取得 */
  getGlobalMenu = async () => {
    const categoryMenu = await this.getCategoryMenu()
    const fixedMenu = this.getFixedMenu()

    return [...categoryMenu, ...fixedMenu]
  }

  /** カテゴリメニュー取得 */
  getCategoryMenu = async () => {
    const res = await this.client.getCategories()
    const categories = res.contents

    // 親カテゴリ一覧
    const parentCategoryMenu: IGlobalMenu[] = categories
      .filter((v) => v.relation.isParent)
      .map((v) => ({
        label: v.name,
        url: v.id,
        children: [],
      }))

    // 子カテゴリを格納
    parentCategoryMenu.forEach((parent) =>
      categories.forEach((children) => {
        if (children.relation.parent[0]?.id === parent.url) {
          parent.children.push({
            label: children.name,
            url: `${PAGE.CATEGORY}${children.id}`,
          })
        }
      })
    )

    // 親カテゴリのURLを変換
    return parentCategoryMenu.map((v) => ({
      label: v.label,
      url: `${PAGE.CATEGORY}${v.url}`,
      children: v.children,
    }))
  }

  /** 固定メニュー取得 */
  getFixedMenu = (): IGlobalMenu[] => {
    return [
      {
        label: GROBAL_MENU.SITE_MAP.LABEL,
        url: GROBAL_MENU.SITE_MAP.URL,
        children: [],
      },
      {
        label: GROBAL_MENU.PROFILE.LABEL,
        url: GROBAL_MENU.PROFILE.URL,
        children: [],
      },
    ]
  }
}
