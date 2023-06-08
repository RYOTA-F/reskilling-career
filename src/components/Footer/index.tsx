import Link from 'next/link'
/* Const */
import { SUB_MENU_LIST } from '@/const/menu.const'
import { FOOTER } from './const'

export default function Footer() {
  return (
    <footer className="bg-gray-footer py-4 text-white">
      <ul className="flex justify-center">
        {SUB_MENU_LIST.map((v) => (
          <li
            key={v.URL}
            className="border-r-[1px] px-3 first-of-type:border-l-[1px]"
          >
            <Link href={v.URL} target="_blank">
              <span className="text-[14px]">{v.LABEL}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-center">
        <span className="mr-1 text-base">{FOOTER.COPY_MARK}</span>
        <span className="text-[12px]">{FOOTER.COPY_TEXT}</span>
      </div>
    </footer>
  )
}
