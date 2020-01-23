<template lang="html">

  <section class="category">
    <h1>category Component</h1>
     <item v-for="(category, i) in categorys" v-bind:item="category" v-bind:key="i"> </item>

  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import item from '../shared/item.vue'
  import api from '../../../app.config.js'
  import {eventBus} from '../../../main.js'

  export default  {
    name: 'category',
    props: [],
    mounted () {
      this.getCategory(),
      eventBus.$on('reRender',() => {
        this.getCategory()
      })
    },
    data () {
      return {
        categorys: [],
        api_url: api.config
      }
    },
    methods: {
      getCategory() {
        axios.post(this.api_url.url+this.api_url.api+'/category/get/all',{
        }).then(result => {
          console.log(result.data)
          this.categorys = result.data
        }).catch(() => {

        })
      }
    },
    computed: {

    },
    components: {
      'item': item
    }
}


</script>

<style scoped lang="scss">
  .category {

  }
</style>
