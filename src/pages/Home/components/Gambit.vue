<template>
    <div>
        <div class="gambit-title">
            游记与话题
            <span>更多</span>
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of gambitList" :key=item.id>
                <div class="item-img-wrapper">
                    <img :src=item.imgUrl class="item-img">
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
    name:"HomeGambit",
    props:{
        gambitList:Array
    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.gambit-title
    height :1rem
    line-height :1rem
    text-align :center
    font-size : 0.35rem
    font-weight :600
.item-img-wrapper
    overflow : hidden
    height :0
    padding-bottom:37.09%
    .item-img
        width :100%
.item-info
    flex :1
    padding :.1rem
    min-width :0
    .item-title
        line-height :.53rem
        font-size :.32rem
        ellipsis()
    .item-desc
        line-height :.43rem
        color :#ccc
        ellipsis()
</style>


