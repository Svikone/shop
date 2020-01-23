<template lang="html">

  <section class="details-item">
    <md-card md-with-hover>
      <md-ripple>
       
          <img v-bind:src="api_url.url+'/file/uploads/'+item.url_img" />
          <div class="listContent">
            <div class="info">
              <div class="headline">{{item.name}}</div>
              <div class="country">{{item.country}}</div>
              <div class="price">{{item.price}}грн</div> 
            </div>

            <div class="listContainer">
              <div class="counter">
                <input v-model="number" type="number" >
              </div>

              <div class="btn_cart" @click="addToCart(item._id)">Купить</div> 
            </div>

          </div>

      </md-ripple>
    </md-card>
  </section>
</template>

<script lang="js">
  import {eventBus} from '../../../../../main.js'
  import api from '../../../../../app.config.js'



  export default  {
    name: 'details-item',
    props: ['item'],
    mounted () {
    },
    data () {
      return {
        number:1,
        api_url: api.config
      }
    },
    methods: {
      addToCart(product_id) {
        let cart = [];
         
        const lsCart = localStorage.getItem('cart')
        let obj = {number:this.number,id:product_id};
          if(!lsCart) {
              cart.push(obj)
              localStorage.setItem('cart', JSON.stringify(cart));
              console.log(cart)
          }
          else {
            cart=JSON.parse(localStorage.cart)
            const isSaved = cart.find(product => product.id == product_id)
            if(!isSaved) {
              cart.push(obj)
              localStorage.setItem('cart', JSON.stringify(cart));
            }
            else {
              let index = cart.findIndex(product => product.id == product_id)
              
              cart[index].number = +cart[index].number + +this.number
              localStorage.setItem('cart', JSON.stringify(cart));
            }    
          }
          eventBus.$emit('count')
      }  
               
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .details-item {
    margin-top: 10px;
    .md-card {
      cursor: default;
      .md-ripple {
        display: flex;
        padding: 10px;
        img {
          height: auto;
          border-radius: 10px;
          border: 1px solid black;
          padding: 10px;
          height: 95px;
        }
        .listContent {
          padding-left: 20px;
          width: 100%;
          .info {
            font-weight: bold;
            .headline {
              color: #5e5ec7;
            }
            .price {
              font-weight: bold;
              color: #7c6100;
              font: 19px/20px Tahoma,Arial,sans-serif;
              display: flex;
              justify-content: flex-end;
              padding: 5px;
            }
          }
          .listContainer {
            display:flex;
            justify-content: flex-end;
            input{
              width: 49px;
              padding: 8px;
              border-radius: 8px;
              outline: none;
              border: 1px solid #4ac144;
              margin-right: 10px;
              cursor: pointer;
            }
          }
         
          .btn_cart {
            float: right;
            padding: 10px;
            padding: 5px 15px 5px 15px;
            box-shadow: 2px 2px 4px 0 rgba(163,184,165,0.7);
            border-radius: 5px;
            background-color: #4ac144;
            &:hover {
              color: white;
              transition:  0.5s ease;
              cursor: pointer;
              z-index: 999;

              
            }
          }
        }
      }
    }
  }
</style>
