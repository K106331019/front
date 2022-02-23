<template>
<div class="content-header">
  <!-- <img src="../../image/6.jpg" class=""> -->
  <div id="carousel">
  <b-carousel  id="carousel-1" v-model="slide" controls  @sliding-start="onSlideStart" @sliding-end="onSlideEnd" class="h-100">
      <b-carousel-slide img-src="../../image/5.jpg" width="1024" height="300">
      </b-carousel-slide>
      <b-carousel-slide img-src="../../image/6.jpg" width="1024" height="300">
      </b-carousel-slide>
    </b-carousel>
  </div>
  <section class="section01 w-100">
        <b-row class="w-100">
          <b-col lg="12" class="mb-5">
            <div class="section01-font">
            <p class="text-center font">花研院</p>
            <p class="text-center font">陪伴你每個時刻</p>
            <p class="text-center font">讓花幫你傳遞那些說不出口的話</p>
            </div>
            </b-col>
          <b-col lg="12" class="mt-5">
            <p class="text-center font">送禮花束 | 客製化花禮</p>
            <p class="text-center font">婚禮佈置 | 活動場地佈置</p>
            <p class="text-center font">花藝飾品 | 各樣飾品</p>
          </b-col>
          <b-col cols="12" class="text-center mt-3">
            <b-button to="/flower" class="btn-color w-25 py-3">選購商品</b-button>
          </b-col>
        </b-row>
  </section>

  <section class="section02  w-75 mx-auto">
    <b-row>
      <b-col lg="12">
        <h1 class="text-center mb-5">本月熱銷商品</h1>
      </b-col>
      <b-col lg="12">
      <swiper class="swiper mt-5" :options="swiperOption">
        <swiper-slide>
          <img src="../../image/flower-1.jpg" class="carousel-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../image/flower-2.jpg" class="carousel-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../image/flower-3.jpg" class="carousel-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../image/flower-4.jpg" class="carousel-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../image/flower-5.jpg" class="carousel-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../image/flower-6.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </b-col>
    </b-row>
      <!-- <div class="row d-flex flex-row px-5 mt-5 mx-0">
        <div class="col-3">
          <b-card img-src="../../image/花_0.jpg" img-alt="Image" img-top tag="article">
        <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#"  class="d-flex jus">more</b-button>

          </b-card>
        </div>
      <div class="col-3">
        <b-card
        img-src="../../image/花_3.jpg"
        img-alt="Image"
        img-top
        style="max-width: 30rem; max-height:70rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#">
          <b-icon icon="arrow-right"></b-icon>
        </b-button>
        </b-card>
      </div>
      <div class="col-3">
        <b-card
        img-src="../../image/花_4.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 30rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#">
          <b-icon icon="arrow-right"></b-icon>
        </b-button>
        </b-card>
      </div>
      <div class="col-3">
        <b-card
        img-src="../../image/花_2.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 30rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#">
          <b-icon icon="arrow-right"></b-icon>
        </b-button>
        </b-card>
      </div>

    </div> -->
    </section>

  <section class="section03 mx-auto w-100 pb-5 h-auto">
      <b-row class="m-0">
        <b-col lg="6" sm="12">
          <div class="photo-back mx-auto"></div>
          <img src="../../image/flower-7.jpg" width="600" height="500" class="photo">
        </b-col>
        <b-col lg="6" sm="12">
          <h1 class="text-center bold serve">客製化服務</h1>
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
        slidesPerView: 3,
        spaceBetween: 30,
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
