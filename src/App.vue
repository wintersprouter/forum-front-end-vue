<template>
  <div id="restaurant-forum">
    <!-- router-view 根據路由不同，動態渲染該路由的組件 -->
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default ({
  name:'App'
})
</script>