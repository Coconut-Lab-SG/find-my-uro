export type FetchConfigType = {
  url: string
  bodyData: unknown
  method: 'POST' | 'GET'
  token?: string
}

function fetcher<T>({ url, bodyData, method, token }: FetchConfigType): Promise<T> {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: bodyData ? JSON.stringify(bodyData) : undefined,
    method,
  }

  return fetch(url, params)
    .then((resp) => {
      if (!resp.ok) {
        // throw error to catch block
        return Promise.reject(resp)
      }
      return resp.json()
    })
    .then((data) => {
      return data
    })
    .catch((e) => {
      // return error response
      return e?.json().then((resp: any) => {
        const errObj = {
          ...resp,
          code: e.status,
        }
        return Promise.reject(errObj)
      })
    })
}

export default fetcher
