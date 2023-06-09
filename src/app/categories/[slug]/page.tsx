import BlogCardList from '@/features/blogs/BlogCardList'
import CategoryDetailHeader from '@/features/categories/CategoryDetailHeader'
import Pagination, { PAGE_TYPE } from '@/components/Pagination'
import { generateMetadata } from './generateMetadata'
import { generateStaticParams } from './generateStaticParams'
import { getPageData } from './page.data'

export interface ICategoriesPageContext {
  params: {
    slug: string
  }
}

export default async function CategoriesPage(context: ICategoriesPageContext) {
  const { slug } = context.params
  const { category, blogs, totalPage } = await getPageData(slug)

  return (
    <>
      <CategoryDetailHeader category={category} />
      <div className="mt-10">
        <BlogCardList blogs={blogs} />
        <Pagination
          currentPageType={PAGE_TYPE.CATEGORIES}
          currentPage={1}
          totalPage={totalPage}
          slug={slug}
        />
      </div>
    </>
  )
}

export { generateMetadata, generateStaticParams }
