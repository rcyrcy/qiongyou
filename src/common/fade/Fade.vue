<template>
  <!-- 动画渐隐渐显 -->
  <transition>
    <slot></slot>
  </transition>
</template>


<script>
export default {
  name: "CommonFade"
};
</script>


<style lang="stylus" scoped>
// vue 自带的样式 可实现动画效果
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s;
}
</style>
