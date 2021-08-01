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
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
        v-if="image"
        :src="image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  id: 1,
  name: '管理者',
  image: 'https://i.pravatar.cc/300'
}
export default {
  data () {
    return {
      id: -1,
      name: '',
      image: ''
    }
  },
  methods: {
    fetchUser (userId) {
      console.log('userId',userId)
      const { id,name,image } = dummyData

      this.id = id
      this.name = name
      this.image = image
    },
    handleFileChange (e) {
      const { files } = e.target
      if (files.length === 0) {
        this.image = ''
        return
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.image = imageURL
      }
    },
    handleSubmit (e) {
      const form = e.target 
      const formData = new FormData(form)
      // TODO 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }  
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  }
}
</script>