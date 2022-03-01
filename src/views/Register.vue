<template>
  <div class="content-all vh-100 d-flex flex-column justify-content-center align-items-center ">
    <div class="w-25 mx-auto mt-5">
    <h1>註冊</h1>
    <b-form @submit.prevent="register"  class="border border-secondary rounded p-4 mt-4">
      <b-form-group  label="信箱" label-for="input-email" :state="state.email" invalid-feedback="請輸入信箱">
        <b-form-input id="input-email"  v-model="form.email" type="email" required  :state="state.email"></b-form-input>
      </b-form-group>

      <b-form-group label="密碼" label-for="input-password" :state="state.password"  invalid-feedback="請輸入密碼">
        <b-form-input id="input-password"  v-model="form.password" type="password" required  :state="state.password"></b-form-input>
      </b-form-group>

      <b-form-group label="姓名" label-for="input-name"  :state="state.name" invalid-feedback="請輸入姓名">
        <b-form-input id="input-name" v-model="form.name" required :state="state.name"></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-center">
        <b-button type="submit" class="text-center w-25 btn-color">送出</b-button>
        <b-button type="reset" class="text-center w-25 ml-3 btn-color">重置</b-button>
      </div>
    </b-form>
    </div>
  </div>
</template>

<script>
import validator from 'validator'

export default {
  data () {
    return {
      form: {
        password: '',
        email: '',
        name: ''
        // date: ''
      }
      // formatted: '',
      // selected: ''
    }
  },
  computed: {
    state () {
      return {
        password: this.form.password.length === 0 ? null : this.form.password.length >= 4 && this.form.password.length <= 10,
        email: this.form.email.length === 0 ? null : validator.isEmail(this.form.email),
        name: this.form.name.length === 0 ? null : this.form.name.length >= 3
      }
    }
  },
  methods: {
    // onContext (ctx) {
    //   this.formatted = ctx.selectedFormatted
    //   this.selected = ctx.selectedYMD
    // },
    async register () {
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>
