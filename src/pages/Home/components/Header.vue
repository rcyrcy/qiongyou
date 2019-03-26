<template>
<div class="header">
    <div class="header-menu">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <router-link style="float:right;overflow:hidden" to="/city">
        <div class="header-city">
            北京<span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </router-link>
</div>
</template>

<script>
export default {
    name:"HomeHeader",
    props:{
        city:String
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    line-height :$headerHeight
    height :$headerHeight
    width 100%
    background :$bgColor
    color:#fff
    .header-menu
        width :.64rem
        float: left 
        .back-icon
            text-align :center
            font-size :.4rem
    .header-city
        width :1.24rem
        float: right  
        text-align :center
        color :#fff
        .arrow-icon
            font-size :.24rem
            margin-left :.1rem  
</style>
