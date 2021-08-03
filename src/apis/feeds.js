import { apiHelper } from './../utils/helpers'

export default {
  getFeeds () {
    // 透過 URLSearchParams.toString() 來產生 queryString
    return apiHelper.get('/restaurants/feeds')
  }
}
