<template>
  <div>
    <div class="recommend-title">精选折扣 每日更新</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  }
};
</script>


<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.35rem;
  font-weight: 600;
}

.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    padding: 0.1rem;

    .item-title {
      line-height: 0.53rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.43rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      margin-top: 0.2rem;
      color: #fff;
      line-height: 0.44rem;
    }
  }
}
</style>
