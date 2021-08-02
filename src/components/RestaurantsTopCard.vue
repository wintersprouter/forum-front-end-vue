<template>
  <div class="card mb-3" style="max-width: 540px;margin: auto;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <router-link :to="{ name: 'restaurant', params: { id: restaurant.id }}">
          <img class="card-img" :src="restaurant.image" />
        </router-link>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ restaurant.name }}
          </h5>
          <span class="badge rounded-pill bg-secondary"
            >收藏數：{{ restaurant.FavoriteCount }}</span
          >
          <p class="card-text">
            {{ restaurant.description }}
          </p>
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id }}"
            class="btn btn-primary mr-2"
          >
            Show</router-link
          >

          <button
            v-if="restaurant.isFavorited"
            @click.stop.prevent="deleteFavorite(restaurant.id)"
            type="button"
            class="btn btn-danger mr-2"
          >
            移除最愛
          </button>
          <button
            v-else
            @click.stop.prevent="addFavorite(restaurant.id)"
            type="button"
            class="btn btn-primary"
          >
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from'./../utils/helpers'
import usersAPI from './../apis/users'


export default {
  name:"RestaurantsTopCard.vue",
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({restaurantId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true ,
          FavoriteCount: this.restaurant.FavoriteCount + 1
        }
        Toast.fire({ icon: 'success', title:`成功將${this.restaurant.name} 加入最愛` })
      } catch (error) {
        Toast.fire({ icon: 'error', title:`無法將  ${this.restaurant.name} 加入最愛，請稍後再試` })
        console.log('error', error)
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
          FavoriteCount: this.restaurant.FavoriteCount - 1
        }
        Toast.fire({ icon: 'success', title:`成功將 ${this.restaurant.name} 移除最愛`})
      } catch (error) {
        Toast.fire({ icon: 'error', title:`無法將 ${this.restaurant.name} 移除最愛，請稍後再試` })

        console.log('error', error)
      }
    },
  }
}
</script>
