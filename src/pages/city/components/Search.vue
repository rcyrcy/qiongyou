<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
      <!-- 与数据keyword进行双向绑定 -->
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handelCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        <!-- v-show="!list.length" 如果长度为0时显示没有找到匹配数据 -->
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    //接收cities  类型为Object
    cities: Object
  },
  data() {
    return {
      // 数据 keyword为空 用以与搜索框双向绑定
      keyword: "",
      list: [],
      timer: null //定义timer 用于截流
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    //监听器  监听keyword 的改变
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        //如果输入框为空
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          // 循环cities数据
          this.cities[i].forEach(value => {
            // 遍历cities的(ABCD每个键值对内的数组)
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              //如果能搜索到 spell或name
              result.push(value);
            }
          });
        }
        this.list = result; //将result 给到list
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  methods: {
    handelCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  position: relative;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 0.52rem;
    line-height: 0.52rem;
    margin-top: 0.1rem;
    text-align: center;
    border-radius: 0.26rem;
    color: #666;
  }
}

.search-content {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  background: #ccc;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>
