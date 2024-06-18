import { ArticleSection } from './article'
import { FindUrologist } from './find-urologist'
import { PromotionBanner } from './promotion-banner'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <FindUrologist />
      <PromotionBanner />
      <ArticleSection />
    </div>
  )
}
