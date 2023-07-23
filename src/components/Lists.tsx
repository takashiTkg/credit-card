type Props = {
  items: string[]
}

export const Lists: React.FC<Props> = (props) => {
  return (
    <div className="mt-4 flex flex-wrap">
      {
        props.items.map((item, i) => {
          return (
            <div key={i} className="py-2 px-4 font-bold">
              {item}…
            </div>
          )
        })
      }
    </div>
  )
}