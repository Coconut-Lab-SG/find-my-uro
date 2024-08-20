import { envVars } from '@/app/_lib/constants/env-vars'
import { ArticleListSchema } from '@/app/_lib/definitions/articles'
import fetcher, { FetchConfigType } from '../../fetcher'

export async function getAllArticles() {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: `${envVars.APP_BASE_URL}/api/article/list-articles`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<unknown>(fetchConfig)
  const data = ArticleListSchema.parse(response)
  return data
}
