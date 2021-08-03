<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="user.image | emptyImage"
          alt="Card image cap"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsCount }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsCount }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followersCount }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followingsCount }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <router-link
              v-if="isCurrentUser"
              :to="{ name: 'user-edit', params: { id: user.id } }"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
            <button
              v-if="isFollowed"
              type="button"
              class="btn btn-danger btn-border mr-2"
              @click.stop.prevent="unFollow(user.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary btn-border mr-2"
              @click.stop.prevent="follow(user.id)"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserProfileCard',
  mixins: [emptyImageFilter],
  props: {
    user: {
      style: Object,
      require: true
    },
    initialIsFollowed: {
      style: Boolean,
      require: true
    },
    isCurrentUser: {
      style: Boolean,
      require: true
    }
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed
    }
  },
  watch: {
    initialIsFollowed(newValue) {
      this.isFollowed = {
        ...this.isFollowed,
        ...newValue
      }
    }
  },
  methods: {
    async follow(userId) {
      try {
        const { data } = await usersAPI.follow({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowed = true
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
        this.isFollowed = false
        Toast.fire({ icon: 'success', title: `退追 ${this.user.name} 成功` })
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法移除追蹤，請稍後再試' })
      }
    }
  }
}
</script>
