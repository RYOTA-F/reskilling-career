import { MicroCmsTagUsecase } from '@/usecases/microCMS/tags/usecaseTags.usecase'

export async function generateStaticParams() {
  const microCmsTagUsecase = new MicroCmsTagUsecase()
  const tags = await microCmsTagUsecase.getTags()

  return tags.map((tag) => ({
    slug: tag.id,
  }))
}
