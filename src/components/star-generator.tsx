import { StarIcon } from './icons'

type Props = {
  count: number
}

export function StarGenerator({ count }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        {/* TODO: change later */}
        {Array.from({ length: count }, (_, idx) => (
          <StarIcon key={idx} />
        ))}
      </div>
      <span className="text-sm">
        {count} out of {count}
      </span>
    </div>
  )
}
