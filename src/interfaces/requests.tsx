export interface AuthResponse {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

export interface SearchResponse {
  kind: string
  data: SearchResponseData
}

export interface SearchResponseData {
  after: string | null
  dist: number | null
  modhash: string | null
  geo_filter: string | null
  children: Child[]
  before: string | null
}

export interface Child {
  kind: string
  data: ChildData
}

export interface ChildData {
  selftext: string | null
  title: string | null
  link_flair_text: string | null
  link_flair_background_color: string | null
  author: string | null
  url: string | null
}
