import SitemapItem from '@/features/fixedPages/SitemapItem'
import { H1 } from '@/components/Elements/Heading'
import { META_DATA } from '@/const/meta.const'
import { SITEMAP } from '@/const/sitemap.const'
import { PAGE } from '@/const/page.const'
import { TITLE } from './const'
import { getSitemap } from './logic/getSitemap'

export default async function SitemapDetail() {
  const sitemap = await getSitemap()

  return (
    <section>
      <H1>{TITLE}</H1>
      {sitemap.length && (
        <ul className="my-[60px]">
          <SitemapItem
            type={SITEMAP.TOP}
            label={META_DATA.TITLE}
            url={PAGE.ROOT}
          />
          {/* 親カテゴリ */}
          {sitemap.map((parent) => (
            <li key={parent.id} className="mt-2 ml-6">
              <SitemapItem
                type={SITEMAP.PARENT}
                label={parent.name}
                url={parent.url}
              />

              {/* 子カテゴリ */}
              {parent.children.length ? (
                <ul className="mb-5">
                  {parent.children.map((children) => (
                    <li key={children.id} className="mt-2 ml-6">
                      <SitemapItem
                        type={SITEMAP.CHILDREN}
                        label={children.name}
                        url={children.url}
                      />

                      {/* 投稿 */}
                      {children.blogs.length ? (
                        <ul className="mb-5">
                          {children.blogs.map((blog) => (
                            <li key={blog.title} className="mt-2 ml-6">
                              <SitemapItem
                                type={SITEMAP.BLOG}
                                label={blog.title}
                                url={blog.url}
                              />
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
