<template lang="html">
  <section class="marca">
      <item v-for="(marc, i) in this.marcs" v-bind:item="marc" v-bind:key="i">
       

        
      </item>

  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import api from '../../../app.config.js'

  import item from '../shared/item.vue'

  export default  {
    name: 'marca',
    props: [],
    mounted () {
      this.getMarca()
    },
    data () {
      return {
        api_url: api.config,
        marcs:[]
      }
    },
    methods: {
      getMarca() {
        axios.post(this.api_url.url+this.api_url.api+'/admin/get/marcs',{})
        .then(result => {
          this.marcs = result.data
        }).catch(() => {

        })
      },
    },
    computed: {

    },
    components: {
      'item': item
    }
}


</script>

<style scoped lang="scss">
  .marca {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }                 
</style>
