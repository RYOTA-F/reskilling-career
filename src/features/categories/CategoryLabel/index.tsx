export interface ICategoryLabel {
  name: string
}

export default function CategoryLabel({ name }: ICategoryLabel) {
  return (
    <div className="inline-block py-1 px-2 text-blue-main bg-white border-blue-main rounded-md border-[1px] box-border text-[14px] sp:text-[10px]">
      {name}
    </div>
  )
}
