<template>
<div class="content-all">
  <b-row class="w-100 mt-5 mt-sm-5 pt-sm-5">
    <b-col class="mx-auto d-flex justify-content-center" lg="3">
      <b-list-group class="w-50 d-sm-flex flex-sm-row flex-lg-column">
        <b-list-group-item button @click="filter=''" class="menu">全部</b-list-group-item>
        <b-list-group-item button @click="filter='耳環'" class="menu">耳環</b-list-group-item>
        <b-list-group-item button @click="filter='手鍊'" class="menu">手鍊</b-list-group-item>
    </b-list-group>
    </b-col>
    <b-col class="d-flex pl-4" lg="9" >
      <b-row class="w-100">
        <b-col sm="12" lg="8">
          <img src="../assets/image/accessories.jpg" width="900">
        </b-col>
        <b-col sm="12" lg="4" class="my-lg-auto mt-sm-5">
            <h1 class="text-center flower-title">Accessories</h1>
            <p class="text-center">花，時間陪伴與守護著你</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  <b-row class="w-75 mt-5 card-content">
    <b-col v-for="product in flowerItem"  :key='product._id' sm="12" lg="4">
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
      products: [],
      flower: [],
      filter: ''
    }
  },
  computed: {
    flowerItem () {
      return this.flower.filter(item => {
        if (this.filter === '') return true
        return item.category.small === this.filter
      })
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
      console.log(this.products[0].category)
      const flower = this.products.filter(function (item) {
        return item.category.big === '乾燥花飾品'
      })
      this.flower = flower
      // console.log(flower)
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
