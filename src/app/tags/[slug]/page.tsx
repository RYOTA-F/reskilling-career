import BlogCardList from '@/features/blogs/BlogCardList'
import TagDetailHeader from '@/features/tags/TagDetailHeader'
import Pagination, { PAGE_TYPE } from '@/components/Pagination'
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
  const { tag, blogs, totalPage } = await getPageData(slug)

  return (
    <>
      <TagDetailHeader tag={tag} />
      <div className="mt-10">
        <BlogCardList blogs={blogs} />
        <Pagination
          currentPageType={PAGE_TYPE.TAGS}
          currentPage={1}
          totalPage={totalPage}
          slug={slug}
        />
      </div>
    </>
  )
}

export { generateMetadata, generateStaticParams }
