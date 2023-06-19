import BlogCardList from '@/features/blogs/BlogCardList'
import CategoryDetailHeader from '@/features/categories/CategoryDetailHeader'
import Pagination, { PAGE_TYPE } from '@/components/Pagination'
import { generateMetadata } from './generateMetadata'
import { generateStaticParams } from './generateStaticParams'
import { getPageData } from './page.data'

export interface ICategoriesPagesPageContext {
  params: {
    slug: string
    pageId: string
  }
}

export default async function CategoriesPagesPage(
  context: ICategoriesPagesPageContext
) {
  const { slug, pageId } = context.params
  const { category, blogs, totalPage } = await getPageData(slug, pageId)

  return (
    <>
      <CategoryDetailHeader category={category} />
      <div className="mt-10">
        <BlogCardList blogs={blogs} />
        <Pagination
          currentPageType={PAGE_TYPE.CATEGORIES}
          currentPage={Number(pageId)}
          totalPage={totalPage}
          slug={slug}
        />
      </div>
    </>
  )
}

export { generateMetadata, generateStaticParams }
