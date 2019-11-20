<template lang="html">
  <section class="marca">
      <item v-for="(marc, i) in marcs" v-bind:item="marc" v-bind:key="i">
       

        
      </item>

  </section>

</template>

<script lang="js">
  import item from '../shared/item.vue'

  export default  {
    name: 'marca',
    props: [],
    mounted () {

    },
    data () {
      return {
        marcs: [{
          name:'shevrole',
          img: 'phone.png',
          id:'shevrole'
        },
        {
          name:'lada',
          img: '/phone.png',
          id:'lada'
        },
        {
          name:'bmw',
          img: '@/assets/phone.png',
          id:'bmw'
        },
        {
          name:'toyota',
          img: '../../../assets/phone.png',
          id:'toyota'
        },
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
  .marca {
   width: 100%;
   display: flex;
  }                 
</style>
