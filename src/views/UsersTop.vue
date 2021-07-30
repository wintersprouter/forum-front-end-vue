<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <TopUsers
      v-for ="user in users"
      :key ="user.id"
      :initial-user = "user"/>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import TopUsers from './../components/TopUsers'
const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root123",
            "email": "root@example.com",
            "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
            "isAdmin": true,
            "image": "https://i.pravatar.cc/150?img=68",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-15T09:17:49.000Z",
            "Followers": [
                {
                    "id": 1,
                    "name": "root123",
                    "email": "root@example.com",
                    "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/pU2mGov.png",
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-15T09:17:49.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 1,
                        "createdAt": "2021-07-08T08:04:09.000Z",
                        "updatedAt": "2021-07-08T08:04:09.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
            "isAdmin": false,
            "image": "https://i.pravatar.cc/150?img=6",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "Followers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-05T09:58:39.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 2,
                        "createdAt": "2021-07-29T13:12:36.000Z",
                        "updatedAt": "2021-07-29T13:12:36.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": true
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$1UaQ5KZLbMCJztUGRWP/uOtIaKel7TQFHIbozRf4LPysvFLu3UOO6",
            "isAdmin": false,
            "image": "https://i.pravatar.cc/150?img=8",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "Followers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-05T09:58:39.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 3,
                        "createdAt": "2021-07-29T13:12:38.000Z",
                        "updatedAt": "2021-07-29T13:12:38.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": true
        },
        {
            "id": 11,
            "name": "root3",
            "email": "ryan@gmail.com",
            "password": "$2a$10$RlVjZ25mKa8aULENpsmZK.OBFxGUjicjsv2FVnmOXkdtn.yW14oRu",
            "isAdmin": false,
            "image": "https://i.pravatar.cc/150?img=22",
            "createdAt": "2021-07-05T10:20:05.000Z",
            "updatedAt": "2021-07-05T10:32:11.000Z",
            "Followers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-05T09:58:39.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 11,
                        "createdAt": "2021-07-29T13:12:39.000Z",
                        "updatedAt": "2021-07-29T13:12:39.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": true
        },
        {
            "id": 21,
            "name": "hans",
            "email": "hans@yahoo.com",
            "password": "$2a$10$x1t6Xd/2gpTd2VjJHGoBd.NsmIZhv57MvwjMBVsB67qFh0ueCa2ja",
            "isAdmin": false,
            "image": "https://i.pravatar.cc/150?img=26",
            "createdAt": "2021-07-16T03:24:28.000Z",
            "updatedAt": "2021-07-16T03:24:28.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}
export default {
  components: {
    NavTabs,
    TopUsers
  },
  data(){
    return {
      users:[]
    }
  },
  created(){
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      const {users} = dummyData
      this.users = users
    }
  }  
}
</script>