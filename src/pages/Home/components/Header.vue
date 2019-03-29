<template>
  <div class="header">
    <div class="header-menu">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <router-link style="float:right;overflow:hidden" to="/city">
      <div class="header-city">
        <!-- {{this.$store.state.city}} 没用...mapState(["city"])映射前的写法-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"])
    //...mapState 是指 把vuex里面的数据映射到这个组件的computed的计算属性里
    //把city这个公用数据映射到名字叫city的计算属性中
  }
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
    min-width: 1.04rem;
    padding: 0 0.1rem;
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
