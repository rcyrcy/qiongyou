<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <keep-alive>
      <detail-header></detail-header>
    </keep-alive>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>


<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import { getDetail } from "@/api/detail";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  mounted() {
    getDetail().then(res => {
      if (res.ret == true) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    });
  }
};
</script>


<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
