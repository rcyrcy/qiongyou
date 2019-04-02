<template>
  <div class="wrapper-wrap">
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="value of swiperList" :key="value.id">
          <img class="swiper-img" :src="value.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper-wrap {
  overflow: auto;
  width: 100%;

  .wrapper {
    height: 0;
    padding-bottom: 53.12%;
    background: #ccc;

    .swiper-img {
      width: 100%;
    }
  }
}
</style>

