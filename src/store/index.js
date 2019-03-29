import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'杭州'
    },
    // 当改变state时 没有异步操作并且操作简单没有批量操作
    //其实可以越过actions 直接调用mutations 改变state
    /**
     * actions:{  //想要actions内的方法执行时调用mutations内的方法 需要commit
        changeCity(ctx,city){  //ctx 上下文参数 作用可以拿到commit
            ctx.commit('changeCity',city)
        }
    },
    * */
    mutations:{ // 让点击后得到的city 等于 state内的city
        changeCity(state,city){
            state.city = city
        }
    }
})