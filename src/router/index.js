import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    component: All,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
          title: '花研院'
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "story" */ '../views/About.vue'),
        meta: {
          title: 'About 花研院'
        }
      },
      {
        path: 'flower',
        name: 'Flower',
        component: () => import(/* webpackChunkName: "flower" */ '../views/Flower.vue'),
        meta: {
          title: 'Flower 花研院'
        }
      },
      {
        path: 'flowerProduct/:id',
        name: 'FlowerProduct',
        component: () => import(/* webpackChunkName: "flower" */ '../views/FlowerProduct.vue'),
        meta: {
          title: 'FlowerProduct 花研院'
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
        meta: {
          title: 'Cart 花研院',
          login: true
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "orders" */ '../views/Orders.vue'),
        meta: {
          title: 'order 花研院',
          login: true
        }
      },
      {
        path: 'wedding',
        name: 'Wedding',
        component: () => import(/* webpackChunkName: "wedding" */ '../views/Wedding.vue'),
        meta: {
          title: 'Wedding 花研院'
        }
      },
      {
        path: 'accessories',
        name: 'Accessories',
        component: () => import(/* webpackChunkName: "accessories" */ '../views/Accessories.vue'),
        meta: {
          title: 'Accessories 花研院'
        }
      },
      {
        path: 'share',
        name: 'Share',
        component: () => import(/* webpackChunkName: "share" */ '../views/Share.vue'),
        meta: {
          title: 'Share 花研院'
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
          title: 'Login 花研院'
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
        meta: {
          title: 'Register 花研院'
        }
      }

    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      title: '後臺管理'
    },
    children: [
      {
        path: 'members',
        name: 'AdminMembers',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminMembers.vue'),
        meta: {
          login: true,
          admin: true,
          title: '會員管理-花研院'
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminProducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: '商品管理-花研院'
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '訂單管理-花研院'
        }
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  if (to.meta.login && !user.isLogin && !to.path.includes('admin')) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin && !to.path.includes('admin')) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
