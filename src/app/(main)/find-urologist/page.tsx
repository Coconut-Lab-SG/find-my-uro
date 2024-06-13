import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UrologistRatingCard } from "./urologist-rating-card";

export default function FindUrologist() {
  return (
    <div className="flex flex-col gap-y-16 max-w-[1140px]">
      <div className="flex flex-col gap-y-5">
        <p className="text-[40px] italic font-bold">Find <span className="text-[#42328d]">Urologist</span></p>
        <p className="text-2xl italic font-medium">Vouched for by <span className="text-[#42328d]">Real Patients</span> like You</p>
      </div>

      <div className="flex flex-col gap-y-4">
        <span className="text-2xl italic font-medium">Find Your <span className="text-[#42328d]">Best</span> Provider</span>
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
          <Input className="h-11" placeholder="Your City, State, or ZIP Code" />
          <Input className="h-11" placeholder="Name of Urologist" />
          <Button className="bg-[#f6a404] text-white hover:bg-orange-300 h-full">Search</Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="text-2xl italic font-medium">Featured <span className="text-[#42328d]">Urologists</span> Of The Month</p>
        <div className="grid grid-rows-1 tablet:grid-cols-3 gap-8">
          <UrologistRatingCard />
          <UrologistRatingCard />
          <UrologistRatingCard />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <p className="text-2xl italic font-medium">Highest Rated Urologists Near <span className="text-[#42328d]">(Area)</span></p>
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