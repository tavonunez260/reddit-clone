export interface AuthState {
  token: string | null
  type: string | null
}

export interface UIState {
  loading: boolean
  darkMode: boolean
}
