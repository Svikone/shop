<template lang="html">

  <section class="cart">
    <h1>Корзина товаров</h1>
    <app-cart v-for="(cart, i) in carts" v-bind:item="cart" v-bind:key="i"></app-cart>
    <div class="total">
      <div class="clear">Очистить корзину</div>
      <div class="priceContainer">Итого:
        <div class="price">224грн</div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import cart from './listCart/listCart.vue'
  import axios from 'axios'

  export default  {
    name: 'cart',
    props: [],
    mounted () {
      this.getList()
    },
    data () {
      return {
        api_url: 'http://localhost:9000/api',
        carts:[]
      }
    },
    methods: {
      getList() {
        axios.post(this.api_url+'/shop/cart/all',{}).then(result => {
          console.log(result.data)
          this.carts = result.data
        }).catch(() => {

        })
      }
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
    .total {
      display: flex;
      justify-content: space-between;
      .clear {
        cursor: pointer;
      }
      .priceContainer {
        font-weight: bold;
        display: flex;
        .price {
          color: #7c6100;
        }
      }
    }
    
  }
</style>
