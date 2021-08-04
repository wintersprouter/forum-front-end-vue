<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body my-auto">
      <router-link
        v-for="comment in comments"
        :key="comment.id"
        :to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }"
      >
        <img
          :src="comment.Restaurant.image"
          @load="changeLoading"
          width="60"
          height="60"
          class="avatar mt-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCommentsCard',
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isLoading: true
    }
  },
  changeLoading() {
    this.isLoading = false
  }
}
</script>
<style scoped>
.avatar {
  object-fit: cover;
}
</style>
