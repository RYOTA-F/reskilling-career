import { Metadata } from 'next'
import { META_DATA } from '@/const/meta.const'

export function generateMetadata(): Metadata {
  return {
    title: `免責事項 - ${META_DATA.TITLE}`,
    description: META_DATA.DESCRIPTION,
  }
}
