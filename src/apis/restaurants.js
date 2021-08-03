import { apiHelper } from './../utils/helpers'

export default {
  getRestaurants ({ page, categoryId }) {
    // 利用物件建構子，在使用時要用 new 的方式來產生實例
    const searchParams = new URLSearchParams({ page, categoryId })
    // 透過 URLSearchParams.toString() 來產生 queryString
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getTopRestaurants () {
    return apiHelper.get('/restaurants/top')
  },
  getDetail ({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  }
}
