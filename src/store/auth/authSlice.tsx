import { AuthState } from 'interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthState = {
  token: null,
  type: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (state, { payload }: PayloadAction<AuthState>): void => {
      const estado = state
      estado.token = payload.token
      estado.type = payload.type
    }
  }
})
