import Vue from 'vue'
import Router from 'vue-router'
// 引入登录页面
import Login from '@/components/account/login/Login'
// 引入商城其他组件页面
import Shop from '@/components/shop/Shop'
import GoodsList from '@/components/shop/goods/List'
import GoodsDetail from '@/components/shop/goods/Detail'
import Shopcart from '@/components/shop/shopcart/Shopcart'
import OrderSite from '@/components/shop/order/Site'
import OrderPay from '@/components/shop/order/Pay'
import OrderComplete from '@/components/shop/order/Complete'

Vue.use(Router)

// 分开定义组件路由
let goods = [
  // 商品列表和商品详情的路由配置
  { name: 'GoodsList', path: 'goods/list', component: 'GoodsList'},
  { name: 'GoodsDetail', path: 'goods/detail/:id', component: 'GoodsDetail'}
];
let shopcart = [
  // 购物车的路由配置
  { name: 'shopcart', path: 'shopcart', component: 'Shopcart'}
];
let order = [
  { name: 'OrderSite', path: 'order/Site/:ids', component: 'OrderSite' },
  { name: 'OrderPay', path: 'order/Pay/:id', component: 'OrderPay' },
  { name: 'OrderComplete', path: 'goods/Detail', component: 'OrderComplete' }
]


export default new Router({
  routes: [
    // 这是登录页面配置的路由
    {name:'login',path:'/login',component:'Login'},
    // 这是商城页面配置的路由
    { name: 'shop', path: '/', component: 'Shop',children:[...goods, ...shopcart, ...order]}
  ]
})
