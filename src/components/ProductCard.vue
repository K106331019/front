<template>
<div>
  <router-link :to="'/flowerProduct/' + product._id">
    <b-card :img-src="product.image" img-top style="box-shadow:none;">
    <b-card-body>
      <b-card-title class="text-dark text-center"> {{ product.name }} </b-card-title>
      <b-card-sub-title class="text-center"> {{ '$' + product.price }}</b-card-sub-title>
    </b-card-body>
    </b-card>
  </router-link>
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
