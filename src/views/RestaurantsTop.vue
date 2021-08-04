<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">
        人氣餐廳
      </h1>
      <RestaurantsTopCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
      <hr />
    </template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantsTopCard from './../components/RestaurantsTopCard'
import restaurantsAPI from './../apis/restaurants'
import Spinner from './../components/Spinner'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
    RestaurantsTopCard,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  created() {
    this.fetchTopRestaurants()
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()
        const { restaurants } = data
        this.restaurants = restaurants
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({ icon: 'error', title: '無法取得餐廳資料，請稍後再試' })
        console.log('error', error)
      }
    }
  }
}
</script>
