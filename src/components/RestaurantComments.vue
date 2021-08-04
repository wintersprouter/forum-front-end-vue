<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          :disabled="isProcessing"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>
<script>
import { fromNowFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'RestaurantComments',
  mixins: [fromNowFilter],
  data() {
    return {
      isProcessing: false
    }
  },
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed: { ...mapState(['currentUser']) },

  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.deleteComment({ commentId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        // 觸發父層事件 - $emit('事件名稱' , 傳遞的資料 )
        this.$emit('after-delete-comment', commentId)
        this.isProcessing = false
        Toast.fire({ icon: 'success', title: '移除評論成功' })
      } catch (error) {
        this.isProcessing = false

        Toast.fire({ icon: 'error', title: '無法刪除留言，請稍後再試' })
      }
    }
  }
}
</script>
<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>
