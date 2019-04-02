<template>
  <div class="icons">
    <ul>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <li class="icon" v-for="value of page" :key="value.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="value.imgUrl">
            </div>
            <p class="icon-desc">{{value.desc}}</p>
          </li>
        </swiper-slide>
      </swiper>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: false,
        autoplay: false
      }
    };
  },
  props: {
    cionList: Array
  },

  computed: {
    pages() {
      const pages = [];
      this.cionList.forEach((item, index) => {
        const page = Math.floor(index / 5);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 20%;
  overflow: auto;
}

.icon {
  overflow: auto;
  float: left;
  width: 20%;
  padding-bottom: 20%;
  position: relative;
  height: 0;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      height: 100%;
      width: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .icon-desc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: $darkTextColor;
    text-align: center;
    ellipsis();
  }
}
</style>
