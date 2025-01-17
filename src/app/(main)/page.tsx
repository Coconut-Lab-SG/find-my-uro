// Prevent page from cache
export const revalidate = 0

import { getHomepageDataset } from '../_lib/services/landing-page/homepage-dataset'
import { ArticleSection } from './components/article'
import { FeaturedUrologists } from './components/featured-urologists'
import { FindUrologist } from './components/find-urologist'
import { MostSearchedCities } from './components/most-searched-cities'
import { PromotionBanner } from './components/promotion-banner'

export default async function Home() {
  const data = await getHomepageDataset()

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-16">
        <FindUrologist />
        <FeaturedUrologists featured_urologist={data.featured} highest_rated_urologist={data.highest_rated} />
      </div>
      <PromotionBanner />
      <ArticleSection articles={data.articles} />
      <MostSearchedCities />
    </div>
  )
}
