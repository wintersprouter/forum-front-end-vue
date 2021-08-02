<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit()">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="form.name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="form.password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="form.passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        {{ isProcessing ? '處理中...' : 'Submit' }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>
<script>
import { Toast } from './../utils/helpers'
import authorizationAPI from './../apis/authorization'

export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
      },
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        let { email, password, name, passwordCheck } = this.form
        if (!email || !password || !name || !passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '所有欄位都是必填的'
          })
          return
        }
        if (password !== passwordCheck) {
          Toast.fire({ icon: 'warning', title: '密碼與確認密碼不相符' })
          password = ''
          passwordCheck = ''
          return
        }
        this.isProcessing = true
        const formData = this.form
        const { data } = await authorizationAPI.signUp({ formData })
        console.log('data', data)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'sign-in' })
        Toast.fire({ icon: 'success', title: `${data.message}` })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: `${error}`
        })
      }
    }
  }
}
</script>
