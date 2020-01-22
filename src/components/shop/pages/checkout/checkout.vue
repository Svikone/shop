<template lang="html">

  <section class="checkout">
    <md-steppers>
      <md-step id="first" md-label="Контакты"> 
        <div class="container">
          Телефон: <input type="tel"  name="" class='tel' v-model="phone">
          ФИО: <input type="text" name="" v-model="name">
        </div>
        <app-btn v-bind:item="{phone: this.phone,user_name: this.name}"></app-btn>

      </md-step>

      <md-step id="second" md-label="Оплата">
      </md-step>
    </md-steppers>

  </section>

</template>

<script lang="js">
  import btnCheckout from './btnCheckout'


  export default  {
    name: 'checkout',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        phone:'',
        name:''
      }
    },
    methods: {
      
    },
    computed: {

    },
    components: {
      appBtn: btnCheckout
    }
}


</script>

<style scoped lang="scss">
  .checkout {
    .md-steppers-wrapper{
      height: 100%;
      .container {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
