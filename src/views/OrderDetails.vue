<template>
<div class="content-all">
  <h3 class="text-center">歷史訂單</h3>
  <b-table :items="orders" :fields="fields" class="w-75 mx-auto border detail-table mt-5" >
    <template #cell(date)="data">
      {{ new Date(data.item.date).toLocaleDateString('zh-tw') }}
    </template>
    <template #cell(products)="data">
      <ul>
        <li v-for="product in data.item.products" :key="product._id" style="list-style-type:none">
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
        { key: '_id', label: '訂單編號' },
        { key: 'date', label: '日期' },
        { key: 'products', label: '商品' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/details', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
      // console.log(this.orders)
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
