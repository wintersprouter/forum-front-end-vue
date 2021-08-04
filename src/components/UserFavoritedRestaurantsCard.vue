<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favoritedRestaurant in favoritedRestaurants"
        :key="favoritedRestaurant.id"
        :to="{ name: 'restaurant', params: { id: favoritedRestaurant.id } }"
      >
        <img
          :src="favoritedRestaurant.image"
          width="60"
          height="60"
          class="avatar mt-1"
          @load="changeLoading"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFavoritedRestaurantsCard',
  props: {
    favoritedRestaurants: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return { isLoading: true }
  },
  methods: {
    changeLoading() {
      this.isLoading = false
    }
  }
}
</script>
<style scoped>
.avatar {
  object-fit: cover;
}
</style>
