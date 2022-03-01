<template>
<div class="content-header">
  <div id="carousel">
    <b-carousel  fade id="carousel-1" v-model="slide" controls  @sliding-start="onSlideStart" @sliding-end="onSlideEnd" class="h-100">
      <router-link to="/flower">
        <b-carousel-slide img-src="../assets/image/Carousel-img_1.jpg">
        </b-carousel-slide>
      </router-link>
      <router-link to="/wedding">
        <b-carousel-slide img-src="../assets/image/Carousel-img_2.jpg">
        </b-carousel-slide>
      </router-link>
      <router-link to="/accessories">
        <b-carousel-slide img-src="../assets/image/Carousel-img_3.jpg">
        </b-carousel-slide>
      </router-link>
    </b-carousel>
  </div>
  <section class="section01 w-100">
        <b-row class="w-100">
          <b-col cols="12" md="12" lg="12" class="mb-5">
            <div class="section01-font">
            <p class="text-center font">花研院</p>
            <p class="text-center font">陪伴你每個時刻</p>
            <p class="text-center font">讓花幫你傳遞那些說不出口的話</p>
            </div>
            </b-col>
          <b-col  cols="12" md="12" lg="12"  class="mt-5">
            <p class="text-center font">送禮花束 | 客製化花禮</p>
            <p class="text-center font">婚禮佈置 | 活動場地佈置</p>
            <p class="text-center font">花藝飾品 | 各樣飾品</p>
          </b-col>
          <b-col cols="12" md="12" lg="12" class="text-center mt-3">
            <b-button to="/flower" class="btn-color w-25 py-3">選購商品</b-button>
          </b-col>
        </b-row>
  </section>

  <section class="section02  w-75 mx-auto">
    <b-row>
      <b-col  cols="12" lg="12" md="12" class="mx-auto">
        <h1 class="text-center mb-5">本月熱銷商品</h1>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <router-link to="/flower">
              <div class="container">
                <img src="../assets/image/flower-1.jpg" style="width:100%">
                  <div class="hot text-center pt-3">
                    <b-icon icon="cart2" font-scale="3" variant="white"></b-icon>
                  </div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/flower">
              <div class="container">
                <img src="../assets/image/flower-2.jpg" style="width:100%">
                  <div class="hot text-center pt-3">
                    <b-icon icon="cart2" font-scale="3" variant="white"></b-icon>
                  </div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/flower">
              <div class="container">
                <img src="../assets/image/flower-3.jpg" style="width:100%">
                  <div class="hot text-center pt-3">
                    <b-icon icon="cart2" font-scale="3" variant="white"></b-icon>
                  </div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/flower">
              <div class="container">
              <img src="../assets/image/flower-4.jpg" style="width:100%">
                <div class="hot text-center pt-3">
                  <b-icon icon="cart2" font-scale="3" variant="white"></b-icon>
                </div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/flower">
              <div class="container">
                <img src="../assets/image/flower-7.jpg" style="width:100%">
                  <div class="hot text-center pt-3">
                    <b-icon icon="cart2" font-scale="3" variant="white"></b-icon>
                  </div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/flower">
              <div class="container">
              <img src="../assets/image/flower-6.jpg" alt="" style="width:100%">
                <div class="hot text-center pt-3">
                      <b-icon icon="cart2" font-scale="3" variant="white"></b-icon>
                    </div>
              </div>
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </b-col>
    </b-row>
  </section>

  <section class="section03 mx-auto w-100 pb-5 h-auto">
      <b-row class="m-0">
        <b-col lg="6" sm="12" md="12">
          <div class="photo-back mx-auto">
            <img src="../assets/image/Serve-img.jpg" class="photo">
          </div>
        </b-col>
        <b-col lg="6" sm="12" md="12" class="mt-5 mt-lg-0">
          <h1 class="text-center bold serve mt-5 mt-lg-0">客製化服務</h1>
          <p class="text-center mt-4">提供以下資訊我們將盡快與您聯絡</p>
          <div>
            <b-form class="w-75 mx-auto">
              <b-form-group label="名稱:"  label-for="input-name">
                <b-form-input id="input-name" v-model="form.name" type="text" placeholder="聯絡姓名" required class="p-4"></b-form-input>
              </b-form-group>
              <b-form-group label="電話:"  label-for="input-phone">
                <b-form-input id="input-phone" v-model="form.phone" type="text" placeholder="聯絡電話" required class="p-4"></b-form-input>
              </b-form-group>
              <b-form-group label="電子信箱:"  label-for="input-email">
                <b-form-input id="input-email" v-model="form.email" type="email" placeholder="電子信箱" required class="p-4"></b-form-input>
              </b-form-group>
              <label for="textarea">訊息留言</label>
              <b-form-textarea id="textarea" v-model="form.message" rows="3" max-rows="6" ></b-form-textarea>
              <b-button type="submit" class="w-100 mt-4 btn-color" @click="send">送出</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
  </section>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      slide: 0,
      sliding: null,
      swiperOption: {
        // slidesPerView: 3,
        // spaceBetween: 30,
        breakpoints: {
          1028: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 60
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        initialSlide: 0,
        loop: true,
        paginationClickable: true
      }
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    async send () {
      try {
        await this.api.post('/servers', this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '將會盡速與您聯絡'
        })
        this.form = ''
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得資訊失敗'
        })
      }
    }
  }

}
</script>
