<template lang="html">
  <router-link v-if="item.selector == 'category'" :to="'/model/'+marc+'/'+model+'/'+item.category">
    <section class="item">
        <div class="logo"><img v-bind:src="'http://localhost:9000/file/uploads/'+item.url_img" /></div>
        <div class="title">{{item.category_ru}}</div>
    </section>
  </router-link>

  <router-link v-else-if="item.selector == 'models'" :to="'/model/'+item.marca+'/'+item.name">
    <section class="item">
        <div class="logo"><img v-bind:src="'http://localhost:9000/file/uploads/'+item.url_img" /></div>
        <div class="title">{{item.name}}</div>
    </section>
  </router-link>

  <router-link v-else-if="item.selector == 'marcs'" :to="'/model/'+item.name+'/'">
    <section class="item">
        <div class="logo"><img v-bind:src="'http://localhost:9000/file/uploads/'+item.url_img" /></div>
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
      console.log(this.item)
    },
    data () {
      return {
        marc: this.$router.currentRoute.params['id'],
        model: this.$router.currentRoute.params['model'],
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
    .logo {
      text-align: center;
      img {
        width: 87px;
      }
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
