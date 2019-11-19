<template lang="html">

  <section class="cart">
    <h1>Корзина товаров</h1>
    <app-cart></app-cart>
    
  </section>

</template>

<script lang="js">
  import cart from './listCart.vue'
  export default  {
    name: 'cart',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    },
    components: {
      appCart: cart
    }
}


</script>

<style scoped lang="scss">
  .cart {

  }
</style>
