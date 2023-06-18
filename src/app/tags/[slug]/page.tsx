import BlogCardList from '@/features/blogs/BlogCardList'
import TagDetailHeader from '@/features/tags/TagDetailHeader'
import { generateMetadata } from './generateMetadata'
import { generateStaticParams } from './generateStaticParams'
import { getPageData } from './page.data'

export interface ITagsPageContext {
  params: {
    slug: string
  }
}

export default async function TagsPage(context: ITagsPageContext) {
  const { slug } = context.params
  const { tag, blogs } = await getPageData(slug)

  return (
    <>
      <TagDetailHeader tag={tag} />
      <div className="mt-10">
        <BlogCardList blogs={blogs} />
      </div>
    </>
  )
}

export { generateMetadata, generateStaticParams }
