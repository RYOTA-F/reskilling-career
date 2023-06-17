// import PaginationItem from '@/components/Elements/PaginationItem'

export default function Pagination() {
  // TODO: 修正
  const totalPage = 2
  const pages = [...new Array(totalPage)].map((_, i) => i)

  return (
    <section className="flex justify-center mt-10">
      {pages.map((v) => (
        <div key={v} className="m-1">
          <div>{v + 1}</div>
          {/* <PaginationItem
            pageNumber={v + 1}
            isCurrentPage={currentPage === v + 1}
          /> */}
        </div>
      ))}
    </section>
  )
}
