import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getFeeds () {
    // 透過 URLSearchParams.toString() 來產生 queryString
    return apiHelper.get('/restaurants/feeds', {
      // http header 攜帶 token
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
