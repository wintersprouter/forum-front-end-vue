<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge rounded-pill bg-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image | emptyImage"
        style="width: 250px; margin-bottom: 25px"
        @load="changeLoading"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
        >Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.stop.prevent="deleteFavorite(restaurant.id)"
        :disabled="isProcessing"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite(restaurant.id)"
        :disabled="isProcessing"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="deleteLike(restaurant.id)"
        :disabled="isProcessing"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike(restaurant.id)"
        :disabled="isProcessing"
      >
        Like
      </button>
    </div>
  </div>
</template>
<script>
import { Toast } from './../utils/helpers'
import usersAPI from './../apis/users'
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],

  name: 'RestaurantDetail',
  props: {
    initialRestaurant: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      isLoading: true,
      isProcessing: false
    }
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
    changeLoading() {
      this.isLoading = false
    },

    async addFavorite(restaurantId) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.addFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = { ...this.restaurant, isFavorited: true }
        this.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: `成功將${this.restaurant.name} 加入最愛`
        })
      } catch (error) {
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: `無法將  ${this.restaurant.name} 加入最愛，請稍後再試`
        })
        console.log('error', error)
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = { ...this.restaurant, isFavorited: false }
        this.isProcessing = false

        Toast.fire({
          icon: 'success',
          title: `成功將 ${this.restaurant.name} 移除最愛`
        })
      } catch (error) {
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: `無法將 ${this.restaurant.name} 移除最愛，請稍後再試`
        })

        console.log('error', error)
      }
    },
    async addLike(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addLike({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = { ...this.restaurant, isLiked: true }
        this.isProcessing = false

        Toast.fire({
          icon: 'success',
          title: `成功對 ${this.restaurant.name} 點讚`
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: `無法對 ${this.restaurant.name} 點讚，請稍後再試`
        })
        console.log('error', error)
      }
    },
    async deleteLike(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteLike({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = { ...this.restaurant, isLiked: false }
        this.isProcessing = false

        Toast.fire({
          icon: 'success',
          title: `成功收回對 ${this.restaurant.name} 的讚`
        })
      } catch (error) {
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: `無法收回對 ${this.restaurant.name} 的讚，請稍後再試`
        })
        console.log('error', error)
      }
    }
  }
}
</script>
<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>
