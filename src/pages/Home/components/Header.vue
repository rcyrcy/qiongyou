<template>
  <div class="header">
    <div class="header-menu">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <router-link style="float:right;overflow:hidden" to="/city">
      <div class="header-city">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  line-height: $headerHeight;
  height: $headerHeight;
  width: 100%;
  background: $bgColor;
  color: #fff;

  .header-menu {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-city {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff;
    margin-right: 8px;

    .arrow-icon {
      font-size: 0.24rem;
      margin-left: 0.1rem;
    }
  }
}
</style>
