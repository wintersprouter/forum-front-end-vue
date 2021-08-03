<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >
          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id }
            }"
            class="btn btn-link"
            >Edit</router-link
          >
          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deletehRestaurants(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await adminAPI.restaurants.get()
        this.restaurants = data.restaurants
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法取得所有餐廳，請稍後再試' })
        console.log('error', error)
      }
    },
    async deletehRestaurants(restaurantId) {
      try {
        const result = await Swal.fire({
          title: '確定要刪除此餐廳?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
        if (result.isConfirmed) {
          const { data } = await adminAPI.restaurants.delete({ restaurantId })
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          Swal.fire('Deleted!', '成功刪除此餐廳', 'success')
          this.restaurants = this.restaurants.filter(
            restaurant => restaurant.id !== restaurantId
          )
        }
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法刪除餐廳，請稍後再試' })
        console.log('error', error)
      }
    }
  }
}
</script>
