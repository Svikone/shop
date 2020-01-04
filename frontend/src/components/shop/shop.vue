<template lang="html">

  <section class="shop">

    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Детали zp.ua</span>
        <div class="container">
          <input type="text" name="" class="serch" placeholder="Поиск запчастей" v-model="str" v-on:input="regExp()">
          <div class="btnSearch">Найти</div>
          <div class="phone">
            <img src="../../assets/phone.png">
            <div class="">(0800) 50-81-99 </div>
            <div class="direction">&lsaquo;</div>

            <div class="popUp">
              <div class="schedule">
                Пн-Пт: 8:30-21:00<br/>
                Сб-Вс: 8:30-18:00<br/>
              </div>
              <div class="phones">
                (0800) 50-81-99<br/>
                (098) 580-01-99<br/>
                (050) 480-01-99<br/>
                (093) 170-05-93<br/>
              </div>
              
            </div>
          </div>
          <router-link  to="/cart" class="trolley">
            <div class="total">{{this.productNumber}}</div>
            Корзина
          </router-link>
        </div>
        <div class="autorization">
          <div class="login">Вход</div>
          <div class="register">Регистрация</div>
        </div>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Навигация
        </md-toolbar>

        <md-list>
          <div class="md-layout-item">
            <md-field>
              <label>Выберите марку</label>
              <md-select @md-selected="selectCategory(selected)" v-model="selected">
                <md-option v-for="(marc, i) in this.marcs"  v-bind:value="marc.name" v-bind:key="i">{{marc.name}}</md-option>
              </md-select>
            </md-field>

            <md-field>
              <label>Выберите модель</label>
              <md-select v-model="selectedModels">
                <md-option v-for="(model, i) in this.models"  v-bind:value="model.name"  v-bind:key="i">{{model.name}}</md-option>
              </md-select>
            </md-field>

            <md-field>
              <label>Выберите категорию</label>
              <md-select v-model="selectedCategorys">
                <md-option v-for="(category, i) in this.categorys"  v-bind:value="category.category"  v-bind:key="i">{{category.category_ru}}</md-option>
              </md-select>
            </md-field>

            <div @click="setCatalog()"> <router-link :to="'/model/'+ this.selected+'/'+this.selectedModels+'/'+this.selectedCategorys" >Перейти</router-link> </div>
          
          </div>
        </md-list>
      </md-app-drawer>
  
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import {eventBus} from '../../main.js'

  export default  {
    name: 'shop',
    props: [],
    mounted () {
      this.getMarca(),
      eventBus.$on('count',() => {
        this.productLength()
      }),
      this.productLength(),
      this.getCategory()
    },
    data () {
      return {
        api_url: 'http://localhost:9000/api',
        str:'qwe45',
        productNumber:'',
        marcs:[],
        models:[],
        selected:'',
        categorys:'',
        selectedModels:'',
        selectedCategorys:''
      }
    },
    methods: {
      setCatalog() {
        console.log('qwe')
        eventBus.$emit('trigerCatalog')
      },
      selectCategory(event) {
        axios.post(this.api_url+'/model/marc',{id: event}).then(result => {
          this.models = result.data
          console.log(this.models)
        }).catch(() => {

        })
      },
      getMarca() {
        axios.post(this.api_url+'/admin/get/marcs',{})
        .then(result => {
          this.marcs = result.data
        }).catch(() => {

        })
      },
      regExp() {
        console.log(this.str)
        this.str = this.str.replace(/[^0-9.]/g,'').replace(/,/,'.').trim();
        
      },
      getCategory() {
        axios.post(this.api_url+'/category/get/all',{}).then(result => {
          this.categorys = result.data
          console.log(this.categorys)
        }).catch(() => {

        })
      },
      productLength() {
        if(localStorage.cart) {
          this.productNumber = JSON.parse(localStorage.cart).length 
        }else {
          this.productNumber = 0
        }
      }
    },
    computed: {

    },
    
}


</script>

<style scoped lang="scss">
  .shop {
    .md-app {
      // max-height: 400px;
      border: 1px solid rgba(#000, .12);
    }
    .md-primary {
      background: #ff9800;
      display: flex;
      justify-content: space-between;
      .container {
        display: flex;
        .phone {
          padding: 0px 10px 0px 10px;
          border-left: 2px solid #4ac144;
          border-right: 2px solid #4ac144;
          margin-left: 10px;
          display: flex;
          .direction {
            transform: rotate(-90deg);
            font-size: 29px;
            width: 25px;
            text-align: center;
            height: 25px;
          }
          .popUp {
            position: absolute;
            margin-top: 33px;
            color: black;
            width: 159px;
            text-align: center;
            background: white;
            word-wrap: break-word;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            padding: 10px;
            display: none;
            .schedule {
              border-bottom: 1px solid rgba(0,0,0,0.1);
              padding-bottom: 15px;
            }
            .phones {
              padding-top: 15px;
            }
          }
          img {
            height: 31px;
            margin-right: 5px;
          }
          &:hover .popUp {
            display: block;
          }
          &:hover .direction {
            transform: rotate(90deg);
          }
        }
        .trolley {
          padding: 5px;
          border-radius: 5px;
          border: 1px solid #4ac144;
          margin-left: 10px;
          color: white;
          cursor: pointer;
          &:hover {
            color: black;
          }
          .total {
            background-color: #f8c615;
            text-align: center;
            border-radius: 40px;
            position: absolute;
            // right: 48px;
            top: 0px;
            width: 20px;
          }
        }
        .serch {
          border: 0 none;
          background: white;
          padding: 4px;
          outline: none;
          color:black;
        }
        .btnSearch {
          padding: 7px 20px;
          background: #4ac144;
          font-family: sans-serif;
          cursor: pointer;
          &:hover {
            color: black;
          }
        }
      }
    }
    .md-drawer {
      width: 230px;
      max-width: calc(100vw - 125px);
    }
  }
</style>
