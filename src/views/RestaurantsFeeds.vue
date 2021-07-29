<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants"/>
        <!-- 最新餐廳 NewestRestaurants -->
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants.vue'
const dummyData = {
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
            }
        },
        {
            "id": 2,
            "name": "Dudley Jast",
            "tel": "(241) 684-4461 x13070",
            "address": "001 Allen Road",
            "opening_hours": "08:00",
            "description": "Voluptatibus quisquam voluptatum aut nemo non voluptatem ipsum sit dolor. Laudantium nesciunt illo ipsam quos recusandae modi perspiciatis. Magni voluptatem earum omnis hic fugiat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.43038308274238",
            "viewCounts": 3,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-26T14:52:15.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z"
            }
        },
        {
            "id": 3,
            "name": "Miss Marques Rice",
            "tel": "1-737-501-7850",
            "address": "56898 Chasity Union",
            "opening_hours": "08:00",
            "description": "Maxime nihil itaque nam eligendi. Assumenda debitis qui ea ut. Suscipit molestiae unde sit molestias sunt vero consequuntur maiores. Labore ea deserunt modi sunt sapiente voluptatem totam dolore. Quas numquam aliquam laboriosam qui est molestias neque eaque. Doloremque dolores est dolorem laboriosam rem.\n \rExercitationem qui dolorem omnis repellat atque. Ipsa nobis quisquam voluptates cum omnis quod cupiditate. Repellendus qui quia quis et ea ea ipsam aut. Laboriosam sint laudantium excepturi inventore voluptatem quasi atque nisi ut.\n \rSunt soluta repellat nisi voluptas veritatis similique. Quia laboriosam voluptate dicta ut amet nemo. Labore architecto repudiandae soluta fuga saepe consequuntur. Dolores officia est et.",
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
            }
        },
        {
            "id": 4,
            "name": "Mckayla Hintz",
            "tel": "1-240-532-2429",
            "address": "167 Rogahn Mission",
            "opening_hours": "08:00",
            "description": "Impedit nesciunt ad id delectus magnam aspernatur fugit.",
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
            }
        },
        {
            "id": 5,
            "name": "Salma Johnson",
            "tel": "866.855.4905",
            "address": "4722 Lionel Trafficway",
            "opening_hours": "08:00",
            "description": "Mollitia sit recusandae reiciendis voluptatibus commodi voluptas et. Culpa dolor qui quo esse saepe. Tempore et dolores sit voluptatem harum autem consequatur unde.",
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
            }
        },
        {
            "id": 6,
            "name": "Pearl Frami Sr.",
            "tel": "130-124-3685 x9054",
            "address": "021 Runte Brook",
            "opening_hours": "08:00",
            "description": "Expedita illum perspiciatis natus ea quo laudantium eveniet earum. Ipsam sapiente nemo non est facilis ut qui inventore illum. Esse atque corporis sed recusandae. Id adipisci sed in vel quos aut quas possimus reiciendis. Voluptatibus libero earum officiis ipsa at. Placeat occaecati dolor possimus molestiae eaque vel rerum id fugit.",
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
            }
        },
        {
            "id": 7,
            "name": "Lane Rolfson",
            "tel": "(540) 110-2896",
            "address": "619 Alex Run",
            "opening_hours": "08:00",
            "description": "Repellat eaque fugiat rerum non quaerat. In vel ab minus nemo eos laboriosam repellat vitae. Blanditiis quia voluptate et impedit culpa delectus. Et perferendis quia deserunt fugiat ea et voluptatum dolorem. Modi in veniam qui sequi. Quas dicta est.",
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
            }
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
            }
        },
        {
            "id": 9,
            "name": "Roman Kunde",
            "tel": "(051) 925-0555 x1731",
            "address": "131 Hoyt Mission",
            "opening_hours": "08:00",
            "description": "Et dolorum voluptas.\nSint eveniet ratione id praesentium totam.\nImpedit aliquam nobis quia pariatur consequatur quae eos quas cum.",
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
            }
        },
        {
            "id": 10,
            "name": "Iva Dickinson Jr.",
            "tel": "757.545.3970",
            "address": "575 Clementine Neck",
            "opening_hours": "08:00",
            "description": "Consequuntur nam corporis adipisci. Voluptate vero perferendis rem fuga et. Animi quam sapiente dolorem voluptate quo deserunt distinctio. Dignissimos dolorem sunt fugit sint temporibus iste necessitatibus est. Repudiandae cupiditate nihil vitae maiores rerum consectetur neque. Nulla voluptatem qui hic eligendi voluptas quis.",
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
            }
        }
    ],
    "comments": [
        {
            "id": 191,
            "text": "123456",
            "UserId": 1,
            "RestaurantId": 2,
            "createdAt": "2021-07-14T13:13:20.000Z",
            "updatedAt": "2021-07-14T13:13:20.000Z",
            "User": {
                "id": 1,
                "name": "root123",
                "email": "root@example.com",
                "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                "isAdmin": true,
                "image": "https://i.imgur.com/pU2mGov.png",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-15T09:17:49.000Z"
            },
            "Restaurant": {
                "id": 2,
                "name": "Dudley Jast",
                "tel": "(241) 684-4461 x13070",
                "address": "001 Allen Road",
                "opening_hours": "08:00",
                "description": "Voluptatibus quisquam voluptatum aut nemo non voluptatem ipsum sit dolor. Laudantium nesciunt illo ipsam quos recusandae modi perspiciatis. Magni voluptatem earum omnis hic fugiat.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.43038308274238",
                "viewCounts": 3,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-26T14:52:15.000Z",
                "CategoryId": 4
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
            },
            "Restaurant": {
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
                "CategoryId": 4
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
            },
            "Restaurant": {
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
                "CategoryId": 4
            }
        },
        {
            "id": 161,
            "text": "ZVC zsxv dzv df",
            "UserId": 1,
            "RestaurantId": 3,
            "createdAt": "2021-07-10T10:19:54.000Z",
            "updatedAt": "2021-07-10T10:19:54.000Z",
            "User": {
                "id": 1,
                "name": "root123",
                "email": "root@example.com",
                "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                "isAdmin": true,
                "image": "https://i.imgur.com/pU2mGov.png",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-15T09:17:49.000Z"
            },
            "Restaurant": {
                "id": 3,
                "name": "Miss Marques Rice",
                "tel": "1-737-501-7850",
                "address": "56898 Chasity Union",
                "opening_hours": "08:00",
                "description": "Maxime nihil itaque nam eligendi. Assumenda debitis qui ea ut. Suscipit molestiae unde sit molestias sunt vero consequuntur maiores. Labore ea deserunt modi sunt sapiente voluptatem totam dolore. Quas numquam aliquam laboriosam qui est molestias neque eaque. Doloremque dolores est dolorem laboriosam rem.\n \rExercitationem qui dolorem omnis repellat atque. Ipsa nobis quisquam voluptates cum omnis quod cupiditate. Repellendus qui quia quis et ea ea ipsam aut. Laboriosam sint laudantium excepturi inventore voluptatem quasi atque nisi ut.\n \rSunt soluta repellat nisi voluptas veritatis similique. Quia laboriosam voluptate dicta ut amet nemo. Labore architecto repudiandae soluta fuga saepe consequuntur. Dolores officia est et.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.482827918913088",
                "viewCounts": 5,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-10T10:20:39.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 4,
            "text": "Ullam quis debitis.",
            "UserId": 1,
            "RestaurantId": 4,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "User": {
                "id": 1,
                "name": "root123",
                "email": "root@example.com",
                "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                "isAdmin": true,
                "image": "https://i.imgur.com/pU2mGov.png",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-15T09:17:49.000Z"
            },
            "Restaurant": {
                "id": 4,
                "name": "Mckayla Hintz",
                "tel": "1-240-532-2429",
                "address": "167 Rogahn Mission",
                "opening_hours": "08:00",
                "description": "Impedit nesciunt ad id delectus magnam aspernatur fugit.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014",
                "viewCounts": 1,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T17:10:00.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 6,
            "text": "Necessitatibus voluptatem dicta suscipit.",
            "UserId": 1,
            "RestaurantId": 6,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "User": {
                "id": 1,
                "name": "root123",
                "email": "root@example.com",
                "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                "isAdmin": true,
                "image": "https://i.imgur.com/pU2mGov.png",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-15T09:17:49.000Z"
            },
            "Restaurant": {
                "id": 6,
                "name": "Pearl Frami Sr.",
                "tel": "130-124-3685 x9054",
                "address": "021 Runte Brook",
                "opening_hours": "08:00",
                "description": "Expedita illum perspiciatis natus ea quo laudantium eveniet earum. Ipsam sapiente nemo non est facilis ut qui inventore illum. Esse atque corporis sed recusandae. Id adipisci sed in vel quos aut quas possimus reiciendis. Voluptatibus libero earum officiis ipsa at. Placeat occaecati dolor possimus molestiae eaque vel rerum id fugit.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.190112895855831",
                "viewCounts": 1,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-06T16:06:25.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 7,
            "text": "Unde occaecati dolor quidem rerum nesciunt aperiam.",
            "UserId": 1,
            "RestaurantId": 7,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "User": {
                "id": 1,
                "name": "root123",
                "email": "root@example.com",
                "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                "isAdmin": true,
                "image": "https://i.imgur.com/pU2mGov.png",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-15T09:17:49.000Z"
            },
            "Restaurant": {
                "id": 7,
                "name": "Lane Rolfson",
                "tel": "(540) 110-2896",
                "address": "619 Alex Run",
                "opening_hours": "08:00",
                "description": "Repellat eaque fugiat rerum non quaerat. In vel ab minus nemo eos laboriosam repellat vitae. Blanditiis quia voluptate et impedit culpa delectus. Et perferendis quia deserunt fugiat ea et voluptatum dolorem. Modi in veniam qui sequi. Quas dicta est.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.38207413310656",
                "viewCounts": 1,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-29T06:05:46.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 11,
            "text": "Quia omnis quos alias laudantium officia magni.",
            "UserId": 1,
            "RestaurantId": 11,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "User": {
                "id": 1,
                "name": "root123",
                "email": "root@example.com",
                "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                "isAdmin": true,
                "image": "https://i.imgur.com/pU2mGov.png",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-15T09:17:49.000Z"
            },
            "Restaurant": {
                "id": 11,
                "name": "Odessa Runte",
                "tel": "477-189-3440 x540",
                "address": "7642 Austen Camp",
                "opening_hours": "08:00",
                "description": "Adipisci accusantium aut officiis et.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.99779116098115",
                "viewCounts": 0,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 13,
            "text": "Culpa qui accusamus praesentium accusantium corrupti natus.",
            "UserId": 1,
            "RestaurantId": 13,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "User": {
                "id": 1,
                "name": "root123",
                "email": "root@example.com",
                "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                "isAdmin": true,
                "image": "https://i.imgur.com/pU2mGov.png",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-15T09:17:49.000Z"
            },
            "Restaurant": {
                "id": 13,
                "name": "Cedrick Morissette",
                "tel": "1-806-437-1238",
                "address": "7592 Watsica Avenue",
                "opening_hours": "08:00",
                "description": "aperiam itaque aliquam",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.848232013778702",
                "viewCounts": 0,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 16,
            "text": "Voluptas fuga nulla repudiandae molestiae quaerat qui quo quas harum.",
            "UserId": 1,
            "RestaurantId": 16,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z",
            "User": {
                "id": 1,
                "name": "root123",
                "email": "root@example.com",
                "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                "isAdmin": true,
                "image": "https://i.imgur.com/pU2mGov.png",
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-15T09:17:49.000Z"
            },
            "Restaurant": {
                "id": 16,
                "name": "Ian Kerluke",
                "tel": "(616) 152-4200 x41072",
                "address": "0289 Kuvalis Path",
                "opening_hours": "08:00",
                "description": "amet pariatur totam",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.5140637011159104",
                "viewCounts": 0,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "CategoryId": 5
            }
        }
    ]
}
export default {
  components: {
    NavTabs,
    NewestRestaurants
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>