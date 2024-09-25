// Prevent server cache on this page
export const revalidate = 0

import { BackButton } from '@/app/_components/back-button'
import Link from 'next/link'
import { ArticleList } from './components/article-list'

export default function Articles() {
  return (
    <div className="flex flex-col gap-y-5 px-5 max-w-[1140px] mx-auto pb-10">
      <Link prefetch={false} href="/">
        <div className="flex items-center gap-2">
          <BackButton />
          Back to Home
        </div>
      </Link>

      <div className="flex">
        <Link prefetch={false} href="https://www.worstpainever.com/articles" target="_blank" className="text-lg">
          Originally posted on WorstPainEver.com
        </Link>
      </div>

      <ArticleList />
    </div>
  )
}
