<template>
<div class="content-all d-flex flex-sm-column justify-content-sm-center align-items-sm-center pb-5">
  <b-row class="w-100 p-5 m-5">
    <b-col sm="12" lg="6" class="d-flex justify-content-center">
      <img :src="image" width="600">
    </b-col>
    <b-col sm="12" lg="6" class="d-flex flex-column  w-100">
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
      <div class="w-50 d-flex justify-content-center align-items-center">
        <b-button class="text-dark btn-love" @click="likes">
          <b-icon v-if="user.likes.filter((p) => { return p.products === $route.params.id }).length" icon="suit-heart-fill" class="mx-auto"></b-icon>
          <b-icon v-else icon="heart" class="mx-auto"></b-icon>
        </b-button>

        <!-- <p v-if="user.likes.filter((p) => { return p.products === $route.params.id }).length">已加入追蹤</p> -->
        <p class="mt-3">加入追蹤名單</p>
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
      category: { big: '', small: '' }
    }
  },
  methods: {
    async addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    },
    async likes (id) {
      try {
        if (this.user.isLogin) {
          const { data } = await this.api.patch('/users/like/' + this.user._id, { _id: this.$route.params.id }, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          if (data.result.isAdd) {
            this.user.likes.push(data.result.newLike)
            console.log(this.user.likes)
          } else {
            const index = this.user.likes.findIndex(l => l.products === this.$route.params.id)
            this.user.likes.splice(index, 1)
            console.log(this.user.likes)
          }
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
