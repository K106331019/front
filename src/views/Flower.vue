<template>
<div class="flower-content">
  <h1>Flower</h1>
  <b-row class="vh-100">
    <b-col v-for="product in products"  :key='product._id' >
      <ProductCard :product="product"></ProductCard>
    </b-col>
  </b-row>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
