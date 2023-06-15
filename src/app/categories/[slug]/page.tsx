import BlogCardList from '@/features/blogs/BlogCardList'
import CategoryDetailHeader from '@/features/categories/CategoryDetailHeader'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { MicroCmsCategoryUsecase } from '@/usecases/microCMS/categories/usecaseCategories.usecase'
import { generateStaticParams } from './generateStaticParams'
import { generateMetadata } from './generateMetadata'

export interface ICategoriesPageContext {
  params: {
    slug: string
  }
}

export default async function CategoriesPage(context: ICategoriesPageContext) {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase()

  const { slug } = context.params
  const { category } = await microCmsCategoryUsecase.getCategoryByID(slug)
  const { blogs } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    filters: `categories[contains]${slug}`,
  })

  return (
    <>
      <CategoryDetailHeader category={category} />
      <div className="mt-10">
        <BlogCardList blogs={blogs} />
      </div>
    </>
  )
}

export { generateStaticParams, generateMetadata }
