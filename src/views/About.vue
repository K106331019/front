<template>
<div class="content h-auto">
  <h1 class="text-center mt-5 pt-5">About</h1>
  <div class="w-25 h-25 bg-warning"></div>
  <img src="../../image/pic.jpg" class="mt-5">
  <section class="story-section01  d-flex align-items-center ">
    <div class="row mx-5 w-100 h-100 d-flex align-items-center">
      <div class="col-6 text-center">
        <img src="../../image/logo.png" alt="" class="w-25 h-25">
      </div>
      <div class="col-6  my-auto">
        <h2 class="text-secondary">
          花點心思，研究生活中不經意發生的美好，<br>
          儀式感由花來創造，每個美好時刻都值得慶祝及紀念<br>
          花研院陪伴你每一個重要時刻
        </h2>
      </div>
    </div>
  </section>
  <section class="w-75 mx-auto">
    <carousels></carousels>
  </section>
</div>
</template>

<script>
import carousels from '../components/carousel.vue'

export default {
  name: 'app',
  components: {
    carousels
  }
}
</script>
