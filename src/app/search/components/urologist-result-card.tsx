import { StarGenerator } from '@/components/star-generator'
import { Button } from '@/components/ui/button'
import { Map, Star } from 'lucide-react'
import Image from 'next/image'

export function UrologistResultCard() {
  return (
    <div className="flex items-center gap-7 laptopM:gap-10 px-3">
      {/* Urologist profile image */}
      <div className="relative">
        <Image alt="urologist-pict" src="/assets/images/urologist/dummy-urologist-img.png" width={80} height={80} className="rounded-full" />
        <div className="flex items-center justify-center absolute top-0 -left-2.5 bg-[#432f91] text-white w-[30px] h-[30px] rounded-full text-center font-bold">
          1
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="italic font-medium">Yaniv Larish, M.D</span>
        <StarGenerator count={5} />
        <UrologistLabel />
        <Button variant="ghost" className="flex items-center justify-start gap-1 text-[#432f91] p-0">
          <Map size={18} />
          <span>See on map</span>
        </Button>
      </div>
    </div>
  )
}

// Composing component
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
