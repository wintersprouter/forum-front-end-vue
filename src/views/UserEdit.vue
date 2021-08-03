<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? '資料更新中...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: -1,
      name: '',
      image: '',
      isProcessing: false
    }
  },
  computed: { ...mapState(['currentUser']) },
  watch: {
    currentUser() {
      this.setUser()
    }
  },

  created() {
    const { id } = this.$route.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
    next()
  },
  methods: {
    setUser() {
      const { id, image, name } = this.currentUser
      this.id = id
      this.name = name
      this.image = image
    },
    handleFileChange(e) {
      const { files } = e.target
      if (!files.length) {
        this.image = ''
        return
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.image = imageURL
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.name) {
          Toast.fire({ icon: 'warning', title: '請填入姓名' })
          return
        }
        this.isProcessing = true
        const form = e.target
        const formData = new FormData(form)
        const { data } = await usersAPI.update({ userId: this.id, formData })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'user', params: { id: this.id } })

        Toast.fire({ icon: 'success', title: '成功更新使用者個人資料' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({ icon: 'error', title: '無法更新使用者資料，請稍後再試' })
      }
    }
  }
}
</script>
