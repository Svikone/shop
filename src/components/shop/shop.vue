<template lang="html">

  <section class="shop">

    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="container">
          <router-link to="/marca"><span class="md-title">ДЕТАЛИ zp.ua</span></router-link>
          <div class="content">
            <div class="menu" @click="menuVisible = !menuVisible">
              <img  src="../../../src/assets/menu.png">
            </div>
            <div class="wrapper">
              <div class="searchMobil">
                <img  src="../../../src/assets/search.png">
              </div>
              <div class="searchContainer none">
                <div class="conteinerContent">
                  <input type="text" name="" class="serch  " placeholder="Поиск запчастей" v-model="str" >
                  <div class="btnSearch "  @click="search()">
                    <router-link to="/catalog/search">
                      Найти
                    </router-link>
                  </div>

                </div>

              </div>

            </div>
            <div class="phone">
              <img src="../../assets/phone.png">
              <div class="number none">(0800) 50-81-99 </div>
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
              <img src="../../assets/cart.png">

              Корзина
            </router-link>
          </div>
        </div>
        <!-- <div class="autorization">
          <div class="login">Вход</div>
          <div class="register">Регистрация</div>
        </div> -->
      </md-app-toolbar>

      <md-app-drawer md-permanent="full"  :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Навигация
        </md-toolbar>

        <md-list>
          <div class="md-layout-item">
            <md-field>
              <label>Выберите марку</label>
              <md-select @md-selected="selectMarc(selected)" v-model="selected">
                <md-option v-for="(marc, i) in this.marcs"  v-bind:value="marc.name" v-bind:key="i">{{marc.name}}</md-option>
              </md-select>
            </md-field>

            <md-field>
              <label>Выберите модель</label>
              <md-select @md-selected="selectModels(selectedModels)" v-model="selectedModels" v-bind:disabled="modelsDisable">
                <md-option v-for="(model, i) in this.models"  v-bind:value="model.name"  v-bind:key="i">{{model.name}}</md-option>
              </md-select>
            </md-field>

            <md-field>
              <label>Выберите категорию</label>
              <md-select v-model="selectedCategorys"  v-bind:disabled="categoryDisable">
                <md-option v-for="(category, i) in this.categorys"  v-bind:value="category.category"  v-bind:key="i">{{category.category_ru}}</md-option>
              </md-select>
            </md-field>

            <!-- <div @click="setCatalog()" class="btnNavigation">  -->
            <div @click="setCatalog()"> 
              <router-link v-if="this.selectedModels==null && this.selectedCategorys==null &&  this.selected!=null"  :to="'/model/'+ this.selected" ><div  class="btnNavigation">Перейти</div></router-link> 
              <router-link v-else-if="this.selectedCategorys==null" :to="'/model/'+ this.selected+'/'+this.selectedModels"  ><div  class="btnNavigation">Перейти</div></router-link> 
              <router-link v-else :to="'/model/'+ this.selected+'/'+this.selectedModels+'/'+this.selectedCategorys"><div  class="btnNavigation">Перейти</div></router-link> 
            </div>
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
  import api from '../../app.config.js'

  export default  {
    name: 'shop',
    props: [],
    mounted () {
      this.getMarca(),
      eventBus.$on('count',() => {
        this.productLength()
      }),
      this.productLength()
     
    },
    data () {
      return {
        api_url: api.config,
        str:'',
        productNumber:'',
        marcs:[],
        models:[],
        selected:null,
        categorys:'',
        selectedModels:null,
        selectedCategorys:null,
        modelsDisable: true,
        categoryDisable: true,
        menuVisible: false

      }
    },
    methods: {
      setCatalog() {
        eventBus.$emit('trigerCatalog')
        this.selected = null;
        this.selectedModels = null;
        this.selectedCategorys = null;
        this.modelsDisable = true;
        this.categoryDisable = true;
        this.menuVisible = false
      },
      selectMarc(event) {
        
        axios.post(this.api_url.url+this.api_url.api+'/model/marc',{id: event}).then(result => {
          this.models = result.data
          if(this.models.length>0){
            this.modelsDisable = false
          }
        }).catch(() => {

        })
      },
      selectModels(event) {
        if(event){
          this.categoryDisable = false
        }
        this.getCategory()
      },
      getMarca() {
        axios.post(this.api_url.url+this.api_url.api+'/admin/get/marcs',{})
        .then(result => {
          this.marcs = result.data
        }).catch(() => {

        })
      },
      // regExp() {
      //   this.str = this.str.replace(/[^0-9.]/g,'').replace(/,/,'.').trim();
        
      // },
      getCategory() {
        axios.post(this.api_url.url+this.api_url.api+'/category/get/all',{}).then(result => {
          this.categorys = result.data
        }).catch(() => {

        })
      },
      productLength() {
        if(localStorage.cart) {
          this.productNumber = JSON.parse(localStorage.cart).length 
        }else {
          this.productNumber = 0
        }
      },
      search() {
        console.log(this.str)
        eventBus.$emit('search', {
          qwe: this.str,
          state: 'search'
          
        },this.str='')
      }
    },
    computed: {

    },
    
}


</script>

<style scoped lang="scss">
  .shop {
    height: 100%;
    .md-app {
      // max-height: 400px;
      border: 1px solid rgba(#000, .12);
    }
    .md-primary {
      border-bottom: 1px solid #9e9e9e80;
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      color:black;
      .container {
        display: flex;
        width: 100%;
        justify-content: center;
        span {
          padding-right: 22px;
          font-family: cursive;
          font-weight: bold;
          color: #1d1b1b;
        }
        .content {
          display: flex;
          .menu {
            display: none;
          }
          .wrapper {
            .searchMobil {
              display: none;
            }
            .conteinerContent {
              display: flex;
              .serch {
                padding: 4px;
                outline: none;
                border: 1px solid #4ac144;
                border-radius: 5px 0px 0px 5px;
              }
              .btnSearch {
                padding: 7px 20px;
                background: #4ac144;
                font-family: sans-serif;
                border-radius: 0px 5px 5px 0px;
                cursor: pointer;
                a {
                  color: white;
                }
                &:hover a {
                  color: black;
                }
              }
            }
          }
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
        }
        .trolley {
          background-color: #4ac144;
          display: flex;
          padding: 5px;
          border-radius: 5px;
          border: 1px solid #4ac144;
          margin-left: 10px;
          color: white;
          cursor: pointer;
          &:hover {
            color: black;
          }
          img {
            padding-right: 4px;
            max-width: 26px;
          }
          .total {
            background-color: #CDDC39;
            text-align: center;
            border-radius: 40px;
            position: absolute;
            top: 0px; 
            margin-left: 62px;
            width: 20px;
          }
        }
        
      }
    }
    .md-app {
      height: 100%;
      .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
        height: 100%;
        .btnNavigation {
          background: #4ac144;
          padding: 5px;
          border-radius: 7px;
          text-align: center;
          color:white;
          cursor: pointer;
          a{
            color:black;
          }
        }
      }
      .md-content {
        background: #9e9e9e52;
      }
    }
    
    @media (max-width:  930px) { 
      .none {
        display: none !important;
      }
      .block {
        position: absolute;
      }
      .container {
        display: flex;
        flex-direction: column;
        padding: 5px;
        span {
          padding-bottom: 10px;
        }
        .content {
          height: 34px;
          display: flex;
          justify-content: center;
          .menu {
            background: #4ac144;
            display: block !important;
            width: 34px;
            border: 1px solid #4ac144;
            border-radius: 5px;
            padding: 6px;
            margin-right: 10px;
            cursor: pointer;
            img {
              width: 21px;
              position: fixed;
            }
          }
          .wrapper {

            .searchMobil {
              background-color: #4ac144;
              padding: 4px;
              border-radius: 5px;
              border: 1px solid #4ac144;
              cursor: pointer;
              display: block !important;
              
            }
            &:hover .searchContainer{
              display: block !important;
              
            }
            .conteinerContent {
              display: flex;
              position: absolute;
              padding: 5px 0px 0px 0px;
              input {
                border: 1.2px solid #4ac144 !important;
                width: 126px;
              }
            }
            // .searchContainer {
            //   display: flex;
            //   margin-top: 3px;
            //   z-index: auto;
            // }
            
            // .btnSearch {
            //   display: block;

            // }

          }
          .phone {
            .popUp {
              margin-left: -11px;
            }
            // .number {
            //   display: none;
            // }
          }
          .trolley {
            .total {
              top: 18px;
            }

          }
          // .serch {
          //   display: none;
          // }

        }

      }
    
    }
  }
</style>
