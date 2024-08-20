// Prevent server cache on this page
export const revalidate = 0

import { BackButton } from '@/app/_components/back-button'
import { getAllArticles } from '@/app/_lib/services/article/get-all-articles'
import Link from 'next/link'
import { ArticleThumbnail } from './components/article-thumbnail'

export default async function ArticleList() {
  const articles = await getAllArticles()

  return (
    <div className="flex flex-col gap-y-5 px-5 max-w-[1140px] mx-auto pb-10">
      <div className="flex items-center gap-2">
        <BackButton />
        <span>Back To Home</span>
      </div>

      <div className="flex">
        <Link prefetch={false} href="https://www.worstpainever.com/articles" target="_blank" className="text-lg">
          Originally posted on WorstPainEver.com
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 tablet:grid-cols-3">
        {articles.data.map((article) => (
          <ArticleThumbnail key={article.link} data={article} />
        ))}
      </div>
    </div>
  )
}
