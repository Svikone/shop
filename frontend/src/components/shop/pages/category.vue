<template lang="html">

  <section class="category">
    <h1>category Component</h1>
     <item v-for="(category, i) in categorys" v-bind:item="category" v-bind:key="i"> </item>

  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import item from '../shared/item.vue'



  export default  {
    name: 'category',
    props: [],
    mounted () {
      this.getCategory()
    },
    data () {
      return {
        categorys: [],
        api_url: 'http://localhost:9000/api',
      }
    },
    methods: {
      getCategory() {
        axios.post(this.api_url+'/shop/category/all',{
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
