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
        <div class="list-under"></div>
      </b-col>
      <b-col lg="4">
        <p class="cart-list">
        03
        <span>完成訂單</span>
        </p>
      </b-col>
    </b-row>
    <b-row class="m-0">
      <b-col lg="6" class="p-5">
        <h2 class="text-center">訂單資訊</h2>
        <b-form v-if="show" class="w-75 mx-auto mt-3">
          <b-form-group id="input-group-name" label="姓名" label-for="input-name">
            <b-form-input id="input-name" v-model="name" type="text" placeholder="請輸入姓名" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-phone" label="連絡電話" label-for="input-phone">
            <b-form-input id="input-phone" v-model="phone"  type="text" placeholder="請輸入電話" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-adress" label="收件住址" label-for="input-address">
            <b-form-input id="input-address" v-model="address" type="text" placeholder="請輸入地址" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-email" label="電子信箱" label-for="input-email">
            <b-form-input id="input-email" v-model="email" type="email" placeholder="請輸入地址" required></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="input-group-email" label="付款方式" label-for="input-message">
          <b-form-select id="message" v-model="form.pay" :options="pay" required ></b-form-select>
          </b-form-group> -->

          <b-form-group id="input-group-email" label="備註" label-for="input-message">
          <b-form-textarea id="message" v-model="message" placeholder="訂單備註" rows="5" max-rows="10"></b-form-textarea>
          </b-form-group>
        </b-form>
      </b-col>
      <b-col lg="6" class="p-5 d-flex flex-column justify-content-center align-items-center">
        <h2 class="text-center">訂單確認</h2>
        <div class="w-75 h-100 bg-light mx-auto mt-2 p-3">
            <b-row class="d-flex justify-content-center p-2">
              <b-col>
                <h5>商品</h5>
              </b-col>
              <b-col>
                <h5>小計</h5>
              </b-col>
            </b-row>
            <div class="check-line"></div>
            <b-row class="mt-3">
              <b-col>
                <ul>
                  <li v-for="product in products" :key="product._id" style="list-style-type:none">
                      {{ product.product.name}} X {{ product.quantity }}
                  </li>
                </ul>
              </b-col>
              <b-col>
                <ul>
                  <li v-for="product in products" :key="product._id" style="list-style-type:none">
                      NT$ {{ product.product.price }}
                  </li>
                </ul>
              </b-col>
            </b-row>
            <div class="check-line"></div>
            <b-row class="mt-3 d-flex justify-content-center align-items-center p-5">
              <b-col cols="6">
                <p class="m-auto">付款方式</p>
              </b-col>
              <b-col cols="6">
                <b-form-group>
                  <b-form-radio v-model="pay" name="some-radios" value="貨到付款">貨到付款</b-form-radio>
                  <b-form-radio v-model="pay" name="some-radios" value="信用卡">信用卡</b-form-radio>
                  <b-form-radio v-model="pay" name="some-radios" value="ATM轉帳">ATM轉帳</b-form-radio>
                  <b-form-radio v-model="pay" name="some-radios" value="Line Pay">Line Pay</b-form-radio>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="check-line"></div>
            <b-row class="mt-3 d-flex justify-content-center align-items-center p-5">
              <b-col>
                <p>總計</p>
              </b-col>
              <b-col>
                <p>NT$ {{ total }}</p>
              </b-col>
            </b-row>
        </div>
        <b-button class="w-50 btn-color text-center mt-5" @click="checkout">送出訂單</b-button>
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
        { key: 'name', label: '商品' },
        { key: 'price', label: '小計' }
      ],
      name: '',
      phone: '',
      address: '',
      email: '',
      message: '',
      pay: '',
      show: true
    }
  },
  computed: {
    total () {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)
    }
  },
  methods: {
    async checkout () {
      try {
        await this.api.post('/orders', { name: this.name, phone: this.phone, address: this.address, message: this.message, pay: this.pay }, {
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
      console.log(this.products)
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
