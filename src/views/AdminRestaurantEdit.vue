<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- 餐廳表單 AdminRestaurantForm -->
      <AdminRestaurantForm
        :initial-restaurant="restaurant"
        :is-processing="isProcessing"
        @after-submit="handleAfterSubmit"
      />
    </template>
  </div>
</template>
<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm,
    Spinner
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false,
      isLoading: true
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        // STEP 3: 透過解構賦值將需要的資料取出
        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId
        } = data.restaurant

        // STEP 4: 將資料帶入 Vue 內
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        //  STEP 5: 錯誤處理
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })

        Toast.fire({ icon: 'success', title: '成功更新餐廳資料' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>
