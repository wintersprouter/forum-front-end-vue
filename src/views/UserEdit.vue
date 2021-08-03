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

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
// import usersAPI from './../apis/users'
// import { Toast } from './../utils/helpers'
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
    currentUser(user) {
      if (user.id === -1) return
      const { id } = this.$route.params
      this.setUser(id)
    }
  },
  created() {
    if (this.currentUser.id === -1) return
    const { id } = this.$route.params
    this.setUser(id)
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id === -1) return
    const { id } = to.params
    this.setUser(id)
    next()
  },

  methods: {
    setUser(userId) {
      const { id, image, name } = this.currentUser
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: 'not-found' })
        return
      }
      this.id = id
      this.name = name
      this.image = image
    },
    handleFileChange(e) {
      const { files } = e.target
      if (files.length === 0) {
        this.image = ''
        return
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.image = imageURL
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      // TODO 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>
