import BlogCardList from '@/features/blogs/BlogCardList'
import TagDetailHeader from '@/features/tags/TagDetailHeader'
import Pagination, { PAGE_TYPE } from '@/components/Pagination'
import { generateMetadata } from './generateMetadata'
import { generateStaticParams } from './generateStaticParams'
import { getPageData } from './page.data'

export interface ITagsPagesPageContext {
  params: {
    slug: string
    pageId: string
  }
}

export default async function TagsPagesPage(context: ITagsPagesPageContext) {
  const { slug, pageId } = context.params
  const { tag, blogs, totalPage } = await getPageData(slug, pageId)

  return (
    <>
      <TagDetailHeader tag={tag} />
      <div className="mt-10">
        <BlogCardList blogs={blogs} />
        <Pagination
          currentPageType={PAGE_TYPE.TAGS}
          currentPage={Number(pageId)}
          totalPage={totalPage}
          slug={slug}
        />
      </div>
    </>
  )
}

export { generateMetadata, generateStaticParams }
