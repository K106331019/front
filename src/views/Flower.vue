<template>
<div class="content-all">
  <b-row class="w-100 mt-5 mt-sm-5 pt-sm-5">
    <b-col class="mx-auto d-flex justify-content-start  align-items-center bg-info" lg="3">
      <b-list-group class="w-25 d-flex justify-content-center align-items-center flex-lg-column " horizontal>
        <b-list-group-item button @click="filter=''" class="menu">全部</b-list-group-item>
        <b-list-group-item button @click="filter='乾燥花束'" class="menu">花束</b-list-group-item>
        <b-list-group-item button @click="filter='乾燥花盆栽'" class="menu">盆花</b-list-group-item>
        <b-list-group-item button @click="filter='玻璃花盅'" class="menu">花盅</b-list-group-item>
    </b-list-group>
    </b-col>
    <b-col class="d-flex pl-4" lg="9" >
      <b-row class="w-100">
        <b-col sm="12" lg="8">
          <img src="../../image/f4.jpg" width="900">
        </b-col>
        <b-col sm="12" lg="4" class="my-lg-auto mt-sm-5">
            <h1 class="text-center flower-title">Flower</h1>
            <p class="text-center">那份感動，將永遠留存著</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  <b-row class="w-75 mt-5 card-content">
    <b-col v-for="product in flowerItem"  :key='product._id' sm="12" lg="4">
      <ProductCard :product="product"></ProductCard>
    </b-col>
  </b-row>
  <b-row class="m-0">
    <b-col sm="12" lg="6" class="ml-auto">
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
    ></b-pagination>
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
      // console.log(this.products[0].category)
      const flower = this.products.filter(function (item) {
        return item.category.big === '乾燥花'
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
