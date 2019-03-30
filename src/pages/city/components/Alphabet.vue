<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLettercClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchand="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStarts: false,
      startY: 0,
      timer: null //截流用
    };
  },
  updated() {
    //当页面的数据更新后同时页面完成了自己的渲染的时候
    this.startY = this.$refs["A"][0].offsetTop;
    // 计算出  从A开始滑动时  列表距离顶部的距离 并赋值给startY
  },
  computed: {
    // 通过计算属性定义数组类型数据  (因为需要数组存储列表好实现字母列表跟城市列表同步)
    letters() {
      const letters = [];
      for (let i in this.cities) {
        //循环cities数据
        letters.push(i); // 将循环的每一项push进letters数组内
      }
      return letters;
    }
  },
  methods: {
    handleLettercClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      //当手指触摸时
      this.touchStarts = true;
    },
    handleTouchMove(e) {
      //手指滑动时
      if (this.touchStarts) {
        if (this.timer) {
          //如果已经存在
          clearTimeout(this.timer); //去除
        }
        this.timer = setTimeout(() => {
          // 否则创造
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 23);
          //touches数组内存储着Touch对象
          //而Touch存储很多clientX,clientY,pageY...这样的值
          //将手指距离页面顶部的高度赋给touchY
          // 79 是 (search)搜索框和header 的高度 自己算的
          //20 是字母高度
          //  index 计算出的字母对应下标
          if (index >= 0 && index < this.letters.length) {
            // 如果 下标大于等于0 并且 下标小于letters的长度时
            this.$emit("change", this.letters[index]);
            // 触发changer 实现跟随
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      //当滑动结束时
      this.touchStarts = false;
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    line-height: 0.44rem;
    color: $bgColor;
    height: 0.44rem;
  }
}
</style>
