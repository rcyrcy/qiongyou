<template>
  <div>
    <div class="gambit-title">
      游记与话题
      <span>更多</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of gambitList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HomeGambit",
  props: {
    gambitList: Array,
    outerRef: Object
  }
  // updated() {
  //   this.outerRef.refresh();
  // }
};
</script>


<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.gambit-title {
  line-height: 1rem;
  text-align: center;
  font-size: 0.35rem;
  font-weight: 600;
  height: 1rem;
}

.item {
  overflow: auto;

  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

    .item-img {
      width: 100%;
    }
  }

  .item-info {
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      height: 0.54rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      height: 0.4rem;
      ellipsis();
    }
  }
}
</style>


