<template>
<div class="mt-5">
<b-table :items="orders" :fields="fields" head-variant="light">
    <template #cell(user)="data">
      {{ data.item.user.email }}
    </template>
    <template #cell(date)="data">
      {{ new Date(data.item.date).toLocaleString('zh-tw') }}
    </template>
    <template #cell(products)="data">
      <ul>
        <li v-for="product in data.item.products" :key="product._id" style="list-style: none">
          {{ product.product.name}} X {{ product.quantity }}
        </li>
      </ul>
    </template>
  </b-table>
</div>
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      fields: [
        { key: '_id', label: '單號' },
        { key: 'user', label: '使用者' },
        { key: 'date', label: '日期' },
        { key: 'products', label: '商品' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
      console.log(this.orders)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
