<template>
  <div class="content-all">
    <b-row class="w-75 mx-auto mb-2">
      <b-col lg="4" >
        <p class="cart-list mt-sm-5 mt-lg-0">
        01
        <span>購物車確認</span>
        </p>
        <div class="list-under d-none d-md-none d-lg-block"></div>
      </b-col>
      <b-col lg="4" class="d-none d-md-none d-lg-block">
        <p class="cart-list">
        02
        <span>購買與付款方式</span>
        </p>
      </b-col>
      <b-col lg="4" class="d-none d-md-none d-lg-block">
        <p class="cart-list">
        03
        <span>完成訂單</span>
        </p>
      </b-col>
    </b-row>
    <b-row class="w-75 mx-auto">
      <b-col>
        <b-table :items="products" :fields="fields" :tbody-tr-class="rowClass" class="w-100 mx-auto text-center cart-table">
          <template #cell(image)="data">
            <img v-if="data.item.product.image" :src="data.item.product.image">
          </template>
          <template #cell(name)="data">
            {{ data.item.product.name }}
          </template>
          <template #cell(quantity)="data">
            <b-form-select id="sb-locales" v-model='data.item.quantity' :options="options" @input="updateCart(data.index ,data.item.quantity )" class="w-50"></b-form-select>
          </template>
          <template #cell(price)="data">
            $ {{ data.item.product.price }}
          </template>
          <template #cell(love)>
            <b-icon icon="suit-heart"></b-icon>
          </template>
          <template #cell(action)="data">
            <b-button @click="updateCart(data.index ,0)" class="bg-transparent del">
              <b-icon icon="trash"></b-icon>
            </b-button>
          </template>
        </b-table>
        <p v-if="user.cart === 0" class="text-center">購物車是空的</p>
      </b-col>
    </b-row>
    <b-row class="m-0 w-75 mx-auto">
      <b-col lg="12" class="w-50 d-flex justify-content-end">
        <p>共 {{ user.cart }} 件 / </p>
        <p class="ml-2">商品總金額: </p>
        <p class="ml-2 text-danger fw-bold">NT${{ total }}</p>
      </b-col>
    </b-row>
    <b-row class="w-75 mx-auto">
      <b-col class="text-right">
        <b-button to="/flower" class="w-25 btn-color">繼續購物</b-button>
      </b-col>
      <b-col class="text-left">
        <b-button :disabled="products.length === 0" class="w-25 btn-color" to="/checkout">下一步</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      fields: [
        { key: 'image', label: '購物清單' },
        { key: 'name', label: '' },
        { key: 'quantity', label: '數量' },
        { key: 'price', label: '小計' },
        { key: 'love', label: '收藏' },
        { key: 'action', label: '刪除' }
      ],
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  },
  methods: {
    async updateCart (index, quantity) {
      try {
        await this.api.patch('/users/me/cart',
          { product: this.products[index].product._id, quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
        if (quantity === 0) {
          this.products.splice(index, 1)
          this.$store.commit('user/updateCart', this.user.cart - 1)
        }
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改購物車失敗'
        })
      }
    },
    rowClass (item, type) {
      if (!item || type !== 'row') return
      return !item.product.sell ? 'bg-danger' : ''
    }
  },
  computed: {
    total () {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>
