<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in followings"
        :key="following.id"
        :to="{ name: 'user', params: { id: following.id } }"
      >
        <img
          @load="changeLoading"
          :src="following.image | emptyImage"
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
  name: 'UserFollowingsCard',
  mixins: [emptyImageFilter],
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    changeLoading() {
      this.isLoading = false
    }
  },

  props: {
    followings: {
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
