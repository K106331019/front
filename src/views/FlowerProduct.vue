<template>
<div class="content-all d-flex flex-sm-column justify-content-sm-center align-items-sm-center pb-5">
  <b-row class="w-100 p-5">
    <b-col sm="12" lg="6" class="d-flex justify-content-center">
      <img :src="image" width="600">
    </b-col>
    <b-col sm="12" lg="6" class="d-flex flex-column p-5 w-100">
      <b-breadcrumb class="bg-transparent">
        <b-breadcrumb-item href="/" class="path-text">首頁</b-breadcrumb-item>
        <b-breadcrumb-item href="#/flower" class="path-text">{{this.category.big}}</b-breadcrumb-item>
        <b-breadcrumb-item href="#/flower" class="path-text">{{this.category.small}}</b-breadcrumb-item>
        <b-breadcrumb-item active class="text-dark">{{this.name}}</b-breadcrumb-item>
      </b-breadcrumb>
      <h1 class="product-name">{{name}}</h1>
      <span class="mt-5 mb-5" style="white-space:pre;">{{ description }}</span>
      <h4 class="mt-5">NT${{ price }}</h4>
      <b-form-spinbutton id="demo-sb" min="0" max="100" v-model.number='quantity' class="w-50 mt-4"></b-form-spinbutton>
      <b-button @click="addCart" class="w-50 mt-4 btn-color">加入購物車</b-button>
      <div class="d-flex">
        <b-button class="w-25 bg-transparent text-dark border-none"  @click="likes">
          <b-icon icon="heart"></b-icon>
        </b-button>
        <p>加入追蹤名單</p>
        <p>{{ this.user }}</p>
      </div>
    </b-col>
  </b-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      quantity: 0,
      category: { big: '', small: '' },
      like: []
    }
  },
  methods: {
    async addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    },
    async likes (id) {
      try {
        if (this.user.isLogin) {
          await this.api.patch('/users/like/' + this.user._id, { _id: this.$route.params.id }, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.category = data.result.category
      document.title = `${this.name}`
      console.log(this.user._id)
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
