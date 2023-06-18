import BlogDetailHeader from '@/features/blogs/BlogDetailHeader'
import BlogBody from '@/features/blogs/BlogBody'
import { generateMetadata } from './generateMetadata'
import { generateStaticParams } from './generateStaticParams'
// import { getPageData } from './getData'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'

export interface IArticlesPageContext {
  params: {
    slug: string
  }
}

export default async function ArticlesPage(context: IArticlesPageContext) {
  const { slug } = context.params
  // const { blog, tableOfContents, persedBody } = await getPageData(slug)
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

export { generateMetadata, generateStaticParams }
