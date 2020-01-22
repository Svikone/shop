<template lang="html">

  <section class="btn-checkout">
    <div class="btn"  @click="getOrder()">Далее</div>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import api from '../../../../app.config.js'


  export default  {
    name: 'btn-checkout',
    props: [ 'item'],
    mounted () {
     
    },
    data () {
      return {
        api_url: api.config,
      }
    },
    methods: {
      getOrder() {
        let key = JSON.parse(localStorage.cart)
        axios.post(this.api_url.url+this.api_url.api+'/order/add',{phone: this.item.phone,user_name: this.item.user_name, catalogs: key}).then(result => {
            console.log(result.data)
          
          }).catch(() => {

          })
      // //  let qwe =this.item
      //  let key = JSON.parse(localStorage.cart)
      //  console.log({phone: this.item.phone,user_name: this.item.user_name, catalogs: key})
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .btn-checkout {  
      .btn {
        padding: 5px 15px 5px 15px;
        cursor: pointer;
        color: white;
        background: #448aff;
        font-family: sans-serif;
        text-align: center;
        width: 200px;
        border-radius: 10px;
        margin-top: 20px;
        &:hover {
          background: #005df9;
        }
      } 
  }
</style>
