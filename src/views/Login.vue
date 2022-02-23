<template>
  <div class="content vh-100 d-flex flex-column justify-content-center align-items-center ">
    <div class="w-25 mx-auto mt-5">
      <h1>登入</h1>
      <b-form @submit.prevent="login"  class="border border-secondary rounded p-4 mt-4 d-flex flex-column justify-content-center">
        <b-form-group  label="信箱" label-for="input-email" :state="state.email" invalid-feedback="請輸入信箱">
          <b-form-input id="input-email"  v-model="form.email" type="email" required  :state="state.email"></b-form-input>
        </b-form-group>

        <b-form-group label="密碼" label-for="input-password" :state="state.password"  invalid-feedback="請輸入密碼">
          <b-form-input id="input-password"  v-model="form.password" type="password" required  :state="state.password"></b-form-input>
        </b-form-group>

        <b-button type="submit" class="w-25">登入</b-button>
        <b-button to="/Register" class="w-25 register">建立帳號</b-button>
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
        email: '',
        password: ''
      }
    }
  },
  computed: {
    state () {
      return {
        email: this.form.email.length === 0 ? null : validator.isEmail(this.form.email),
        password: this.form.password.length === 0 ? null : this.form.password.length >= 4 && this.form.password.length <= 10
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/login', this.form)
    }
  }
}
</script>
