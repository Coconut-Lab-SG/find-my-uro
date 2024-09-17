import { FeaturedUrologistLabel } from '@/app/_components/featured-urologist-label'
import { StarIcon } from '@/app/_components/icons'
import { FeaturedUrologistType } from '@/app/_lib/definitions/landing-page'
import Image from 'next/image'
import Link from 'next/link'

type UrologistRatingCardProps = {
  data: FeaturedUrologistType
}

export function UrologistRatingCard({ data }: UrologistRatingCardProps) {
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
    <Link
      prefetch={false}
      href={`/urologist/${data.slug}`}
      className="flex italic px-5 py-[30px] gap-x-[30px] rounded-[20px] h-[182px] shadow-lg transition-all hover:scale-105"
    >
      <Image
        alt="urologist-img"
        src={data.avatar ?? '/assets/icons/user-avatar.webp'}
        width={80}
        height={80}
        className="rounded-full w-[80px] h-[80px] object-cover"
        priority
      />
      <div className="flex flex-col gap-y-2.5 text-black">
        <span className="text-lg font-medium">{data.name}</span>
        {data.is_featured && <FeaturedUrologistLabel />}
        <div className="flex items-center gap-2">
          <span className="text-sm">
            {data.rate} ({data.total_review})
          </span>
          <div className="flex items-center">
            {Array.from({ length: data.rate }, (_, idx) => (
              <StarIcon key={idx} size={17} fill="#ffbc0b" shape="full" />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
