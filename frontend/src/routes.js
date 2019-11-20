import Router from 'vue-router'
import Vue from 'vue'
import marca from './components/shop/pages/marca.vue'
import model from './components/shop/pages/model.vue'
import cart from './components/shop/pages/cart.vue'



import shop from '@/components/shop/shop'
Vue.use(Router) 

export default new Router({
    routes: [
        {
            path: '',
            navm: 'Shop',
            component: shop,
            children: [
                {
                    path: '/marca',
                    component: marca,
                },
                {
                    path: '/model/:id',
                    component: model
                },
                {
                    path: '/cart',
                    component: cart
                }
               
            ]
        }
    ]    
})