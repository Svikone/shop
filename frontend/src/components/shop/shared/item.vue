<template lang="html">
  <router-link :to="'/model/'+item.name">
    <section class="item">
        <div class="logo"><img v-bind:src="item.img" /></div>
        <div class="title">{{item.name}}</div>
    </section>
  </router-link>

</template>

<script lang="js">

  export default  {
    name: 'item',
    props: [
      'item'
    ],
    mounted () {
      // this.getModel()
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
  .item {
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
