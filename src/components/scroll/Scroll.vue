<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    vertical: {
      // 指定滚动条的方向
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    mouseWheel: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _initScroll() {
      // 校验
      var { wrapper } = this.$refs;

      if (!wrapper) {
        return;
      }

      if (this.scroll) {
        this.scroll.refresh();
        return;
      }

      var options = {
        probeType: this.probeType,
        click: this.click,
        mouseWheel: this.mouseWheel
      };

      if (!this.vertical) {
        options.scrollX = true;
        options.scrollY = false;

        // 设置content高度
        this._initContentWidth();
      }
      this.scroll = new BScroll(wrapper, options);
    },
    _initContentWidth() {
      if (this.vertical) return;

      var { content } = this.$refs;

      if (!content || !content.children.length) return;

      var child = content.children[0];
      var w = child.offsetWidth,
        l = content.children.length;
      content.style.width = l * (w + 10) + "px";
    },
    // refresh() {
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll(this.$refs.wrapper, {
    //         probeType: this.probeType,
    //         click: this.click,
    //         mouseWheel: this.mouseWheel
    //       });
    //     }
    //     this._initContentWidth();
    //     this.scroll.refresh();
    //   });
    // }
    refresh() {
      this.$nextTick(() => {
        this._initContentWidth();
        this.scroll.refresh();
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>


