<template>
<div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
</div>
</template>

<script>
export default {
    name:"CitySearch"
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height .72rem
    padding 0 .1rem
    position relative
    background $bgColor
    .search-input
        width 100%
        height .52rem
        line-height .52rem
        margin-top .1rem
        text-align center
        border-radius .26rem
        color #666
</style>
