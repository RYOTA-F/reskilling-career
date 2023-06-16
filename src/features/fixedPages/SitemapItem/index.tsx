import Link from 'next/link'
import { SITEMAP } from '@/const/sitemap.const'
import { TSitemapType } from '@/types/sitemap'
import { ARIA_LABEL } from './const'

export interface ISitemapItem {
  type: TSitemapType
  label: string
  url: string
}

export default function SitemapItem({ type, label, url }: ISitemapItem) {
  return (
    <>
      {type === SITEMAP.TOP && (
        <div className="relative mb-8 hover:opacity-60">
          <Link
            href={url}
            className="block py-2 px-8 font-bold text-gray-text-t3 text-[18px]"
          >
            {label}
          </Link>
          <div className="absolute content-[''] w-[300px] -bottom-[10px] left-0 h-[2px] bg-gradient-to-r from-blue-main" />
        </div>
      )}

      {type === SITEMAP.PARENT && (
        <div
          className="inline-block border-l-8 border-blue-main bg-blue-sub hover:opacity-60"
          aria-label={ARIA_LABEL}
        >
          <Link
            href={url}
            className="block py-2 pl-4 pr-10 font-bold text-white text-[16px]"
          >
            {label}
          </Link>
        </div>
      )}

      {type === SITEMAP.CHILDREN && (
        <div
          className="inline-block border-l-8 border-blue-main bg-gray-list hover:opacity-60"
          aria-label={ARIA_LABEL}
        >
          <Link
            href={url}
            className="block py-2 pl-4 pr-10 font-bold text-gray-text-t3 text-[16px]"
          >
            {label}
          </Link>
        </div>
      )}

      {type === SITEMAP.BLOG && (
        <div
          className="inline-block border-b-2 border-blue-sub hover:opacity-60"
          aria-label={ARIA_LABEL}
        >
          <Link
            href={url}
            className="block py-2 pl-4 pr-10 font-bold text-gray-text-t3 text-[14px]"
          >
            {label}
          </Link>
        </div>
      )}
    </>
  )
}
