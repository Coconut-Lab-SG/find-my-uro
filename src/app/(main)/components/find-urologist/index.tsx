import Image from 'next/image'
import { SearchSection } from './components/search-section'

export function FindUrologist() {
  return (
    <div className="max-w-[1140px] mx-auto w-full px-5 relative">
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
          <SearchSection />
        </div>
      </div>
    </div>
  )
}
