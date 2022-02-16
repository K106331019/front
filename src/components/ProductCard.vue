<template>
<div>
<router-link :to="'/flowerProduct/' + product._id">
  <b-card :img-src="product.image" img-top >
  <b-card-body class="vh-25">
    <b-card-title> {{ product.name }} </b-card-title>
    <b-card-sub-title> {{ '$' + product.price }}</b-card-sub-title>
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
