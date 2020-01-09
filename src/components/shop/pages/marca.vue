<template lang="html">
  <section class="marca">
      <item v-for="(marc, i) in this.marcs" v-bind:item="marc" v-bind:key="i">
       

        
      </item>

  </section>

</template>

<script lang="js">
  import axios from 'axios'

  import item from '../shared/item.vue'

  export default  {
    name: 'marca',
    props: [],
    mounted () {
      this.getMarca()
    },
    data () {
      return {
        api_url: 'http://localhost:9000/api',
        marcs:[]
      }
    },
    methods: {
      getMarca() {
        axios.post(this.api_url+'/admin/get/marcs',{})
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
  }                 
</style>
