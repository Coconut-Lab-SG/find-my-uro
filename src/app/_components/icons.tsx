import { Star } from 'lucide-react'

type StarIconProps = {
  size: number
  fill: string
}

export function StarIcon({ size, fill }: StarIconProps) {
  return <Star size={size} fill={fill} strokeWidth={0} />
}
