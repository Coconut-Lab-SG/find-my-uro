import FindUrologist from './find-urologist/page'
import PromotionBanner from './find-urologist/promotion-banner'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <FindUrologist />
      <PromotionBanner />
    </div>
  )
}
