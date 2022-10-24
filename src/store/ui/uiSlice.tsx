import { UIState } from 'interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UIState = {
  loading: false,
  darkMode: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>): void => {
      const estado = state
      estado.loading = payload
    },
    setDarkMode: (state, { payload }: PayloadAction<boolean>): void => {
      const estado = state
      estado.darkMode = payload
    }
  }
})
