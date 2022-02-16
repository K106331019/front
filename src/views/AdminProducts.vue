<template>
<div id="adminProduct" class="vh-100">
  <div class="d-flex justify-content-center align-items-center h-100">
    <b-button v-b-modal.modal-product  class="addproduct">
      <b-icon icon="plus-circle" font-scale="5"></b-icon>
    </b-button>
    <b-table sticky-header head-variant="light" :items="products" :fields="fields" ref="table">
      <template #cell(image)="data">
        <img v-if="data.item.image" :src="data.item.image" style="height:50px">
      </template>
      <template #cell(sell)="data">
        <b-form-checkbox v-if="data.item.sell"></b-form-checkbox>
      </template>
      <template #cell(category)="data">
        <b-text v-if="data.item.category">{{ data.item.category }}</b-text>
      </template>
      <template #cell(action)="data">
        <b-button @click="editProduct(data.index)">
          <b-icon icon="pencil"></b-icon>
        </b-button>
      </template>
    </b-table>
    <b-modal id="modal-product"  size="xl" centered
      :title="form._id.length > 0 ? '編輯商品' : '新增商品'"
      ok-title='送出'
      ok-variant='warning'
      cancel-title='重置'
      cancel-variant='secondary'
      @ok="submitModal"
      @hidden="resetForm"
      :ok-disabled="modalSubmitting"
      :cancel-disabled="modalSubmitting"
    >
    <b-row>
      <b-col cols="6">
        <b-form-group label='商品名稱' label-for='input-name' description='必填欄位' invalid-feedback='商品名稱必填' :state='state.name'>
          <b-form-input id='input-name' v-model='form.name' type='text' required placeholder='請輸入商品名稱' :state='state.name'>
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label='商品價格' label-for='input-price' description='必填欄位' invalid-feedback='商品價格必須是0元以上' :state='state.price'>
          <b-form-input id='input-price' v-model='form.price' type='number' min='0' required placeholder='請輸入商品價格' :state='state.price'>
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label='商品項目' label-for='input-category1' description='必填欄位' invalid-feedback='商品分類必填'>
          <b-form-select id='input-category1' v-model='form.category.big' placeholder='請輸入商品分類' :options='Object.keys(categories)'>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label='商品分類' label-for='input-category2' description='必填欄位' invalid-feedback='商品分類必填'>
          <b-form-select id='input-category2' v-model='form.category.small' :options='categories[form.category.big]' placeholder='請輸入商品分類'>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group label='商品說明' label-for='input-description' description='必填欄位' invalid-feedback='商品說明必填' :state='state.description'>
          <b-form-textarea id='input-description' v-model='form.description' required rows='3' max-rows='6' placeholder='請輸入商品說明'>
          </b-form-textarea>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <img-inputer accept="image/*" v-model="form.image" theme="light" size="large" bottom-text="點選或拖曳圖片以修改" hover-text="點選或拖曳圖片以修改" placeholder="點選或拖曳圖片以修改" class="w-100 vh-50" :max-size="1024" exceed-size-text="圖片大小不能超過1MB"></img-inputer>
      </b-col>
      <b-col cols="12">
        <b-form-group label="上架">
          <b-form-radio v-model="form.sell" :value="true">上架</b-form-radio>
          <b-form-radio v-model="form.sell" :value="false">下架</b-form-radio>
        </b-form-group>
      </b-col>
    </b-row>
    </b-modal>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'name', label: '名稱' },
        { key: 'price', label: '價格' },
        { key: 'category', label: '分類' },
        { key: 'description', label: '詳密說明' },
        { key: 'sell', label: '使否上架' },
        { key: 'action', label: '編輯' }
      ],
      products: [],
      modalSubmitting: false,
      form: {
        name: '',
        price: null,
        description: '',
        image: null,
        sell: false,
        category: { big: '', small: '' },
        _id: '',
        index: -1
      },
      categories: {
        乾燥花: ['乾燥花束', '乾燥花盆栽', '乾燥花圈', '玻璃花盅'],
        婚禮系列: ['捧花', '胸花', '手腕花', '婚禮布置'],
        乾燥花飾品: ['耳環', '手鍊']
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        price: this.form.price === null ? null : this.form.price > 0,
        category: this.form.category.length === 0 ? null : true
      }
    }
  },
  methods: {
    async submitModal (event) {
      event.preventDefault()
      if (!this.state.name || !this.state.price || !this.state.category) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.modalSubmitting = true
      const fd = new FormData()
      for (const key in this.form) {
        if (key === 'category') {
          fd.append(key, JSON.stringify(this.form[key]))
        } else if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products.push(data.result)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products[this.form.index] = { ...this.form, image: data.result.image }
          this.$refs.table.refresh()
        }
        this.$bvModal.hide('modal-product')
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.modalSubmitting = false
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        price: 0,
        description: '',
        image: null,
        sell: false,
        category: { big: '', small: '' },
        _id: '',
        index: -1
      }
    },
    editProduct (index) {
      this.form = {
        name: this.products[index].name,
        price: this.products[index].price,
        description: this.products[index].description,
        image: null,
        sell: this.products[index].sell,
        category: { big: '', small: '' },
        _id: this.products[index]._id,
        index
      }
      this.$bvModal.show('modal-product')
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
