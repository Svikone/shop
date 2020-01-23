<template lang="html">

  <section class="model">
     <item v-for="(model, i) in models" v-bind:item="model" v-bind:key="i"> </item>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import api from '../../../app.config.js'
  import item from '../shared/item.vue'
  import {eventBus} from '../../../main.js'

  export default  {
    name: 'model',
    props: [],
    mounted () {
      this.getModel()
      eventBus.$on('reRender',() => {
        console.log('renderModel')
        this.id = this.$router.currentRoute.params['id'],
        this.getModel()
      })
    },
    
    data () {
      return {
        id: this.$router.currentRoute.params['id'],
        api_url: api.config,
        models: []
      }
    },
    methods: {
      getModel() {
        axios.post(this.api_url.url+this.api_url.api+'/model/marc',{id: this.id}).then(result => {
          console.log(result.data)
          this.models = result.data
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
  .model {
    width: 100%;
      display: flex;
  }
</style>
