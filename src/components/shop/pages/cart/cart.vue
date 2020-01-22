<template lang="html">

  <section class="cart">
    <h1>Корзина товаров</h1>
    <div v-if="this.productsId.length > 0">
      <app-cart v-for="(cart, i) in carts" v-bind:item="cart" v-bind:key="i" ></app-cart>
      <div class="total">
        <div class="clear" @click="clear()">Очистить корзину</div>
        <div class="priceContainer">Итого:
          <div class="price">{{fullprice}}грн</div>
        </div>
      </div>
      <router-link  to="/checkout">Оформить заказ</router-link>
    </div>
    <div v-else>Корзина пуста</div>

  </section>

</template>

<script lang="js">
  import cart from './listCart/listCart.vue'
  import axios from 'axios'
  import {eventBus} from '../../../../main.js'
  import api from '../../../../app.config.js'

 
  export default  {
    name: 'cart',
    props: [],
    mounted () {
      this.getLocalStorrage(),
      this.getList(),
      eventBus.$on('fullPrice', () => { 
        this.fullPrice()
      }),
      eventBus.$on('removeItem', (data) => { 
       this.removeItem(data)
      })
    },
    data () {
      return {
        api_url: api.config,
        carts:[],
        productsId: [],
        fullprice: 0
      }
    },
    methods: {
      getList() {
        axios.post(this.api_url.url+this.api_url.api+'/catalog/cart/added/products',{productsId: this.productsId}).then(result => {
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
        console.log(counters)
        this.fullprice = 0
        for(let price of this.carts) {
          for(let counter of counters) {
            if(price._id == counter.id) {
              console.log('fulPrice= '+price.price+'*'+counter.number)
              this.fullprice += price.price * counter.number
            }
          }
        }
      },
      clear() {
        localStorage.removeItem("cart");
        this.carts = []
        this.fullprice = 0
        eventBus.$emit('count')
        this.productsId = 0;

      },
      removeItem(id) {
        let lsCart = JSON.parse(localStorage.cart);
        lsCart = lsCart.filter(e => e.id !== id)
        this.carts = this.carts.filter(e => e._id !== id)
        localStorage.setItem('cart', JSON.stringify(lsCart));
        this.fullPrice();
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
