import { Metadata } from 'next'
import { MicroCmsTagUsecase } from '@/usecases/microCMS/tags/usecaseTags.usecase'
import { ITagsPagesPageContext } from './page'

export async function generateMetadata(
  context: ITagsPagesPageContext
): Promise<Metadata> {
  const { slug } = context.params
  const microCmsTagUsecase = new MicroCmsTagUsecase()

  const { tag } = await microCmsTagUsecase.getTagByID(slug)

  return {
    title: `タグ：${tag.name}`,
    description: tag.name,
  }
}
