import BlogDetailHeader from '@/features/blogs/BlogDetailHeader'
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
  const { blog, tableOfContents } = await microCmsBlogUsecase.getBlogByID(slug)

  return (
    <>
      <BlogDetailHeader blog={blog} tableOfContents={tableOfContents} />
    </>
  )
}

export { generateStaticParams, generateMetadata }
