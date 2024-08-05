import { StarIcon } from './icons'

type Props = {
  rating: number
}

export function StarGenerator({ rating }: Props) {
  const totalStars = 5
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => {
          let fillColor = '#dadada' // Default grey-colored star

          if (index < Math.floor(rating)) {
            // Full star
            fillColor = '#ffbc0b'
            return <StarIcon key={index} size={17} fill={fillColor} shape="full" />
          } else if (index < Math.ceil(rating)) {
            // Check for half-filled star
            const decimalPart = rating % 1

            if (decimalPart >= 0.5) {
              // Half star
              fillColor = '#ffbc0b'
              return <StarIcon key={index} size={17} fill={fillColor} shape="half" />
            }
          }

          // No color star
          return <StarIcon key={index} size={17} fill={fillColor} shape="full" />
        })}
      </div>
      <span className="text-sm">{rating} out of 5</span>
    </div>
  )
}
