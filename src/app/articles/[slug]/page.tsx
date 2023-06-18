import BlogDetailHeader from '@/features/blogs/BlogDetailHeader'
import BlogBody from '@/features/blogs/BlogBody'
import { generateMetadata } from './generateMetadata'
import { generateStaticParams } from './generateStaticParams'
import { getPageData } from './page.data'
export interface IArticlesPageContext {
  params: {
    slug: string
  }
}

export default async function ArticlesPage(context: IArticlesPageContext) {
  const { slug } = context.params
  const { blog, tableOfContents, persedBody } = await getPageData(slug)

  return (
    <>
      <BlogDetailHeader blog={blog} tableOfContents={tableOfContents} />
      <BlogBody blogBody={persedBody} />
    </>
  )
}

export { generateMetadata, generateStaticParams }
