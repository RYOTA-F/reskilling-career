import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { MicroCmsTagUsecase } from '@/usecases/microCMS/tags/usecaseTags.usecase'
import { getTotalPage } from '@/utils/blogs/getTotalPage'

export async function generateStaticParams() {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const microCmsTagUsecase = new MicroCmsTagUsecase()

  const tags = await microCmsTagUsecase.getTags()

  const paths = []

  for (const tagData of tags) {
    const { tag } = await microCmsTagUsecase.getTagByID(tagData.id)

    const { totalCount } = await microCmsBlogUsecase.getBlogs({
      filters: `tags[contains]${tag.id}`,
    })

    const totalPage = getTotalPage(totalCount)
    const pages = [...new Array(totalPage)].map((_, i) => i + 1).splice(1)

    for (const page of pages) {
      paths.push({
        slug: tag.id,
        pageId: String(page),
      })
    }
  }

  return paths
}
