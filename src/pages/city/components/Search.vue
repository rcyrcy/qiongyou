<template>
<div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        <!-- 与数据keyword进行双向绑定 -->
    </div>
    <div class="search-content">
        <ul>
            <li>123</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name:"CitySearch",
    porps:{  //接收cities  类型为Object
        cities:Object
    },
    data () {
        return { 
            // 数据 keyword为空 用以与搜索框双向绑定
            keyword:'',
            list:[],
            timer:null  //定义timer 用于截流
        }
    },
    watch:{  //监听器  监听keyword 的改变
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                const result = []
                for(let i in this.cities){ // 循环cities数据
                    this.cities[i].forEach((value)=>{ // 遍历cities的(ABCD每个键值对内的数组)
                        if(value.spell.indexOf(this.keyword)>-1 || 
                        value.name.indexOf(this.keyword)>-1){ //如果能搜索到 spell或name 
                            result.push(value)
                        }
                    })
                }
                this.list=result  //将result 给到list
            },100)
        }
    }
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
.search-content
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    background blue
    z-index 1
</style>
