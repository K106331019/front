<template>
<div>
  <headers></headers>
  <router-view :key="$route.fullPath"></router-view>
  <footers></footers>
  </div>
</template>

<script>
import headers from '../components/Header.vue'
import footers from '../components/Footer.vue'

export default {
  name: 'app',
  components: {
    headers,
    footers
  }
}
</script>
