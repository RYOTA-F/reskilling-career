import BlogDetailHeader from '@/features/blogs/BlogDetailHeader'
import BlogBody from '@/features/blogs/BlogBody'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
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
  const { blog, persedBody, tableOfContents } =
    await microCmsBlogUsecase.getBlogByID(slug)

  return (
    <>
      <BlogDetailHeader blog={blog} tableOfContents={tableOfContents} />
      <BlogBody blogBody={persedBody} />
    </>
  )
}

export { generateStaticParams, generateMetadata }
