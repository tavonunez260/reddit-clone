import { AuthResponse } from 'interfaces'
import { redditAuth } from 'services'
import { authSlice, uiSlice } from 'store'
import { useDispatch } from 'react-redux'
import { AxiosResponse } from 'axios'

export const useAuth = () => {
  const dispatch = useDispatch()

  const signIn = async () => {
    dispatch(uiSlice.actions.setLoading(true))
    try {
      const response: AxiosResponse<AuthResponse> = await redditAuth.post(
        '',
        new URLSearchParams({
          grant_type: 'password',
          username: 'Bitter_Arugula7118',
          password: 'INA128tl074/'
        }),
        {
          auth: {
            username: 'b3FPJ8WzKgkCPFP3tS4eEQ',
            password: 'vs4spBvUmEs6vfC2aG7yig-xKRfQXQ'
          }
        }
      )
      console.log(response)
      dispatch(uiSlice.actions.setLoading(false))
      dispatch(
        authSlice.actions.setAuthInfo({
          token: response.data.access_token,
          type: response.data.token_type
        })
      )
    } catch (e) {
      dispatch(uiSlice.actions.setLoading(false))
      console.log(e)
    }
  }
  return {
    signIn
  }
}
