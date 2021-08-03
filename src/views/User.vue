<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <UserProfileCard
          :initial-is-followed="isFollowed"
          :user="user"
          :is-current="isCurrentUser"
        />
        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard :followings="followings" />
            <br />
            <UserFollowersCard :followers="followers" />
          </div>
          <div class="col-md-8">
            <UserCommentsCard :comments="comments" />
            <br />
            <UserFavoritedRestaurantsCard
              :favoritedRestaurants="favoritedRestaurants"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserCommentsCard from './../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard.vue'
import UserFollowersCard from './../components/UserFollowersCard.vue'
import UserFollowingsCard from './../components/UserFollowingsCard.vue'
import UserProfileCard from './../components/UserProfileCard.vue'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'User',
  components: {
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    UserFollowersCard,
    UserFollowingsCard,
    UserProfileCard
  },
  data() {
    return {
      user: {
        id: -1,
        name: '',
        email: '',
        image: '',
        commentsCount: 0,
        favoritedRestaurantsCount: 0,
        followersCount: 0,
        followingsCount: 0
      },
      isFollowed: false,
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isCurrentUser: false
    }
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId })
        console.log(data)
        const { profile, isFollowed } = data
        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings
        } = profile
        this.user = {
          id,
          name,
          email,
          image,
          commentsCount: Comments.length,
          favoritedRestaurantsCount: FavoritedRestaurants.length,
          followersCount: Followers.length,
          followingsCount: Followings.length
        }
        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.comments = Comments
        this.favoritedRestaurants = FavoritedRestaurants
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法取得使用者資料，請稍後再試' })
      }
    }
  }
}
</script>
