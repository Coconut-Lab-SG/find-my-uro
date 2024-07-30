import { StarIcon } from './icons'

type Props = {
  rating: number
}

export function StarGenerator({ rating }: Props) {
  const totalStars = 5
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        {/* TODO: change later */}
        {[...Array(totalStars)].map((_, index) => (
          <StarIcon key={index} size={17} fill={index < rating ? '#ffbc0b' : '#dadada'} />
        ))}
      </div>
      <span className="text-sm">{rating} out of 5</span>
    </div>
  )
}
