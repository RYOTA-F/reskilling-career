import BlogCardList from '@/features/blogs/BlogCardList'
import TagDetailHeader from '@/features/tags/TagDetailHeader'
import { MicroCmsBlogUsecase } from '@/usecases/microCMS/blogs/usecaseBlogs.usecase'
import { MicroCmsTagUsecase } from '@/usecases/microCMS/tags/usecaseTags.usecase'
import { generateStaticParams } from './generateStaticParams'
import { generateMetadata } from './generateMetadata'

export interface ITagsPageContext {
  params: {
    slug: string
  }
}

export default async function TagsPage(context: ITagsPageContext) {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase()
  const microCmsTagUsecase = new MicroCmsTagUsecase()

  const { slug } = context.params
  const { tag } = await microCmsTagUsecase.getTagByID(slug)
  const { blogs } = await microCmsBlogUsecase.getBlogs({
    limit: true,
    filters: `tags[contains]${slug}`,
  })

  return (
    <>
      <TagDetailHeader tag={tag} />
      <div className="mt-10">
        <BlogCardList blogs={blogs} />
      </div>
    </>
  )
}

export { generateStaticParams, generateMetadata }
