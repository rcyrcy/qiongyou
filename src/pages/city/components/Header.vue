<template>
    <div class="Header">
        所在城市
        <router-link to="/">
            <div class="iconfont city-back">&#xe624;</div>
        </router-link>
        
    </div>
    
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.Header
    line-height $headerHeight
    height $headerHeight
    overflow hidden
    text-align center
    color #fff
    background $bgColor
    font-size .3rem
    position relative
    .city-back
        position absolute
        top 0
        left 0
        width .64rem
        text-align center
        font-size .4rem
        color #fff
</style>
