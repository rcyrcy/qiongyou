<template>
  <!-- <div ref="wrapper"> -->
  <div>
    <Scroll ref="myScroll">
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <!-- <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-search></home-search>
        <home-icons :cionList="cionList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-gambit :gambitList="gambitList" :outer-ref="$refs.myScroll"></home-gambit>-->
      </div>
    </Scroll>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeSearch from "./components/Search";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeGambit from "./components/Gambit";
// import Bscroll from "better-scroll";
import Scroll from "@/components/scroll/Scroll";
import { getSwiper } from "@/api/home";
import { getIcons } from "@/api/home";
import { getRecommend } from "@/api/home";
import { getGambit } from "@/api/home";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeSearch,
    HomeIcons,
    HomeRecommend,
    HomeGambit,
    Scroll
  },
  data() {
    return {
      swiperList: [],
      cionList: [],
      recommendList: [],
      gambitList: []
    };
  },
  // methods: {
  //   _initScroll() {
  //     var { wrapper } = this.$refs;
  //     if (!wrapper) {
  //       return;
  //     }
  //     if (this.scroll) {
  //       this.scroll.refresh();
  //       return;
  //     }
  //     this.scroll = new Bscroll(this.$refs.wrapper);
  //   },
  //   refresh() {
  //     this.$nextTick(() => {
  //       this.scroll.refresh();
  //     });
  //   }
  // },
  mounted() {
    getSwiper().then(res => {
      if (res.code == 1) {
        this.swiperList = res.data;
      }
    });
    getIcons().then(res => {
      if (res.code == 1) {
        this.cionList = res.data;
      }
    });
    getRecommend().then(res => {
      if (res.code == 1) {
        this.recommendList = res.data;
      }
    });
    getGambit().then(res => {
      if (res.code == 1) {
        this.gambitList = res.data;
      }
    });
    // this.$nextTick(() => {
    //   this._initScroll();
    // });
  }
};
</script>

<style lang="stylus">
li {
  height: 0.6rem;
  background: red;
}
</style>
