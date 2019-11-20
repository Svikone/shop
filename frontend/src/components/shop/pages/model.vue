<template lang="html">

  <section class="model">
     <item v-for="(model, i) in models" v-bind:item="model" v-bind:key="i"> </item>
       
  </section>

</template>

<script lang="js">
  import item from '../shared/item.vue'


  export default  {
    name: 'model',
    props: [],
    mounted () {

    },
    data () {
      return {
        models: [
          {
            name: 'toyota landCruser'
          },
          {
            name: 'toyota supra'
          },
          {
            name: 'toyota corolla'
          }
        ]
      }
    },
    methods: {

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
