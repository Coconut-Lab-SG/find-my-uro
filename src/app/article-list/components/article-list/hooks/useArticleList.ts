import { ArticleListResponse } from '@/app/_lib/definitions/articles'
import { getAllArticles } from '@/app/_lib/services/article/get-all-articles'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useArticleList() {
  const searchParams = useSearchParams()
  const pageQuery = searchParams.get('page') ?? '1'

  const [articles, setArticles] = useState<ArticleListResponse | null>(null)
  const [loading, setLoading] = useState(true)

  async function fetchArticles() {
    setLoading(true)
    try {
      await getAllArticles({ query: pageQuery }).then((resp) => {
        setArticles(resp)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [pageQuery])

  return {
    articles,
    loading,
  }
}
