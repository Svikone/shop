<template lang="html">

  <section class="catalog">
    <!-- <h1 v-for="(product, i) in products" v-bind:key="i" >{{product.name}}</h1> -->
    <app-item v-for="(product, i) in products" v-bind:item="product" v-bind:key="i">{{product.name}}</app-item>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import item from './item/details_item.vue'

  export default  {
    name: 'catalog',
    props: [],
    // marc,
    // catalog,
    // category,
    mounted () {
      this.getCatalog()
    },
    data () {
      return {
        marc: this.$router.currentRoute.params['id'],
        model: this.$router.currentRoute.params['model'],
        catalog: this.$router.currentRoute.params['catalog'],
        api_url: 'http://localhost:9000/api',

        products: []
      }
    },
    methods: {
      getCatalog() {
        axios.post(this.api_url+'/catalog/get/all/condition',{
          marc: this.marc,
          model: this.model,
          catalog: this.catalog,
        })
        .then(result => {
          this.products = result.data
        }).catch(() => {

        })
      },
    },
    computed: {

    },
    components: {
      appItem: item
    }
}


</script>

<style scoped lang="scss">
  .catalog {

  }
</style>
