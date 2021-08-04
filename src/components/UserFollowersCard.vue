<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: follower.id } }"
      >
        <img
          @load="changeLoading"
          :src="follower.image | emptyImage"
          width="60"
          height="60"
          class="avatar mt-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  name: 'UserFollowersCard',
  mixins: [emptyImageFilter],
  data() {
    return {
      isLoading: true
    }
  },
  changeLoading() {
    this.isLoading = false
  },
  props: {
    followers: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.avatar {
  object-fit: cover;
}
</style>
