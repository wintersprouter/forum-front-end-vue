<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
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
          <th scope="col" width="140">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleIsAdmin({ userId: user.id })"
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  computed: { ...mapState(['currentUser']) },

  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get()
        this.users = data.users
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法取得餐廳資料，請稍後再試' })
      }
    },

    toggleIsAdmin({ userId }) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>
