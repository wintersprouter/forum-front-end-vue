<template>
  <div class="col-3">
    <a href="#">
        <img
        :src="user.image"
        :alt="user.name"
        width="140px"
        height="140px"
        >
    </a>
    <h2>{{user.name}}</h2>
      <span class="badge badge-secondary">追蹤人數：{{user.Followers.length}}</span>
    <p class="mt-3">
      <button
      v-if = "user.isFollowed"
      type="button"
      class="btn btn-danger"
      @click.stop.prevent="unfollow"
      >
        取消追蹤
      </button>
      <button
      v-else
      type="button"
      class="btn btn-primary"
      @click.stop.prevent="follow"
      >
      追蹤
      </button>
    </p>
  </div>
</template>   
<script>

export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      user: this.initialUser
    }
  },
  methods:{
    follow () {
      this.user = {
        ...this.user,
        isFollowed:true
      }
    },
    unfollow () {
      this.user = {
        ...this.user,
        isFollowed:false
      }
    },
  }
}
</script>