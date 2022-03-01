<template>
  <div class="admin">
    <img src="../assets/image/logo.png"  class="admin-logo">
    <b-row  class="d-flex  w-100 p-5">
      <b-col class="text-left">
        <h1>後台管理系統</h1>
      </b-col>
      <b-col class="text-right">
        <b-button to="/">
          <b-icon icon="house" font-scale="3"></b-icon>
        </b-button>
      </b-col>
    </b-row>

    <div class="admin-card">
      <b-row class="w-100 mx-auto">
        <b-col lg="12">
          <b-nav tabs fill class="admin-title text-secondary">
            <b-nav-item to="/admin/products"  exact exact-active-class="active">商品管理</b-nav-item>
            <b-nav-item  to="/admin/orders"  exact exact-active-class="active">訂單管理</b-nav-item>
            <b-nav-item to="/admin/servers" exact exact-active-class="active">客製化服務管理</b-nav-item>
          </b-nav>
        </b-col>
        <b-col lg="12">
          <router-view></router-view>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  }
}
</script>
