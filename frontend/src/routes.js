import Router from 'vue-router'
import Vue from 'vue'

import shop from '@/components/shop/shop'
Vue.use(Router) 

export default new Router({
    routes: [
        {
            path: '',
            navm: 'Shop',
            component: shop
        }
    ]    
})