<template lang="html">

  <section class="cart">
    <h1>Корзина товаров</h1>
    <app-cart v-for="(cart, i) in carts" v-bind:item="cart" v-bind:key="i" v-bind:lsCaunters="lsCart"></app-cart>
    <div class="total">
      <div class="clear" @click="clear()">Очистить корзину</div>
      <div class="priceContainer">Итого:
        <div class="price">{{fullprice}}грн</div>
        <div class="">фиксануть при нажатии на очистить карзину, и чтоб в корзине товаров в инпут число віводилось</div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import cart from './listCart/listCart.vue'
  import axios from 'axios'
  import {eventBus} from '../../../../main.js'

 
  export default  {
    name: 'cart',
    props: [],
    mounted () {
      this.getLocalStorrage(),
      this.getList()

    },
    data () {
      return {
        api_url: 'http://localhost:9000/api',
        carts:[],
        productsId: [],
        fullprice: 0
      }
    },
    methods: {
      getList() {
        axios.post(this.api_url+'/catalog/cart/added/products',{productsId: this.productsId}).then(result => {
          // console.log(result.data)
          this.carts = result.data
          this.fullPrice()
        }).catch(() => {

        })
      },
       getLocalStorrage() {
        // const lsCart = localStorage.getItem('cart')
        const lsCart = JSON.parse(localStorage.cart)
        this.productsId = lsCart.map(product => product.id)
          
      },
      fullPrice() {
        const counters = JSON.parse(localStorage.cart)
        for(let price of this.carts) {
          for(let counter of counters) {
            if(price._id == counter.id) {
              this.fullprice += price.price * counter.number
            }
          }
        }
      },
      clear() {
        localStorage.removeItem("cart");
        this.carts = []
        eventBus.$emit('count')

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
