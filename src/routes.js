import Router from 'vue-router'
import Vue from 'vue'
import marca from './components/shop/pages/marca.vue'
import model from './components/shop/pages/model.vue'
import cart from './components/shop/pages/cart/cart.vue'
import category from './components/shop/pages/category.vue'
import catalog from './components/shop/pages/catalog/catalog.vue'
import checkout from './components/shop/pages/checkout/checkout.vue'
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
                    path: '/model/:id/:model',
                    component: category
                },
                {
                    path: '/model/:id/:model/:catalog',
                    component: catalog
                },
                {
                    path: '/cart',
                    component: cart
                },
                {
                    path: '/checkout',
                    component: checkout
                },
                {
                    path: '/catalog/search',
                    component: catalog
                }
               
            ]
        }
    ]    
})