import { MoveLeft } from "lucide-react"
import { UrologistResultCard } from "./components/urologist-result-card"

export default function SearchUrologists() {
  return (
    <div className="flex flex-col gap-y-4 px-5 max-w-[1140px] mx-auto">
      <div className="flex flex-col gap-y-2.5">
        <div className="flex items-center gap-3">
          <MoveLeft size={20} />
          <span className="text-lg">New York, NY</span>
        </div>

        <div className="flex flex-col gap-4 laptop:flex-row-reverse">
          {/* Map section */}
          <div className="relative -mx-5 laptopM:mx-0">
            <div className="h-[230px] w-screen bg-gray-400 mx-auto laptopM:h-[824px] laptopM:w-[360px]">
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-3 text-center border-b border-gray-300 pb-3">
              <span className="text-lg font-medium">Top Urologist</span>
              <p className="text-sm italic">Looking for <strong>top urologist in (city)</strong>? <br /> Search from our wide range of well-equipped and highly-skilled doctors, to find the best fit for YOUR urology condition.
                Discover <strong>local urologist near you now!</strong></p>
            </div>

            {/* Urologist result list */}
            <div className="flex flex-col gap-3 h-[444px] overflow-y-auto">
              <UrologistResultCard />
              <UrologistResultCard />
              <UrologistResultCard />
              <UrologistResultCard />
              <UrologistResultCard />
              <UrologistResultCard />
              <UrologistResultCard />
              <UrologistResultCard />
              <UrologistResultCard />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}