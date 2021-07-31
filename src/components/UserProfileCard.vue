<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img 
        :src="profile.image"
        alt="Card image cap" 
        width="300px" 
        height="300px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{profile.name}}</h5>
          <p class="card-text">
            {{profile.email}}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{profile.commentsCount}}</strong> 已評論餐廳</li>
            <li><strong>{{profile.favoritedRestaurantsCount}}</strong> 收藏的餐廳</li>
            <li><strong>{{profile.followersCount}}</strong> followings (追蹤者)</li>
            <li><strong>{{profile.followingsCount}}</strong> followers (追隨者)</li>
          </ul>
          <p>  
            <router-link v-if="isCurrentUser"
            :to="{ name: 'user-edit', params: { id: profile.id }}"><button type="submit" class="btn btn-primary"
            >edit</button></router-link>
            <button
              v-if ="isFollowed"
              type="button"
              class="btn btn-danger btn-border mr-2"
              @click.stop.prevent="unfollow"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary btn-border mr-2"
              @click.stop.prevent="follow"
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

export default {
  name:"UserProfileCard",
  props: {
    profile: {
      style: Object,
      require: true
    },
    initialIsFollowed: {
      style:Boolean,
      require: true
    },
    isCurrentUser: {
      style:Boolean,
      require: true
    },
  },
  data () {
    return {
      isFollowed: this.initialIsFollowed
    }
  },
  methods:{
    follow () {
      this.isFollowed = true
    },
    unfollow () {
      this.isFollowed = false
    },
  }
}
</script>