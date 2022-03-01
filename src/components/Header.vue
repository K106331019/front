<template>
<div id="header">
  <b-navbar toggleable="lg" class= "shadow w-100 mt-5">
      <b-navbar-brand href="/">
        <b-img src="../assets/image/logo.png" class="flower"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav class="nav-list ml-auto">
          <b-nav-item to="/about" class="mx-3 text-dark">關於我們</b-nav-item>
          <b-nav-item to="/flower" class="mx-3 text-dark">經典花禮</b-nav-item>
          <b-nav-item to="/wedding" class="mx-3 text-dark">婚禮系列</b-nav-item>
          <b-nav-item to="/Accessories" class="mx-3 text-dark">花藝飾品</b-nav-item>
          <b-nav-item v-if="!user.isLogin" to="/Login">
            <b-icon icon="person-fill" variant="dark" font-scale="1"></b-icon>
          </b-nav-item>
          <b-nav-item to="/cart" class="mx-1 text-dark">
            <b-icon icon="cart4"  font-scale="1" variant="dark"></b-icon>
          </b-nav-item>
          <b-nav-item to="/orderDetails" v-if="user.isLogin" class="mx-1">
              <b-icon icon="clipboard-check" variant="dark"></b-icon>
          </b-nav-item>
          <b-nav-item to="/like" v-if="user.isLogin" class="mx-1">
            <b-icon icon="heart" variant="dark" font-scale="1"></b-icon>
          </b-nav-item>
          <b-nav-item to="/admin/products" v-if="user.isAdmin" class="mx-1">
            <b-icon icon="gear" variant="dark"></b-icon>
          </b-nav-item>
          <b-nav-item v-if="user.isLogin" class="mx-1">
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
