<template>
<div class="admin-nav b-col d-flex justify-content-center align-items-center">
  <b-nav pills class=" d-flex justify-content-center align-items-center  w-100">
    <b-nav-item class="mr-auto">
    <b-img src="../../image/logo.png"></b-img>
    </b-nav-item>
    <b-nav-item to="/admin/members" exact exact-active-class="active">會員管理</b-nav-item>
    <b-nav-item to="/admin/products" exact exact-active-class="active">商品管理</b-nav-item>
    <b-nav-item to="/admin/orders" exact exact-active-class="active">訂單管理</b-nav-item>
    <b-nav-item to="/" class="ml-auto">
      <b-icon icon="house"></b-icon>
    </b-nav-item>
  </b-nav>
</div>
</template>
