<template>
  <div class="col-md-6 col-lg-4">
    <div v-show="!isLoading" class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
        @load="changeLoading"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge rounded-pill bg-secondary">{{
          restaurant.Category.name
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          :disabled="isProcessing"
        >
          移除最愛
        </button>
        <button
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          :disabled="isProcessing"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLike(restaurant.id)"
          type="button"
          class="btn btn-danger like mr-2"
          :disabled="isProcessing"
        >
          Unlike
        </button>
        <button
          v-else
          @click.stop.prevent="addLike(restaurant.id)"
          type="button"
          class="btn btn-primary like mr-2"
          :disabled="isProcessing"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// STEP 1: 載入 API 方法和 Toast 提示工具 import usersAPI from './../apis/users'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],

  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      isLoading: true,
      isProcessing: false
    }
  },
  methods: {
    changeLoading() {
      this.isLoading = false
    },
    // STEP 2: 將 addFavorite 改成 async/await 語法
    async addFavorite(restaurantId) {
      try {
        this.isProcessing = true
        // STEP 3: 使用撰寫好的 addFavorite 方法去呼叫API，並取得回傳內容
        const { data } = await usersAPI.addFavorite({ restaurantId })
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // STEP 5: 請求成功的話，改變 Vue 內的資料狀態
        this.restaurant = { ...this.restaurant, isFavorited: true }
        this.isProcessing = false

        Toast.fire({
          icon: 'success',
          title: `成功將${this.restaurant.name} 加入最愛`
        })
      } catch (error) {
        this.isProcessing = false

        //STEP 6: 請求失敗的話則跳出錯誤提示
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
        this.isProcessing = false

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
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #efefef;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>
