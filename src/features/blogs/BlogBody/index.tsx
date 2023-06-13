import 'highlight.js/styles/base16/onedark.css'

interface IBlogBody {
  blogBody: string
}

export default function BlogBody({ blogBody }: IBlogBody) {
  if (!blogBody) return null

  return (
    <div className="blogBody" dangerouslySetInnerHTML={{ __html: blogBody }} />
  )
}
