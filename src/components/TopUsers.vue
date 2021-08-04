<template>
  <div class="col-3">
    <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img
        :src="user.image | emptyImage"
        :alt="user.name"
        width="140px"
        height="140px"
        class="avatar my-2"
      />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge rounded-pill bg-secondary"
      >追蹤人數：{{ user.followerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        type="button"
        class="btn btn-danger"
        @click.stop.prevent="unFollow(user.id)"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click.stop.prevent="follow(user.id)"
      >
        追蹤
      </button>
    </p>
  </div>
</template>
<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],

  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser
    }
  },
  methods: {
    async follow(userId) {
      try {
        const { data } = await usersAPI.follow({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user = {
          ...this.user,
          followerCount: this.user.followerCount + 1,
          isFollowed: true
        }
        Toast.fire({ icon: 'success', title: `成功追蹤 ${this.user.name}` })
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法加入追蹤，請稍後再試' })
      }
    },
    async unFollow(userId) {
      try {
        const { data } = await usersAPI.unFollow({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user = {
          ...this.user,
          followerCount: this.user.followerCount - 1,
          isFollowed: false
        }
        Toast.fire({ icon: 'success', title: `退追 ${this.user.name} 成功` })
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法移除追蹤，請稍後再試' })
      }
    }
  }
}
</script>
<style scoped>
.avatar {
  object-fit: cover;
}
</style>
