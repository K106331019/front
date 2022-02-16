<template>
  <div class="w-75">
    <b-table :items="products" :fields="fields" :tbody-tr-class="rowClass">
      <template #cell(image)="data">
        <img v-if="data.item.product.image" :src="data.item.product.image" style="height:50px">
      </template>
      <template #cell(name)="data">
        {{ data.item.product.name }}
      </template>
      <template #cell(quantity)="data">
        <b-form-select id="sb-locales" v-model='data.item.quantity' :options="options" @input="updateCart(data.index ,data.item.quantity )"></b-form-select>
      </template>
      <template #cell(price)="data">
        $ {{ data.item.product.price }}
      </template>
      <template #cell(action)="data">
        <b-button @click="updateCart(data.index ,0)">
          <b-icon icon="trash"></b-icon>
        </b-button>
      </template>
    </b-table>
    <p>總金額 {{ total }}</p>
    <b-button @click="checkout" :disabled="products.length === 0">下一步</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'name', label: '名稱' },
        { key: 'quantity', label: '數量' },
        { key: 'price', label: '小計' },
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
    async checkout () {
      try {
        await this.api.post('/orders', {}, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$router.push('/orders')
        this.$store.commit('user/updateCart', 0)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
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
