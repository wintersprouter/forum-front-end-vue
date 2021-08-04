<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge rounded-pill bg-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <hr />
      <ul>
        <li>評論數： {{ restaurant.commentsLength }}</li>
        <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
      </ul>
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
    </template>
  </div>
</template>
<script>
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'RestaurantDashboard',
  components: {
    Spinner
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      },
      isLoading: true
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getDetail({ restaurantId })
        console.log(data)
        const { restaurant } = data
        const { id, name, Category, Comments, viewCounts } = restaurant

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          commentsLength: Comments.length,
          viewCounts
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({ icon: 'error', title: '無法取得餐廳資料，請稍後再試' })
      }
    }
  }
}
</script>
