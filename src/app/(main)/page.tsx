import { ArticleSection } from './components/article'
import { FeaturedUrologists } from './components/featured-urologists'
import { FindUrologist } from './components/find-urologist'
import { MostSearchedCities } from './components/most-searched-cities'
import { PromotionBanner } from './components/promotion-banner'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-16">
        <FindUrologist />
        <FeaturedUrologists />
      </div>
      <PromotionBanner />
      <ArticleSection />
      <MostSearchedCities />
    </div>
  )
}
