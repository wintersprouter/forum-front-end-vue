import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser () {
    return apiHelper.get('/get_current_user')
  },
  get ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  update ({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  getTopUsers () {
    return apiHelper.get('/users/top')
  },
  addFavorite ({ restaurantId }) {
    // axios.post(url[, data[, config]])
    // url - 網址
    // data - 要發送的資料，如果沒有則寫 null
    // config - 這裡可以把 token 帶到 headers 中
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite ({ restaurantId }) {
    // axios.delete(url[, config])
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike ({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike ({ restaurantId }) {
    // axios.delete(url[, config])
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  follow ({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  unFollow ({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  },
  deleteComment ({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  },
  createComment ({ restaurantId, text }) {
    return apiHelper.post('/comments/', { restaurantId, text })
  }
}
