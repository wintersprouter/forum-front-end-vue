<template>
  <main role="main">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="album py-5 bg-light">
        <div class="container">
          <UserProfileCard
            :initial-is-followed="isFollowed"
            :user="user"
            :is-current-user="currentUser.id === user.id"
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
    </template>
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
import { mapState } from 'vuex'
import Spinner from './../components/Spinner'

export default {
  name: 'User',
  components: {
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    UserFollowersCard,
    UserFollowingsCard,
    UserProfileCard,
    Spinner
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
      isLoading: true
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
  computed: { ...mapState(['currentUser']) },
  methods: {
    async fetchUser(userId) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get({ userId })
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
          ...this.user,
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
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({ icon: 'error', title: '無法取得使用者資料，請稍後再試' })
      }
    }
  }
}
</script>
