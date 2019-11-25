<template lang="html">

  <section class="details-item">
    <md-card md-with-hover>
      <md-ripple>
        <!-- <md-card-header>
          <div class="md-title">{{item.name}}</div>
        </md-card-header> -->

        <!-- <md-card-actions> -->
          <img src="data:image/jpeg;base64,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" >
          <div class="listContent">
            <div class="info">
              <div class="headline">{{item.name}}</div>
              <div class="country">{{item.country}}</div>
              <div class="price">{{item.price}}грн</div> 
            </div>
            <div class="btn_cart">Купить</div> 
          </div>

        <!-- </md-card-actions> -->
      </md-ripple>
    </md-card>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'details-item',
    props: ['item'],
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
          width: 142px;
          height: 95px;
        }
        .listContent {
          padding-left: 20px;
          width: 100%;
          .info {
            font-weight: bold;
            .price {
              font-weight: bold;
              color: #7c6100;
              font: 19px/20px Tahoma,Arial,sans-serif;
              display: flex;
              justify-content: flex-end;
              padding: 5px;
            }
          }
          .btn_cart {
            float: right;
            padding: 10px;
            padding: 5px 15px 5px 15px;
            box-shadow: 2px 2px 4px 0 rgba(163,184,165,0.7);
            border-radius: 5px;
            background-color: #ff9800;
            &:hover {
              background-color: #4ac144;
              color: white;
              transition:  0.5s ease;
              
            }
          }
        }
      }
    }
  }
</style>
