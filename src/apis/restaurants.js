import { apiHelper } from './../utils/helpers'
// 取出 LocalStorage 裡的 token，並回傳給 getToken
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants ({ page, categoryId }) {
    // 利用物件建構子，在使用時要用 new 的方式來產生實例
    const searchParams = new URLSearchParams({ page, categoryId })
    // 透過 URLSearchParams.toString() 來產生 queryString
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      // http header 攜帶 token
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants () {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
