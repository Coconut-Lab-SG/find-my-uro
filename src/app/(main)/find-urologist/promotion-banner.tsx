import Image from "next/image";

export default function PromotionBanner() {
  return (
    <div className="bg-[#40318c] py-12 text-white">
      <div className="flex flex-col gap-12 max-w-[1140px] mx-auto w-full">
        <p className="italic text-3xl font-semibold text-center">We Put the <span className="text-[#ea9c16]">You</span> in <span className="text-[#ea9c16]">Urology</span></p>
        <div className="grid grid-cols-1 items-center gap-10 tablet:grid-cols-3 tablet:gap-0">
          <div className="flex flex-col gap-y-6 items-center text-center">
            <Image alt="kidney-icon" src='/assets/images/home/kidney-icon.png' width={110} height={112} />
            <span className="w-1/2">The first Urology focused directory, curated by the community.</span>
          </div>
          <div className="flex flex-col gap-y-6 items-center text-center">
            <Image alt="kidney-icon" src='/assets/images/home/magnifier-icon.png' width={110} height={112} />
            <span className="w-1/2">Search for providers by qualities that matter most to you.</span>
          </div>
          <div className="flex flex-col gap-y-6 items-center text-center">
            <Image alt="kidney-icon" src='/assets/images/home/message-star-icon.png' width={110} height={112} />
            <span className="w-1/2">Real patients vouch for the provider's that they trust- you can too.</span>
          </div>
        </div>
      </div>
    </div>
  )
}