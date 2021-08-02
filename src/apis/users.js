import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  addFavorite ({ restaurantId }) {
    // axios.post(url[, data[, config]])
    // url - 網址
    // data - 要發送的資料，如果沒有則寫 null
    // config - 這裡可以把 token 帶到 headers 中
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFavorite ({ restaurantId }) {
    // axios.delete(url[, config])
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike ({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike ({ restaurantId }) {
    // axios.delete(url[, config])
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
