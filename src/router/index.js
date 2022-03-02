import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All.vue'
import store from '../store'
import swal from 'sweetalert2'

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
          title: '花研院'
        }
      },
      {
        path: 'flower',
        name: 'Flower',
        component: () => import(/* webpackChunkName: "flower" */ '../views/Flower.vue'),
        meta: {
          title: '花研院'
        }
      },
      {
        path: 'flowerProduct/:id',
        name: 'FlowerProduct',
        component: () => import(/* webpackChunkName: "flower" */ '../views/FlowerProduct.vue'),
        meta: {
          title: '花研院'
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
        meta: {
          title: '花研院',
          login: true
        }
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import(/* webpackChunkName: "cart" */ '../views/Checkout.vue'),
        meta: {
          title: '花研院',
          login: true
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "orders" */ '../views/Orders.vue'),
        meta: {
          title: '花研院',
          login: true
        }
      },
      {
        path: 'orderDetails',
        name: 'OrderDetails',
        component: () => import(/* webpackChunkName: "orders" */ '../views/OrderDetails.vue'),
        meta: {
          title: '花研院',
          login: true
        }
      },
      {
        path: 'wedding',
        name: 'Wedding',
        component: () => import(/* webpackChunkName: "wedding" */ '../views/Wedding.vue'),
        meta: {
          title: '花研院'
        }
      },
      {
        path: 'accessories',
        name: 'Accessories',
        component: () => import(/* webpackChunkName: "accessories" */ '../views/Accessories.vue'),
        meta: {
          title: '花研院'
        }
      },
      {
        path: 'like',
        name: 'Like',
        component: () => import(/* webpackChunkName: "share" */ '../views/Like.vue'),
        meta: {
          title: '花研院',
          login: true
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
          title: '花研院'
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
        meta: {
          title: ' 花研院'
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
      },
      {
        path: 'servers',
        name: 'AdminServer',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminServers.vue'),
        meta: {
          login: true,
          admin: true,
          title: '客製化管理-花研院'
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
    swal.fire({
      icon: 'error',
      text: '請先登入'
    })
    next('/login')
  } else if (to.meta.admin && !user.isAdmin && !to.path.includes('admin')) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  document.title = to.meta.title
})
export default router
