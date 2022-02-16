<template>
  <div class="content vh-100 d-flex flex-column justify-content-center align-items-center ">
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

      <!-- <label for="form-date">生日</label>
      <div class="row">
        <div class="col-6">
          <b-input-group class="mb-3">
            <b-form-input id="form-date" v-model="date" type="text" placeholder="YYYY-MM-DD" autocomplete="off"></b-form-input>
            <b-input-group-append>
              <b-form-datepicker v-model="date" button-only right locale="en-US" @context="onContext"></b-form-datepicker>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div class="col-6">
        <select v-model="selected">
          <option value="man">男</option>
          <option value="female">女</option>
        </select>
        </div>
      </div> -->

      <b-button type="submit">送出</b-button>
      <b-button type="reset" >重置</b-button>
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
