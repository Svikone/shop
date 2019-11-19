<template lang="html">

  <section class="model">
    <div class="logo"><img src="../../../assets/phone.png" alt=""></div>
    <div class="title">Shevrole Aveo 1.4 turbo</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'model',
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

    }
}


</script>

<style scoped lang="scss">
  .model {
    width: 148px;
    height: 120px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 0 9px #fafafa;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #2196F3;
    &:hover {
      box-shadow: 0 0 10px rgb(255, 152, 0);

    }
    .title {
      font-size: 18px;
      line-height: 20px;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
    }
  }
</style>
