<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
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
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="deleteLike"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike"
      >
        Like
      </button>
    </div>
  </div>
</template>
<script>
import { Toast } from'./../utils/helpers'
import usersAPI from './../apis/users'

export default {
  name:"RestaurantDetail",
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
        this.restaurant = { ...this.restaurant, isFavorited: true }
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
        this.restaurant = { ...this.restaurant, isFavorited: false }
        Toast.fire({ icon: 'success', title:`成功將 ${this.restaurant.name} 移除最愛`})
      } catch (error) {
        Toast.fire({ icon: 'error', title:`無法將 ${this.restaurant.name} 移除最愛，請稍後再試` })

        console.log('error', error)
      }
    },
  }
}
</script>
