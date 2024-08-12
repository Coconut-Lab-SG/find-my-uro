import { FeaturedUrologistType } from '@/app/_lib/definitions/landing-page'
import { UrologistRatingCard } from './components/urologist-rating-card'

type Props = {
  featured_urologist: FeaturedUrologistType[]
  highest_rated_urologist: FeaturedUrologistType[]
}

export function FeaturedUrologists({ featured_urologist, highest_rated_urologist }: Props) {
  return (
    <div className="flex flex-col gap-16 max-w-[1140px] w-full mx-auto px-5">
      <div className="flex flex-col gap-y-4">
        <p className="text-2xl italic font-medium">
          Featured <span className="text-[#42328d]">Urologists</span> Of The Month
        </p>
        <div className="grid grid-rows-1 tablet:grid-cols-3 gap-8">
          {featured_urologist.map((urologist) => (
            <UrologistRatingCard key={urologist.id} data={urologist} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <p className="text-2xl italic font-medium">
            Highest Rated Urologists Near <span className="text-[#42328d]">(Area)</span>
          </p>
          <a href="urologists">see all</a>
        </div>
        <div className="grid grid-rows-1 tablet:grid-cols-3 gap-8">
          {highest_rated_urologist.map((urologist) => (
            <UrologistRatingCard key={urologist.id} data={urologist} />
          ))}
        </div>
      </div>
    </div>
  )
}