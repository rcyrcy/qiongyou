<template>
  <div>
    <detail-banner></detail-banner>
    <keep-alive>
      <detail-header></detail-header>
    </keep-alive>
    <div class="content"></div>
  </div>
</template>


<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>


<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
