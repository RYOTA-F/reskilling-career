// 'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { HomeSvg } from '@/components/Elements/Svg'
import { PAGE } from '@/const/page.const'
import { IBreadCrumb } from '@/types/microCMS/microCmsBlog.types'
import { BREAD_CRUMB } from './const'
import { getBreadCrumb } from './logic/getBreadCrumb'

export default async function BreadCrumb() {
  // const pathname = usePathname()
  const pathname = '/articles/if9f-hn4m'
  const breadCrumb = await getBreadCrumb(pathname)

  // if (pathname === PAGE.ROOT) return null

  return (
    <>
      {breadCrumb && (
        <ol className="flex items-center py-2 pl-[7%] sp:pl-[3%] bg-gray-list shadow-inherit text-[12px] text-gray-text-t1 whitespace-nowrap overflow-x-hidden sp:overflow-x-scroll">
          <li>
            <Link
              href={PAGE.ROOT}
              className="flex items-center hover:opacity-70 hover:underline"
            >
              <HomeSvg
                width={BREAD_CRUMB.HOME.SVG.SIZE}
                height={BREAD_CRUMB.HOME.SVG.SIZE}
              />
              <span className="ml-1">{BREAD_CRUMB.HOME.TEXT}</span>
            </Link>
          </li>

          {breadCrumb.categoryParentId && breadCrumb.categoryParentName && (
            <li className="ml-2">
              <span className="mr-1">{' >'}</span>
              <Link
                href={`${PAGE.CATEGORY}${breadCrumb.categoryParentId}`}
                className="hover:opacity-70 hover:underline"
              >
                {breadCrumb.categoryParentName}
              </Link>
            </li>
          )}

          {breadCrumb.categoryChildId && breadCrumb.categoryChildName && (
            <li className="ml-2">
              <span className="mr-1">{' >'}</span>
              <Link
                href={`${PAGE.CATEGORY}${breadCrumb.categoryChildId}`}
                className=" hover:opacity-70 hover:underline"
              >
                {breadCrumb.categoryChildName}
              </Link>
            </li>
          )}

          {breadCrumb?.currentName && (
            <li className="ml-2">
              <span className="mr-1">{' >'}</span>
              {breadCrumb.currentName}
            </li>
          )}
        </ol>
      )}
    </>
  )
}
