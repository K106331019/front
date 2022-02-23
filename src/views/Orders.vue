<template>
<div class="content-all">
  <b-row class="w-75 mx-auto mb-2">
      <b-col lg="4">
        <p class="cart-list">
        01
        <span>購物車確認</span>
        </p>
      </b-col>
      <b-col lg="4">
        <p class="cart-list">
        02
        <span>訂單付款方式</span>
        </p>
      </b-col>
      <b-col lg="4">
        <p class="cart-list">
        03
        <span>完成訂單</span>
        </p>
        <div class="list-under"></div>
      </b-col>
  </b-row>
  <div class="w-50 vh-50 bg-light mx-auto mt-5 p-4">
    <b-row>
      <b-col lg="12" class="d-flex">
        <p>訂單編號:</p>
        <p class="ml-2">{{ orders._id }}</p>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <b-table  :items="orders.products"  :fields="product" class="table table-bordered finish-table">
          <template #cell(products)="data">
            {{ data.item.product.name }}
          </template>
          <template #cell(price)="data">
            NT$ {{ data.item.product.price }}
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card-group deck>
          <b-card header="訂單明細">
            <b-list-group horizontal >
              <b-list-group-item href="#" class="w-25 bg-transparent border-none">日期</b-list-group-item>
              <b-list-group-item href="#" class="w-25 bg-transparent" >訂購人</b-list-group-item>
              <b-list-group-item href="#" class="w-25 bg-transparent">付款方式</b-list-group-item>
              <b-list-group-item href="#" class="w-25 bg-transparent">總金額</b-list-group-item>
            </b-list-group>
            <b-list-group horizontal>
              <b-list-group-item href="#" class="w-25 bg-transparent">{{ new Date(orders.date).toLocaleDateString('zh-tw') }}</b-list-group-item>
              <b-list-group-item href="#" class="w-25 bg-transparent">{{ orders.name }}</b-list-group-item>
              <b-list-group-item href="#" class="w-25 bg-transparent">{{ orders.pay }}</b-list-group-item>
              <b-list-group-item href="#" class="w-25 bg-transparent">{{ total }}</b-list-group-item>
            </b-list-group>

          </b-card>

        </b-card-group>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col class="text-right">
        <b-button class="btn-color text-right" to="/">繼續購物</b-button>
      </b-col>
      <b-col>
        <b-button class="btn-color" to="/orderDetails">訂單查詢</b-button>
      </b-col>
    </b-row>
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      total: 0,
      product: [
        { key: 'products', label: '商品' },
        { key: 'quantity', label: '數量' },
        { key: 'price', label: '小計' }
      ],
      detail: [
        { key: 'date', label: '日期' },
        { key: 'name', label: '訂購人' },
        { key: 'pay', label: '付款方式' },
        { label: '總金額' }
      ]
      // items: [
      //   { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
      //   { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
      //   { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },
      //   { name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 }
      // ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
      this.total = data.result.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)
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
