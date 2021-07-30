<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 新增評論 CreateComment -->
  </div>
</template>
<script>

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Jazmyn Quitzon",
        "tel": "(017) 135-4543",
        "address": "5876 Macejkovic Ford",
        "opening_hours": "08:00",
        "description": "Amet earum voluptatem dolorum.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.923349451179542",
        "viewCounts": 17,
        "createdAt": "2021-07-05T09:58:39.000Z",
        "updatedAt": "2021-07-30T11:47:11.668Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        "FavoritedUsers": [
            {
                "id": 21,
                "name": "hans",
                "email": "hans@yahoo.com",
                "password": "$2a$10$x1t6Xd/2gpTd2VjJHGoBd.NsmIZhv57MvwjMBVsB67qFh0ueCa2ja",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-07-16T03:24:28.000Z",
                "updatedAt": "2021-07-16T03:24:28.000Z",
                "Favorite": {
                    "UserId": 21,
                    "RestaurantId": 1,
                    "createdAt": "2021-07-16T03:24:55.000Z",
                    "updatedAt": "2021-07-16T03:24:55.000Z"
                }
            }
        ],
        "LikedUsers": [
            {
                "id": 21,
                "name": "hans",
                "email": "hans@yahoo.com",
                "password": "$2a$10$x1t6Xd/2gpTd2VjJHGoBd.NsmIZhv57MvwjMBVsB67qFh0ueCa2ja",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-07-16T03:24:28.000Z",
                "updatedAt": "2021-07-16T03:24:28.000Z",
                "Like": {
                    "UserId": 21,
                    "RestaurantId": 1,
                    "createdAt": "2021-07-16T03:24:58.000Z",
                    "updatedAt": "2021-07-16T03:24:58.000Z"
                }
            }
        ],
        "Comments": [
            {
                "id": 1,
                "text": "Omnis animi velit quis reiciendis odio facilis est delectus expedita.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$1UaQ5KZLbMCJztUGRWP/uOtIaKel7TQFHIbozRf4LPysvFLu3UOO6",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-05T09:58:39.000Z"
                }
            },
            {
                "id": 51,
                "text": "Eius architecto adipisci labore nihil.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-05T09:58:39.000Z"
                }
            },
            {
                "id": 101,
                "text": "Modi laboriosam omnis itaque dolor eius esse sit quia.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$1UaQ5KZLbMCJztUGRWP/uOtIaKel7TQFHIbozRf4LPysvFLu3UOO6",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-05T09:58:39.000Z"
                }
            },
            {
                "id": 171,
                "text": "Modi laboriosam omnis itaque dolor eius esse sit quia.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-07-11T05:39:45.000Z",
                "updatedAt": "2021-07-11T05:39:45.000Z",
                "User": {
                    "id": 1,
                    "name": "root123",
                    "email": "root@example.com",
                    "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/pU2mGov.png",
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-15T09:17:49.000Z"
                }
            },
            {
                "id": 181,
                "text": "ddddd\n",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-07-11T08:40:35.000Z",
                "updatedAt": "2021-07-11T08:40:35.000Z",
                "User": {
                    "id": 1,
                    "name": "root123",
                    "email": "root@example.com",
                    "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/pU2mGov.png",
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-07-15T09:17:49.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}
export default {
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData
      const { id, name, Category, image, opening_hours:openingHours, tel, address, description, Comments } = restaurant
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked
      }
      this.restaurantComments = Comments
    }
  }
}
</script>