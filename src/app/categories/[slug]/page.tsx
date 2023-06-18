import BlogCardList from '@/features/blogs/BlogCardList'
import CategoryDetailHeader from '@/features/categories/CategoryDetailHeader'
import { generateMetadata } from './generateMetadata'
import { generateStaticParams } from './generateStaticParams'
import { getPageData } from './getData'

export interface ICategoriesPageContext {
  params: {
    slug: string
  }
}

export default async function CategoriesPage(context: ICategoriesPageContext) {
  const { slug } = context.params
  const { category, blogs } = await getPageData(slug)

  return (
    <>
      <CategoryDetailHeader category={category} />
      <div className="mt-10">
        <BlogCardList blogs={blogs} />
      </div>
    </>
  )
}

export { generateMetadata, generateStaticParams }
