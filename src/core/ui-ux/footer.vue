<template lang="html">

  <section class="footer">
    <div class="mainFooter">
      <div class="socialNetworks">
        <div class="logo"><p>Logo</p></div>
        <div class="item">
          <img  src="../../assets/instagram.png">
          <img  src="../../assets/telegram.png">


        </div>
      </div>
      <div class="phone">
        <p>Как связаться?</p>
        (0800) 50-81-99<br/>
        (098) 580-01-99<br/>
        (050) 480-01-99<br/>
        (093) 170-05-93<br/>
      </div>
    </div>
    <div class="fcopy">
      ©{{year}} Интернет-магазин автотоваров
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'footer',
    props: [],
    mounted () {
      this.re()
    },
    data () {
      return {
        year: ''
      }
    },
    methods: {
      re() {
        this.year = new Date().getFullYear()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .footer {
    background-color: #1c2026;
    height: 200px;
        margin-top: -200px;
    color: rgba(192, 191, 191, 0.4);
    .mainFooter {
      justify-content: space-around;
      padding: 10px;
      border-bottom: 1px solid rgba(192, 191, 191, 0.4);
      display: flex;
      .socialNetworks {
        display: flex;
        flex-direction: column;
        .logo {
          font-family: sans-serif;
          font-size: 40px;
          flex-grow: 1;
          color: #4CAF50;
        }
        .item {
          display: flex;
          img {
            width: 25px;
            margin-right: 5px;
          }
        }
      }
      .phone {
        color: rgba(192, 191, 191, 0.4);
      }
    }
    .fcopy {
      text-align: center;
      padding: 15px;
    }
  }
</style>
