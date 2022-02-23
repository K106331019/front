<template>
<div>
<router-link :to="'/flowerProduct/' + product._id">
  <b-card :img-src="product.image" img-top style="max-width: 30rem;  box-shadow:none;">
  <b-card-body>
    <b-card-title class="text-dark text-center"> {{ product.name }} </b-card-title>
    <b-card-sub-title class="text-center"> {{ '$' + product.price }}</b-card-sub-title>
  </b-card-body>
  </b-card>
</router-link>
<!-- <b-list-group class="bg-dark">
  <b-list-group-item>
    <img :src="product.image" class="product">
  </b-list-group-item>
  <b-list-group-item class="text-center">
    <span>{{ product.name }} </span>
  </b-list-group-item>
  <b-list-group-item class="text-center">
    <span> {{ '$' + product.price }} </span>
  </b-list-group-item>
</b-list-group> -->

</div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
