import { SearchResponse } from 'interfaces'
import { RootState, appSlice, uiSlice } from 'store'
import axios, { AxiosResponse } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export const useSearch = () => {
  const dispatch = useDispatch()
  const { token, type } = useSelector((state: RootState) => state.auth)
  const { pathname } = useLocation()
  const performSearch = async (query: string) => {
    dispatch(uiSlice.actions.setLoading(true))
    try {
      const response: AxiosResponse<SearchResponse> = await axios.get(
        `https://oauth.reddit.com/r/${query}${pathname}`,
        {
          data: {
            limit: 10
          },
          headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            Authorization: `${type as string} ${token as string}`
          }
        }
      )
      console.log(response)
      switch (pathname) {
        case '/hot':
          dispatch(
            appSlice.actions.setHotResults(
              response.data.data.children.map((child) => {
                return {
                  title: child.data.title as string,
                  tag: child.data.link_flair_text as string,
                  description: child.data.selftext as string,
                  url: child.data.url as string,
                  author: child.data.author as string
                }
              })
            )
          )
          break
        case '/new':
          dispatch(
            appSlice.actions.setNewResults(
              response.data.data.children.map((child) => {
                return {
                  title: child.data.title as string,
                  tag: child.data.link_flair_text as string,
                  description: child.data.selftext as string,
                  url: child.data.url as string,
                  author: child.data.author as string
                }
              })
            )
          )
          break
        case '/rising':
          dispatch(
            appSlice.actions.setRisingResults(
              response.data.data.children.map((child) => {
                return {
                  title: child.data.title as string,
                  tag: child.data.link_flair_text as string,
                  description: child.data.selftext as string,
                  url: child.data.url as string,
                  author: child.data.author as string
                }
              })
            )
          )
          break
        default:
          break
      }
      dispatch(uiSlice.actions.setLoading(false))
    } catch (e) {
      dispatch(uiSlice.actions.setLoading(false))
      console.log(e)
    }
  }
  return {
    performSearch
  }
}
