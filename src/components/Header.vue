<template>
<div id="header">
  <div class="header-top"></div>
  <b-navbar toggleable="lg" class= "shadow w-100 mt-5">
      <b-navbar-brand href="/">
        <b-img src="../../image/logo.png" class="flower"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav class="nav-list ml-auto">
          <b-nav-item to="/about" class="mx-3 text-dark">關於我們</b-nav-item>
          <b-nav-item to="/flower" class="mx-3 text-dark">經典花禮</b-nav-item>
          <b-nav-item to="/wedding" class="mx-3 text-dark">婚禮系列</b-nav-item>
          <b-nav-item to="/Accessories" class="mx-3 text-dark">花藝飾品</b-nav-item>
          <!-- <div @mouseover="onOver('dropdown1')" @mouseleave="onLeave('dropdown1')">
                <b-dropdown id="dropdown-1" text="經典花禮" ref="dropdown1" class="m-md-2" no-caret to="/flower">
                    <b-dropdown-item class="my-3" to="/flower">精選花束</b-dropdown-item>
                    <b-dropdown-item class="my-3">精選花圈</b-dropdown-item>
                    <b-dropdown-item class="my-3">乾燥花盆栽</b-dropdown-item>
                    <b-dropdown-item class="my-3">玻璃花盅</b-dropdown-item>
                </b-dropdown>
          </div> -->
          <!-- <div @mouseover="onOver('dropdown2')" @mouseleave="onLeave('dropdown2')">
            <b-dropdown id="dropdown-2" text="婚禮系列" ref="dropdown2" class="m-md-2" no-caret>
                <b-dropdown-item class="my-3">新娘捧花</b-dropdown-item>
                <b-dropdown-item class="my-3">婚禮胸花</b-dropdown-item>
                <b-dropdown-item class="my-3">手腕花</b-dropdown-item>
                <b-dropdown-item class="my-3">婚禮佈置</b-dropdown-item>
            </b-dropdown>
          </div> -->
          <!-- <div @mouseover="onOver('dropdown3')" @mouseleave="onLeave('dropdown3')">
            <b-dropdown id="dropdown-3" text="花藝飾品" ref="dropdown3" class="m-md-2" no-caret>
                <b-dropdown-item class="my-3">耳環</b-dropdown-item>
                <b-dropdown-item class="my-3">手鍊</b-dropdown-item>
            </b-dropdown>
          </div> -->
          <!-- <b-nav-item to="/cart" class="mx-3">購物車
            <b-badge>{{ user.cart }}</b-badge>
          </b-nav-item>
          <b-nav-item to="/orders" class="mx-3">訂單</b-nav-item> -->
            <b-nav-item v-if="!user.isLogin" to="/Login">
              <b-icon icon="person-fill" variant="dark"></b-icon>
            </b-nav-item>
              <b-nav-item to="/cart">
                <b-icon icon="bag" variant="dark" font-scale="1" class="position-relative">
                </b-icon>
                <b-badge class="cart-number" variant="dark">{{ user.cart }}</b-badge>
              </b-nav-item>
            <b-nav-item to="/admin/products" v-if="user.isAdmin">
              <b-icon icon="gear" variant="dark"></b-icon>
            </b-nav-item>
            <b-nav-item to="/like" v-if="user.isLogin">
              <b-icon icon="heart" variant="dark"></b-icon>
            </b-nav-item>
            <b-nav-item v-if="user.isLogin">
              <b-icon icon="box-arrow-right" variant="dark" @click="logout"></b-icon>
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
