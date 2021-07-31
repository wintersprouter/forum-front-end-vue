<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <UserProfileCard/>
        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard/>
            <br>
            <UserFollowersCard/>
          </div>
          <div class="col-md-8">
            <UserCommentsCard/>
            <br>
            <UserFavoritedRestaurantsCard/>
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
export default {
  name:'User',
  components: {
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    UserFollowersCard,
    UserFollowingsCard,
    UserProfileCard
  }
}
</script>