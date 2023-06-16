export interface IList {
  list: string[]
}

export default function List({ list }: IList) {
  return (
    <ul className="p-4 text-black-text bg-yellow-list">
      {list.map((v) => (
        <li
          key={v}
          className="relative mt-1 mb-3 pl-6 pb-3 border-b-[1px] border-[dashed hsla(0, 0%, 78%, 0.5)]"
        >
          <span className="absolute bottom-[14px] left-[4px] text-[14px] text-green-list">
            ○
          </span>
          {v}
        </li>
      ))}
    </ul>
  )
}
