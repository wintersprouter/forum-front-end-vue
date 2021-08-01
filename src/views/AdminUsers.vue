<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav/>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="user in users"
        :key="user.id">
          <th scope="row">
          {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin?'admin':'user'}}</td>
          <td>
            <button
              v-if="user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleIsAdmin(user.id)"
            >
              set as user
            </button>
            <button
              v-if="!user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleIsAdmin(user.id)"
            >
              set as Admin
            </button>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root123",
            "email": "root@example.com",
            "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
            "isAdmin": true,
            "image": "https://i.imgur.com/pU2mGov.png",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-15T09:17:49.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$1UaQ5KZLbMCJztUGRWP/uOtIaKel7TQFHIbozRf4LPysvFLu3UOO6",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        {
            "id": 11,
            "name": "root3",
            "email": "ryan@gmail.com",
            "password": "$2a$10$RlVjZ25mKa8aULENpsmZK.OBFxGUjicjsv2FVnmOXkdtn.yW14oRu",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-07-05T10:20:05.000Z",
            "updatedAt": "2021-07-05T10:32:11.000Z"
        },
        {
            "id": 21,
            "name": "hans",
            "email": "hans@yahoo.com",
            "password": "$2a$10$x1t6Xd/2gpTd2VjJHGoBd.NsmIZhv57MvwjMBVsB67qFh0ueCa2ja",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-07-16T03:24:28.000Z",
            "updatedAt": "2021-07-16T03:24:28.000Z"
        }
    ]
}
export default {
  name:"AdminUsers",
  components: {
    AdminNav
  },
  data () {
    return {
      users:[]
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      this.users = dummyData.users 
    },
    toggleIsAdmin(userId) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin:!user.isAdmin
          }
        }
        return user
      })
    }
  }


}
</script>