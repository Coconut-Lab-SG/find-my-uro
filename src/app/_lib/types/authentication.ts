export type LoginResponseType = {
  data: {
    id: string
    first_name: string
    last_name: string
    email: string
    access_token: string
    token_type: string
    expires_in: number
  }
}

export type AccessTokenType = {
  iss: string
  iat: number
  exp: number
  nbf: number
  jti: string
  sub: string
  prv: string
  id: string
  first_name: string
  last_name: string
  email: string
  registered_at: Date
  last_updated_at: Date
}
