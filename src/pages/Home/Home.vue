<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-search></home-search>
    <home-icons :cionList="cionList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-gambit :gambitList="gambitList" :outer-ref="$refs.myScroll"></home-gambit>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeSearch from "./components/Search";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeGambit from "./components/Gambit";
import { getSwiper } from "@/api/home";
import { getIcons } from "@/api/home";
import { getRecommend } from "@/api/home";
import { getGambit } from "@/api/home";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeSearch,
    HomeIcons,
    HomeRecommend,
    HomeGambit
  },
  data() {
    return {
      swiperList: [],
      cionList: [],
      recommendList: [],
      gambitList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
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
    getRecommend(this.city).then(res => {
      if (res.code == 1) {
        this.recommendList = res.data;
      }
    });
    getGambit().then(res => {
      if (res.code == 1) {
        this.gambitList = res.data;
      }
    });
  }
};
</script>

<style lang="stylus">
</style>
