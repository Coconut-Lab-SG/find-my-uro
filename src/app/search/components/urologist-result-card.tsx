'use client'

import { StarGenerator } from '@/app/_components/star-generator'
import { Button } from '@/app/_components/ui/button'
import { UrologistSearchResult } from '@/app/_lib/definitions/search-urologist'
import { Map, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
  data: UrologistSearchResult
  idx: number
}

export function UrologistResultCard({ data, idx }: Props) {
  const router = useRouter()

  function redirectUrologist() {
    router.push(`/urologist/${data.slug}`)
  }

  return (
    <div className="flex items-center gap-7 laptopM:gap-10 px-3 cursor-pointer" onClick={redirectUrologist}>
      {/* Urologist profile image */}
      <div className="relative">
        <Image alt="urologist-pict" src={data.avatar} width={80} height={80} className="rounded-full" />
        <div className="flex items-center justify-center absolute top-0 -left-2.5 bg-[#432f91] text-white w-[30px] h-[30px] rounded-full text-center font-bold">
          {idx}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="italic font-medium">{data.name}</span>
        <StarGenerator rating={data.rate} />
        {data.is_featured && <UrologistLabel />}
        <Button variant="ghost" className="flex items-center justify-start gap-1 text-[#432f91] p-0 hover:bg-transparent">
          <Map size={18} />
          <span>See on map</span>
        </Button>
      </div>
    </div>
  )
}

// Composing component
// TODO: determine later whether we need this or not
type UrologistLabelProps = {
  text: string
  bgColor: string
}

function UrologistLabel() {
  return (
    <div className="flex gap-1 items-center bg-[#FFB800] text-white text-xs rounded-lg p-[5px] w-fit">
      <Star size="12" fill="#fff" strokeWidth={0} />
      <span>Featured</span>
    </div>
  )
}
