<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      首頁 - 餐廳列表
    </h1>
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills
    :categories = "categories"/>

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
      v-for ="restaurant in restaurants"
      :key ="restaurant.id"
      :initial-restaurant = "restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = 
  {
    "restaurants": [
        {
            "id": 1,
            "name": "Jazmyn Quitzon",
            "tel": "(017) 135-4543",
            "address": "5876 Macejkovic Ford",
            "opening_hours": "08:00",
            "description": "Amet earum voluptatem dolorum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.923349451179542",
            "viewCounts": 15,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-29T06:14:08.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Dudley Jast",
            "tel": "(241) 684-4461 x13070",
            "address": "001 Allen Road",
            "opening_hours": "08:00",
            "description": "Voluptatibus quisquam voluptatum aut nemo non volu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.43038308274238",
            "viewCounts": 4,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-29T13:11:41.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 3,
            "name": "Miss Marques Rice",
            "tel": "1-737-501-7850",
            "address": "56898 Chasity Union",
            "opening_hours": "08:00",
            "description": "Maxime nihil itaque nam eligendi. Assumenda debiti",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.482827918913088",
            "viewCounts": 5,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-10T10:20:39.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 4,
            "name": "Mckayla Hintz",
            "tel": "1-240-532-2429",
            "address": "167 Rogahn Mission",
            "opening_hours": "08:00",
            "description": "Impedit nesciunt ad id delectus magnam aspernatur ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014",
            "viewCounts": 1,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T17:10:00.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Salma Johnson",
            "tel": "866.855.4905",
            "address": "4722 Lionel Trafficway",
            "opening_hours": "08:00",
            "description": "Mollitia sit recusandae reiciendis voluptatibus co",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.09006422711376",
            "viewCounts": 0,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Pearl Frami Sr.",
            "tel": "130-124-3685 x9054",
            "address": "021 Runte Brook",
            "opening_hours": "08:00",
            "description": "Expedita illum perspiciatis natus ea quo laudantiu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.190112895855831",
            "viewCounts": 1,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-06T16:06:25.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Lane Rolfson",
            "tel": "(540) 110-2896",
            "address": "619 Alex Run",
            "opening_hours": "08:00",
            "description": "Repellat eaque fugiat rerum non quaerat. In vel ab",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.38207413310656",
            "viewCounts": 1,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-29T06:05:46.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Kariane West",
            "tel": "1-392-349-4577 x62194",
            "address": "576 Kris Parkways",
            "opening_hours": "08:00",
            "description": "quo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.761591350585455",
            "viewCounts": 0,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Roman Kunde",
            "tel": "(051) 925-0555 x1731",
            "address": "131 Hoyt Mission",
            "opening_hours": "08:00",
            "description": "Et dolorum voluptas.\nSint eveniet ratione id praes",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.144782599599694",
            "viewCounts": 0,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Iva Dickinson Jr.",
            "tel": "757.545.3970",
            "address": "575 Clementine Neck",
            "opening_hours": "08:00",
            "description": "Consequuntur nam corporis adipisci. Voluptate vero",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.73718248364722",
            "viewCounts": 0,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  name:'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,//-1 代表現在還沒拿到資料，而不是說真的打算用 -1 去運算邏輯，之後一定用其他的值把 -1 覆蓋掉
      nextPage: -1

    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }  
}
</script>