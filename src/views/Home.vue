<template>
<div class="content">
  <div id="carousel">
  <b-carousel  id="carousel-1" v-model="slide" controls style="text-shadow: 1px 1px 2px #333;"   @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide img-src="../../image/5.jpg" class="img-fluid" width="1600" height="100"></b-carousel-slide>
        <b-carousel-slide img-src="../../image/6.jpg" class="img-fluid" width="1600" height="100"></b-carousel-slide>
        <b-carousel-slide img-src="../../image/3.jpg" class="img-fluid" width="1600" height="100"></b-carousel-slide>
  </b-carousel>
  </div>

    <section class="section01 w-100 ">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <b-img src="../../image/花1.jpg" width="500px" hight="4794px"></b-img>
          </div>
          <div class="col-12 col-lg-6">
            <b-img src="../../image/花2.jpg" width="500px" hight="4794px"></b-img>
          </div>
          <div class="col-12">
          <h1 class="mx-auto text-center mt-5">花研院，陪伴你每一個重要時</h1>
          </div>
          <div class="col-12 d-flex justify-content-center">
          <b-button  squared variant="outline-dark" class="buy w-25 h-100 my-3">選購商品</b-button>
          </div>
        </div>
    </div>
    </section>

    <section class="section02  w-100">
      <h1 class="text-center">本月熱銷商品</h1>
      <div class="row d-flex flex-row px-5 mt-5 mx-0">
        <div class="col-3">
          <b-card img-src="../../image/花_0.jpg" img-alt="Image" img-top tag="article">
          <!-- <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#"  class="d-flex jus">more</b-button> -->

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
        <!-- <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#">
          <b-icon icon="arrow-right"></b-icon>
        </b-button> -->
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
        <!-- <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#">
          <b-icon icon="arrow-right"></b-icon>
        </b-button> -->
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
        <!-- <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#">
          <b-icon icon="arrow-right"></b-icon>
        </b-button> -->
        </b-card>
      </div>

    </div>
    </section>

    <section class="section03 w-100 d-flex justify-content-center flex-column align-items-center">
    </section>
</div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
