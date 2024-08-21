'use client'
import { CustomPagination } from '@/app/_components/custom-pagination'
import { useSearchParams } from 'next/navigation'
import { ArticleThumbnail } from '../article-thumbnail'
import { ArticlesSkeleton } from '../articles-skeleton'
import { useArticleList } from './hooks/useArticleList'

export function ArticleList() {
  const queryParams = useSearchParams()
  const currentPage = queryParams.get('page') ?? '1'
  const { articles, loading } = useArticleList()

  if (loading) {
    return <ArticlesSkeleton />
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 tablet:grid-cols-3">
        {articles?.data.map((article) => <ArticleThumbnail key={article.link} data={article} />)}
      </div>

      <CustomPagination meta={articles?.meta ?? null} currentPage={currentPage} />
    </div>
  )
}
