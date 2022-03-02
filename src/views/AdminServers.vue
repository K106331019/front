<template>
  <b-table :items="servers" :fields="fields" head-variant="light" class="mt-5">
    <template #cell(name)="data">
      {{ data.item.name }}
    </template>
    <template #cell(phone)="data">
      {{ data.item.phone }}
    </template>
    <template #cell(message)="data">
      {{ data.item.message }}
    </template>
  </b-table>
</template>

<script>
export default {
  data () {
    return {
      servers: [],
      fields: [
        { key: '_id', label: '顧客編號' },
        { key: 'name', label: '顧客姓名' },
        { key: 'phone', label: '連絡電話' },
        { key: 'message', label: '服務內容' }
      ],
      options: [
        { value: 'true', text: '完成' },
        { value: 'false', text: '未完成' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/servers/all', {
        headers: {
          authorization: 'Bearer' + this.user.token
        }
      })
      this.servers = data.result
      console.log(this.servers)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得資訊失敗'
      })
    }
  }
}
</script>
