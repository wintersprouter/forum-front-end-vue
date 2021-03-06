<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <template v-else>
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
                @click.stop.prevent="
                  toggleIsAdmin({ userId: user.id, isAdmin: user.isAdmin })
                "
              >
                {{ user.isAdmin ? 'set as user' : 'set as admin' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'
import Spinner from './../components/Spinner'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
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
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({ icon: 'error', title: '無法取得使用者資料，請稍後再試' })
      }
    },

    async toggleIsAdmin({ userId, isAdmin }) {
      try {
        const willBeAdmin = !isAdmin

        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: willBeAdmin.toString()
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: willBeAdmin
            }
          }
          return user
        })
        Toast.fire({ icon: 'success', title: '成功更新使用者個人角色' })
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法更新使用者角色，請稍後再試' })
      }
    }
  }
}
</script>
