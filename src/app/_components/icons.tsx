import { Star, StarHalf } from 'lucide-react'

type StarIconProps = {
  size: number
  fill: string
  shape: 'full' | 'half'
}

export function StarIcon({ size, fill, shape }: StarIconProps) {
  if (shape === 'full') {
    return <Star size={size} fill={fill} strokeWidth={0} />
  }

  return <StarHalf size={size} fill={fill} strokeWidth={0} />
}
