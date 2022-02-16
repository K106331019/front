<template>
<div id="header">
  <b-navbar toggleable="lg" class= "mt-5 shadow w-100">
      <b-navbar-brand href="/">
        <b-img src="../../image/logo.png" class="flower"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="bg-black">
        <b-navbar-nav class="nav-list ml-auto d-flex justify-content-center align-items-center">
          <b-nav-item to="/about" class="mx-3 text-dark">About</b-nav-item>
          <div @mouseover="onOver('dropdown1')" @mouseleave="onLeave('dropdown1')">
            <b-dropdown id="dropdown-1" text="Flower" ref="dropdown1" class="m-md-2" no-caret>
                <b-dropdown-item class="my-3">精選花束</b-dropdown-item>
                <b-dropdown-item class="my-3">精選花圈</b-dropdown-item>
                <b-dropdown-item class="my-3">乾燥花盆栽</b-dropdown-item>
                <b-dropdown-item class="my-3">玻璃花盅</b-dropdown-item>
            </b-dropdown>
          </div>
          <div @mouseover="onOver('dropdown2')" @mouseleave="onLeave('dropdown2')">
            <b-dropdown id="dropdown-2" text="Wedding" ref="dropdown2" class="m-md-2" no-caret>
                <b-dropdown-item class="my-3">新娘捧花</b-dropdown-item>
                <b-dropdown-item class="my-3">婚禮胸花</b-dropdown-item>
                <b-dropdown-item class="my-3">手腕花</b-dropdown-item>
                <b-dropdown-item class="my-3">婚禮佈置</b-dropdown-item>
            </b-dropdown>
          </div>
          <div @mouseover="onOver('dropdown3')" @mouseleave="onLeave('dropdown3')">
            <b-dropdown id="dropdown-3" text="Accessories" ref="dropdown3" class="m-md-2" no-caret>
                <b-dropdown-item class="my-3">耳環</b-dropdown-item>
                <b-dropdown-item class="my-3">手鍊</b-dropdown-item>
            </b-dropdown>
          </div>
          <!-- <b-nav-item to="/Wedding" class="mx-3 ">Wedding</b-nav-item>
          <b-nav-item to="/Accessories" class="mx-3 ">Accessories</b-nav-item> -->
          <!-- <b-nav-item to="/cart" class="mx-3">購物車
            <b-badge>{{ user.cart }}</b-badge>
          </b-nav-item>
          <b-nav-item to="/orders" class="mx-3">訂單</b-nav-item> -->
            <b-nav-item v-if="!user.isLogin" to="/Login">
              <b-icon icon="person-fill" variant="dark"></b-icon>
            </b-nav-item>
            <b-nav-item  v-b-toggle.sidebar-right>
                <b-icon icon="cart4" variant="dark" font-scale="1"></b-icon>
              <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
                <div class="px-3 py-2">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egesas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
                </div>
              </b-sidebar>
            </b-nav-item>
            <b-nav-item to="/admin" v-if="user.isAdmin">
              <b-icon icon="gear" variant="dark"></b-icon>
            </b-nav-item>
            <b-nav-item v-if="user.isLogin">
              <b-icon icon="box-arrow-in-right" variant="dark" @click="logout"></b-icon>
            </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      placements: 'bottom'
    }
  },
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    },
    onOver (element) {
      this.$refs[element].visible = true
    },
    onLeave (element) {
      this.$refs[element].visible = false
    }
  }
}

</script>
