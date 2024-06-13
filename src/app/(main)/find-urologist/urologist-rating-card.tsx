import { Star } from "lucide-react";
import Image from "next/image";

export function UrologistRatingCard() {
  // TODO: change into dynamic data from API later
  const dummyData = {
    name: 'Yaniv Larish, M.D',
    rating: {
      number: '5.0',
      count: 71,
      stars: 5
    },
    imgSrc: '/assets/images/home/urologist-img-placeholder.webp',
  }

  return (
    <div className="flex italic items-center px-5 py-[30px] gap-x-[30px] rounded-[20px] h-[150px]" style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important" }}>
      <Image className="rounded-full" alt="urologist-img" src={dummyData.imgSrc} width={80} height={80} />
      <div className="flex flex-col gap-y-2.5">
        <span className="text-lg font-medium">{dummyData.name}</span>
        <div className="flex items-center">
          <span className="text-sm">{dummyData.rating.number} ({dummyData.rating.count})</span>
          {
            Array.from({ length: dummyData.rating.stars }, (_, idx) => (
              <Star key={idx} size='17' fill="#ffbc0b" strokeWidth={0} />
            ))
          }
        </div>
      </div>
    </div>
  )
}