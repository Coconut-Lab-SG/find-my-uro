import { ArticleListSchema } from '@/app/_lib/definitions/articles'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  query?: string
}

export async function getAllArticles({ query }: Props) {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: query ? `/api/article/list-articles?page=${query}&limit=6` : `/api/article/list-articles?limit=6`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<unknown>(fetchConfig)
  const data = ArticleListSchema.parse(response)
  return data
}
