import { AppState, SearchQueryResultProps } from 'interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: AppState = {
  hotResults: undefined,
  newResults: undefined,
  risingResults: undefined
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHotResults: (state, { payload }: PayloadAction<SearchQueryResultProps[]>): void => {
      const estado = state
      estado.hotResults = payload
    },
    setNewResults: (state, { payload }: PayloadAction<SearchQueryResultProps[]>): void => {
      const estado = state
      estado.newResults = payload
    },
    setRisingResults: (state, { payload }: PayloadAction<SearchQueryResultProps[]>): void => {
      const estado = state
      estado.risingResults = payload
    }
  }
})
