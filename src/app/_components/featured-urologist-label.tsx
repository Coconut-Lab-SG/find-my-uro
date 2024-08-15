import { Star } from 'lucide-react'

export function FeaturedUrologistLabel() {
  return (
    <div className="flex gap-1 items-center bg-[#FFB800] text-white text-xs rounded-lg py-1 px-2 w-fit">
      <Star size="12" fill="#fff" strokeWidth={0} />
      <span>Featured</span>
    </div>
  )
}
