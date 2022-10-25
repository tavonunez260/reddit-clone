import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { uiSlice } from './ui'
import { appSlice } from './app'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    app: appSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
