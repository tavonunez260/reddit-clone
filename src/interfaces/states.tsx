import { SearchQueryResultProps } from 'interfaces'

export interface AppState {
  hotResults: SearchQueryResultProps[] | undefined
  newResults: SearchQueryResultProps[] | undefined
  risingResults: SearchQueryResultProps[] | undefined
}

export interface AuthState {
  token: string | null
  type: string | null
}

export interface UIState {
  loading: boolean
  darkMode: boolean
}
