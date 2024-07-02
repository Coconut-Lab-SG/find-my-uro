import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { UrologistRatingCard } from './urologist-rating-card'

export function FindUrologist() {
  return (
    <div className="flex flex-col gap-y-16 max-w-[1140px] mx-auto w-full px-5 relative">
      <div className="flex flex-col gap-y-12 relative">
        {/* Kidney background */}
        <div className="hidden mobileL:absolute w-[424px] mobileL:block h-[400px] -z-10 right-[15%] -top-4">
          <Image alt="kidney-top" src="/assets/images/home/kidney-top-homepage.webp" style={{ clipPath: 'inset(0 0 22% 0)' }} fill />
        </div>
        <div className="flex flex-col gap-y-2.5">
          <p className="text-[40px] italic font-bold">
            Find <span className="text-[#42328d]">Urologist</span>
          </p>
          <p className="text-2xl italic font-medium">
            Vouched for by <span className="text-[#42328d]">Real Patients</span> like You
          </p>
        </div>

        <div className="flex flex-col gap-y-4 bg-[#ffffffc6] pb-14">
          <span className="text-2xl italic font-medium">
            Find Your <span className="text-[#42328d]">Best</span> Provider
          </span>
          <div className="grid grid-cols-1 mobileL:grid-cols-3 gap-4">
            <Input className="h-11 text-lg bg-white" placeholder="Your City, State, or ZIP Code" />
            <Input className="h-11 text-lg bg-white" placeholder="Name of Urologist" />
            <Button className="bg-[#f6a404] text-white hover:bg-orange-300 h-full">Search</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="text-2xl italic font-medium">
          Featured <span className="text-[#42328d]">Urologists</span> Of The Month
        </p>
        <div className="grid grid-rows-1 tablet:grid-cols-3 gap-8">
          <UrologistRatingCard />
          <UrologistRatingCard />
          <UrologistRatingCard />
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
          <UrologistRatingCard />
          <UrologistRatingCard />
          <UrologistRatingCard />
        </div>
      </div>
    </div>
  )
}
