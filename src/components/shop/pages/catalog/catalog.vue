<template lang="html">
  <section class="catalog">
    <div v-if="this.search == ''">
      Запрос не должен быть пустой
    </div>
    <div v-else-if="this.state == 'search'">
      <app-item v-for="(product, i) in productsSearch" v-bind:item="product" v-bind:key="i">{{product.name}}</app-item>
    </div>
    <div v-else> 
      <app-item v-for="(product, i) in products" v-bind:item="product" v-bind:key="i">{{product.name}}</app-item>
    </div>
  </section>
</template>

<script lang="js">
  import axios from 'axios'
  import item from './item/details_item.vue'
  import {eventBus} from '../../../../main.js'
  import api from '../../../../app.config.js'

  export default  {
    name: 'catalog',
    props: [],
    mounted () {
      this.getCatalog(),
      eventBus.$on('search', data => {
        this.search = data.searchText,
        this.state = data.state
        this.searchGetCatalog()

      }),
      eventBus.$on('reRender',() => {
        this.getParams()
        this.getCatalog()
      })
    },
    data () {
      return {
        marc: this.$router.currentRoute.params['id'],
        model: this.$router.currentRoute.params['model'],
        catalog: this.$router.currentRoute.params['catalog'],
        api_url: api.config,
        products: [],
        search: '1',
        productsSearch: [],
        state: ''
      }
    },
    methods: {
      getParams() {
        this.marc = this.$router.currentRoute.params['id'];
        this.model = this.$router.currentRoute.params['model'];
        this.catalog = this.$router.currentRoute.params['catalog'];
      },

      getCatalog() {
        axios.post(this.api_url.url+this.api_url.api+'/catalog/get/all/condition',{
          marc: this.marc,
          model: this.model,
          catalog: this.catalog,
        })
        .then(result => {
          this.products = result.data
        }).catch(() => {
        })
      },
      
      searchGetCatalog() {
        axios.post(this.api_url.url+this.api_url.api+'/catalog/search',{
          searchText: this.search
        })
        .then(result => {
          this.productsSearch = result.data
        }).catch(() => {
        })
      }
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
