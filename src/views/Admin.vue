<template>
<div>
  <adminHeader></adminHeader>
  <router-view></router-view>
</div>
</template>

<script>
import adminHeader from '../components/AdminHeader.vue'

export default {
  name: 'app',
  components: {
    adminHeader
  }
}

</script>
