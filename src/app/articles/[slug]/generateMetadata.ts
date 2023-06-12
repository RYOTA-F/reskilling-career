import { Metadata } from 'next'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/getBlogs.usecase'
import { IArticlesPageContext } from './page'

export async function generateMetadata(
  context: IArticlesPageContext
): Promise<Metadata> {
  const { slug } = context.params
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { title, description } = await microCmsBlogUsecase.getBlogByID(slug)

  return {
    title,
    description,
  }
}
