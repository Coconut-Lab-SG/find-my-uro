import { getHomepageDataset } from '@/app/_lib/services/landing-page/homepage-dataset'
import { UrologistRatingCard } from './components/urologist-rating-card'

export async function FeaturedUrologists() {
  const data = await getHomepageDataset()

  return (
    <div className="flex flex-col gap-16 max-w-[1140px] w-full mx-auto px-5">
      <div className="flex flex-col gap-y-4">
        <p className="text-2xl italic font-medium">
          Featured <span className="text-[#42328d]">Urologists</span> Of The Month
        </p>
        <div className="grid grid-rows-1 tablet:grid-cols-3 gap-8">
          {data.featured.map((urologist) => (
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
          {data.highest_rated.map((urologist) => (
            <UrologistRatingCard key={urologist.id} data={urologist} />
          ))}
        </div>
      </div>
    </div>
  )
}
