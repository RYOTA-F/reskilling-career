import { Metadata } from 'next'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/getBlogs.usecase'
import { IArticlesPageContext } from './page'

export async function generateMetadata(
  context: IArticlesPageContext
): Promise<Metadata> {
  const { slug } = context.params
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const { blog } = await microCmsBlogUsecase.getBlogByID(slug)

  return {
    title: blog.title,
    description: blog.description,
  }
}
