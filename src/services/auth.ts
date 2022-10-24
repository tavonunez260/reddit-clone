import axios from 'axios'

export const redditAuth = axios.create({
  baseURL: 'https://www.reddit.com/api/v1/access_token'
})
