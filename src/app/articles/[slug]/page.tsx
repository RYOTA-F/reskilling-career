import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/getBlogs.usecase'
import { generateStaticParams } from './generateStaticParams'
import { generateMetadata } from './generateMetadata'

export interface IArticlesPageContext {
  params: {
    slug: string
  }
}

export default async function ArticlesPage(context: IArticlesPageContext) {
  const { slug } = context.params
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const blog = await microCmsBlogUsecase.getBlogByID(slug)

  return (
    <div>
      ArticlesPage
      {slug}
      {blog.title}
    </div>
  )
}

export { generateStaticParams, generateMetadata }
