<template lang="html">

  <section class="list-cart">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{item.name}}</div>
          <div class="delite" @click="removeListCart()">Удалить</div>
        </md-card-header>

        <md-card-actions>
          <img v-bind:src="this.api_url.url+'/file/uploads/'+item.url_img" />
          <div class="count">
            <div class="min selectCount" @click="setCount('decr')">&#60;</div>
            <input type="text" class="selectCount"  v-model="count" v-on:input="regExp()">
            <div class="plus selectCount" @click="setCount('incr')">&#62;</div>
          </div>
          <div class="price">{{item.price}}грн</div>
          
        </md-card-actions>
      </md-ripple>
    </md-card>
  </section>

</template>

<script lang="js">
  import {eventBus} from '@/main.js'
  import api from '../../../../../app.config.js'



  export default  {
    name: 'list-cart',
    props: [
      'item'
    ],
    mounted () {
      // this.test()
      this.setCount()
    },
    data () {
      return {
        count: '',
        api_url: api.config

      }
    },
    methods: {
      regExp() {
        this.count = this.count.replace(/[^0-9.]/g,'').replace(/,/,'.').trim();
        this.count = 4
      },
      setCount(mode) {
        var cart = [];
        cart=JSON.parse(localStorage.cart)
        var index = cart.findIndex(product => product.id == this.item._id)

        if(mode == 'incr') {
          cart[index].number = +cart[index].number + 1
        }else if(mode == 'decr') {
          cart[index].number = +cart[index].number - 1
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        eventBus.$emit('fullPrice')
        this.count = cart[index].number

        // this.test()
      },
      removeListCart() {
        eventBus.$emit('removeItem', this.item._id)
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .selectCount {
    border: 1px solid #4ac144;
    border-radius: 5px;
    padding: 0px 5px 0px 5px;
    font-weight: bold;
  }
  .list-cart {
    .md-card {
      width: 100%;
      margin: 4px;
      display: inline-block;
      vertical-align: top;
      cursor: default;
      .md-card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .delite {
          color: brown;
          cursor: pointer;
          &:hover {
            color: red;
          }
        }
      }
      .md-card-actions {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        img {
          padding: 10px;
          height: auto;
          border-radius: 10px;
          border: 1px solid black;
          height: 95px;
        }
        .price {
          font-weight: bold;
          color: #7c6100;
          font: 12px/20px Tahoma,Arial,sans-serif;
        }
        .count {
          display: flex;
          input {
            width: 24px;
            height: 24px;
            padding: 5px;
          }
        }
      }
    }
  }
</style>
