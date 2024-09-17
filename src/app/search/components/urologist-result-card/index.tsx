'use client'

import { FeaturedUrologistLabel } from '@/app/_components/featured-urologist-label'
import { StarGenerator } from '@/app/_components/star-generator'
import { Button } from '@/app/_components/ui/button'
import { DEFAULT_AVATAR_PATH } from '@/app/_lib/constants/string-vars'
import { UrologistSearchResult } from '@/app/_lib/definitions/search-urologist'
import { Map } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
  data: UrologistSearchResult
  idx: number
  setUrologistCoordinate: (latitude: number, longitude: number) => void
}

export function UrologistResultCard({ data, idx, setUrologistCoordinate }: Props) {
  const router = useRouter()

  function redirectUrologist() {
    router.push(`/urologist/${data.slug}`)
  }

  function changeCoordinate(e: React.MouseEvent<HTMLButtonElement>) {
    // Prevent clicking parent button
    e.stopPropagation()

    const urologistLatitude = data.latitude
    const urologistLongitude = data.longitude
    setUrologistCoordinate(urologistLatitude, urologistLongitude)
  }

  return (
    <div className="flex items-center gap-7 laptopM:gap-10 px-3 cursor-pointer" onClick={redirectUrologist}>
      {/* Urologist profile image */}
      <div className="relative">
        <Image
          alt="urologist-pict"
          src={data.avatar ?? DEFAULT_AVATAR_PATH}
          width={80}
          height={80}
          className="rounded-full w-[80px] h-[80px] object-cover"
          priority
        />
        <div className="flex items-center justify-center absolute top-0 -left-2.5 bg-[#432f91] text-white w-[30px] h-[30px] rounded-full text-center font-bold">
          {idx}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="italic font-medium">{data.name}</span>
        <StarGenerator rating={data.rate} />
        {data.is_featured && <FeaturedUrologistLabel />}
        <Button variant="ghost" className="flex items-center justify-start gap-1 text-[#432f91] p-0 hover:bg-transparent" onClick={changeCoordinate}>
          <Map size={18} />
          <span>See on map</span>
        </Button>
      </div>
    </div>
  )
}
