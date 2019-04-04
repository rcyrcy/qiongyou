<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
    </common-fade>
  </div>
</template>


<script>
import CommonGallary from "common/gallary/Gallary";
import CommonFade from "common/fade/Fade";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false
    };
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClick() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary,
    CommonFade
  }
};
</script>


<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      font-size: 0.32rem;
      flex: 1;
      padding: 0 0.2rem;
      color: #fff;
    }

    .banner-number {
      line-height: 0.32rem;
      height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
