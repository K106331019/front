<template>
  <swiper class="swiper" ref="swiper" :options="swiperOption">
    <swiper-slide>
      <img src="../../image/about-1.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../image/about-2.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../image/about-3.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../image/about-4.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../image/about-5.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../image/about-6.jpg" alt="">
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-change-direction',
  title: 'Change direction',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960
                ? 'vertical'
                : 'horizontal'
            )
          }
        }
      }
    }
  }
}
</script>
