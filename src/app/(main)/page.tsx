import { ArticleSection } from './article'
import { FindUrologist } from './find-urologist'
import { MostSearchedCities } from './most-searched-cities'
import { PromotionBanner } from './promotion-banner'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10">
      <FindUrologist />
      <PromotionBanner />
      <ArticleSection />
      <MostSearchedCities />
    </div>
  )
}
