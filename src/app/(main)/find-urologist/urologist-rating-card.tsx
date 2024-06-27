import { StarIcon } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'

export function UrologistRatingCard() {
  // TODO: change into dynamic data from API later
  const dummyData = {
    name: 'Yaniv Larish, M.D',
    rating: {
      number: '5.0',
      count: 71,
      stars: 5,
    },
    imgSrc: '/assets/images/home/urologist-img-placeholder.webp',
  }

  return (
    <Link href="/urologist" className="flex italic px-5 py-[30px] gap-x-[30px] rounded-[20px] h-[150px] shadow-lg">
      <Image className="rounded-full" alt="urologist-img" src={dummyData.imgSrc} width={80} height={80} />
      <div className="flex flex-col gap-y-2.5 text-black">
        <span className="text-lg font-medium">{dummyData.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">
            {dummyData.rating.number} ({dummyData.rating.count})
          </span>
          <div className="flex items-center">
            {Array.from({ length: dummyData.rating.stars }, (_, idx) => (
              <StarIcon key={idx} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
