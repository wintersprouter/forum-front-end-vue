<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <!-- router-view 根據路由不同，動態渲染該路由的組件 -->
      <router-view />
    </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style scoped>
main {
  margin-top: 65px !important;
}
</style>
