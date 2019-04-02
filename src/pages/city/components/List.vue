<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            v-for="item of hot"
            :key="item.id"
            class="button-wrapper"
            @touchend.prevent="handelCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @touchend.prevent="handelCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  computed: {
    // ...mapState(["city"])
    // 也可以是对象
    ...mapState({ currentCity: "city" })
    // 将vuex里面的city这个功能的数据 映射到这个组件的计算属性里 映射后的名字叫currentCity
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handelCityClick(city) {
      //当点击城市时action将得到派发 vuex内对应的action 将会得到city
      // this.$store.dispatch("changeCity", city);
      //因为跳过了actions 所以用commit 直接调用mutations
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      //当城市被点击后跳转
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>


<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;

  .title {
    line-height: 0.5rem;
    height: 0.5rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.3rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        padding: 0.1rem 0;
        margin: 0.1rem;
        text-align: center;
        border: 0.02rem solid #2bab79;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.8rem;
      height: 0.8rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>
