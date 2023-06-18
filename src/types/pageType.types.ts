export const PAGE_TYPE = {
  ROOT: '/',
  PAGES: '/pages/',
  BLOGS: '/blogs/',
  CATEGORIES: '/categories/',
  TAGS: '/tags/',
} as const

export type TPageType = (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE]
