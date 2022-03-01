<template>
<div class="content-all">
  <h1 class="text-center">商品收藏</h1>
  <div class="like-back">
    <b-row class="w-100 vh-100 mt-5 card-content mx-auto">
      <b-col class="w-100 d-flex flex-wrap mx-auto">
          <b-card  v-for="like in userLike.likes" :key="like._id"  :img-src="like.products ? like.products.image : ''" img-top  style="box-shadow:none;" class="m-2 mt-4">
            <!-- <b-card-body>
              <b-card-title class="text-dark text-center"> {{ like.products.name }} </b-card-title>
              <b-card-sub-title class="text-center"> {{ '$' + like.products.price }}</b-card-sub-title>
              </b-card-body> -->
          </b-card>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      userLike: {}
    }
  },
  async created () {
    try {
      if (this.user.isLogin) {
        const { data } = await this.api.get('/users/like/list/' + this.user._id, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.userLike = data.result
        console.log(this.userLike)
      }
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: error.response.data.message
      })
    }
  }
}

</script>
