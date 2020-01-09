<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'

  Vue.use(VueMaterial)

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
